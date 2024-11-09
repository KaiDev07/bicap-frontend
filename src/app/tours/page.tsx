"use client";

import { useState, useEffect } from "react";
import userApi from "@/http/userApi";
import TourCard from "@/components/TourCard";
import toast from "react-hot-toast";
import { useAppSelector } from "@/lib/hooks";

export type Tour = {
    _id: string;
    name: string;
    rating: string;
    numberOfReviews: string;
    description: string;
    price: string;
    location: string;
    imageName: string;
    imageUrl: string;
};

export default function ToursPage() {
    const user = useAppSelector((state) => state.user);
    const [tours, setTours] = useState<Tour[]>([]);
    const [favoriteTours, setFavoriteTours] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            return;
        }

        async function getTours() {
            try {
                setIsLoading(true);

                const response = await userApi.get("/tour/allTours");
                setTours(response.data.tours);
                setFavoriteTours(response.data.favoriteTours);
            } catch (error) {
                toast.error("Произошла непредвиденная ошибка");
            } finally {
                setIsLoading(false);
            }
        }

        getTours();
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
                    <h1>Все туры:</h1>
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
                                    isInFavorites={favoriteTours.includes(
                                        tour._id
                                    )}
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
