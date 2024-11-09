import { useState } from "react";
import userApi from "../http/userApi";
import { useAppDispatch } from "@/lib/hooks";
import { setUser } from "@/lib/features/user/userSlice";
import { isAxiosError } from "axios";
import toast from "react-hot-toast";

export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const dispatch = useAppDispatch();

    const signup = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await userApi.post("/user/registration", {
                email,
                password,
            });
            console.log(response);

            setIsLoading(false);

            localStorage.setItem("token", response.data.accessToken);

            dispatch(setUser(response.data.user));
        } catch (error) {
            setIsLoading(false);
            if (isAxiosError(error)) {
                setError(error.response?.data.error);
                toast.error(
                    error.response?.data.error || "Что-то пошло не так"
                );
                console.log(error.response?.data.error);
            }
        }
    };

    return { isLoading, error, signup };
};
