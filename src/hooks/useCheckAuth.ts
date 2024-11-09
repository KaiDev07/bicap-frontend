import userApi from "@/http/userApi";
import { useAppDispatch } from "@/lib/hooks";
import { setUser, setIsLoading } from "@/lib/features/user/userSlice";

export const useCheckAuth = () => {
    const dispatch = useAppDispatch();

    const checkAuth = async () => {
        try {
            dispatch(setIsLoading(true));
            const response = await userApi.get(`/user/refresh`);
            console.log(response);
            dispatch(setIsLoading(false));
            localStorage.setItem("token", response.data.accessToken);
            dispatch(setUser(response.data.user));
        } catch (error) {
            dispatch(setIsLoading(false));
            console.log(error);
        }
    };

    return { checkAuth };
};
