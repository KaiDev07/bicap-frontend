import axios from "axios";

const userApi = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
});

userApi.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem(
            "token"
        )}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

userApi.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get(
                    `${process.env.API_URL}/user/refresh`,
                    { withCredentials: true }
                );
                localStorage.setItem("token", response.data.accessToken);
                return userApi.request(originalRequest);
            } catch (error) {
                console.log("ПОЛЬЗОВАТЕЛЬ НЕ АВТОРИЗОВАН");
            }
        }
        return Promise.reject(error);
    }
);

export default userApi;
