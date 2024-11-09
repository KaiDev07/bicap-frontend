"use client";

import Image from "next/image";
import { useState } from "react";
import { useAppSelector } from "@/lib/hooks";
import toast from "react-hot-toast";
import userApi from "@/http/userApi";
import { isAxiosError } from "axios";

export default function TourCard({
    _id,
    name,
    location,
    imageUrl,
    rating,
    price,
    isInFavorites,
}: {
    _id: string;
    name: string;
    location: string;
    imageUrl: string;
    rating: string;
    price: string;
    isInFavorites: boolean;
}) {
    const user = useAppSelector((state) => state.user.user);
    const [inFavorites, setInFavorites] = useState(isInFavorites);
    const [isLoading, setIsLoading] = useState(false);

    const toggleFavorites = async () => {
        if (isLoading) {
            return;
        }
        if (!user) {
            toast.error("Войдите в аккаунт, чтобы добавить в избранные!");
            return;
        }

        try {
            setIsLoading(true);
            if (inFavorites) {
                const response = await userApi.post(
                    "/tour/removeFromFavorites",
                    {
                        tourId: _id,
                    }
                );
                setInFavorites(false);
            } else {
                const response = await userApi.post("/tour/addToFavorites", {
                    tourId: _id,
                });
                setInFavorites(true);
            }
        } catch (error) {
            if (isAxiosError(error)) {
                toast.error(
                    error.response?.data.error ||
                        "Произошла непредвиденная ошибка"
                );
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="tour-card">
            <div className="tour-img-container">
                <Image src={imageUrl} alt="" fill />
                <div className="heart-container" onClick={toggleFavorites}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="Layer_1"
                        data-name="Layer 1"
                        viewBox="0 0 122.88 107.39"
                        fill="#ed1b24"
                        fillRule="evenodd"
                        className={inFavorites ? "" : "not-in-favorites-heart"}
                    >
                        <path d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
                    </svg>
                </div>
            </div>
            <div className="tour-padding">
                <div className="tour-flex">
                    <b>{name}</b>
                    <div className="tour-flex-right">
                        <div className="black-star-container">
                            <Image
                                src="/assets/images/black-star.svg"
                                alt=""
                                fill
                            />
                        </div>
                        <span>{rating}</span>
                    </div>
                </div>
                <div className="tour-flex">
                    <div className="tour-location-img-container">
                        <Image src="/assets/images/location.svg" alt="" fill />
                    </div>
                    <span>{location}</span>
                </div>
                <span>
                    <b>${price}</b>
                    {"   "} тур-пакет
                </span>
            </div>
        </div>
    );
}
