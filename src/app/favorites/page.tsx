"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import userApi from "@/http/userApi";
import TourCard from "@/components/TourCard";
import toast from "react-hot-toast";
import type { Tour } from "../tours/page";
import { isAxiosError } from "axios";
import { useAppSelector } from "@/lib/hooks";

export default function ToursPage() {
    const user = useAppSelector((state) => state.user);
    const [tours, setTours] = useState<Tour[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (user.isLoading) {
            return;
        }
        if (!user.user) {
            toast.error("Водите в аккаунт, чтобы посмотреть избранные!");
            router.replace("/");
        }

        async function getFavoriteTours() {
            try {
                setIsLoading(true);

                const response = await userApi.get("/tour/favoriteTours");
                setTours(response.data);
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
        }

        getFavoriteTours();
    }, [user]);

    if (isLoading || user.isLoading) {
        return (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40vh",
                }}
            >
                <div className="my-loader"></div>
            </div>
        );
    }

    return (
        <main>
            <section id="tours">
                <div className="tours-wrapper">
                    <h1>Избранные туры:</h1>
                    <div className="tours-container">
                        {tours.length > 0 ? (
                            tours.map((tour) => (
                                <TourCard
                                    _id={tour._id}
                                    name={tour.name}
                                    location={tour.location}
                                    imageUrl={tour.imageUrl}
                                    rating={tour.rating}
                                    price={tour.price}
                                    isInFavorites={true}
                                    key={tour._id}
                                />
                            ))
                        ) : (
                            <p>Туры не найдены</p>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
