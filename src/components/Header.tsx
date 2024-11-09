"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import { useCheckAuth } from "@/hooks/useCheckAuth";

export default function Header() {
    const router = useRouter();
    const { user, isLoading } = useAppSelector((state) => state.user);
    const { checkAuth } = useCheckAuth();

    useEffect(() => {
        if (localStorage.getItem("token")) {
            checkAuth();
        }
    }, []);

    return (
        <header>
            <div className="header-wrapper">
                <div className="header-flex">
                    <Link href="/">NomadTravel</Link>
                    <div className="header-links">
                        <div className="header-link">
                            <div className="header-link-inner">
                                <Link href="/tours">
                                    <Image
                                        src="/assets/images/tours.png"
                                        alt="icon"
                                        fill
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="header-link">
                            <Link href="/favorites">
                                <Image
                                    src="/assets/images/heart.svg"
                                    alt="icon"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className="header-link">
                            <Link href="/">
                                <Image
                                    src="/assets/images/notification.svg"
                                    alt="icon"
                                    fill
                                />
                            </Link>
                        </div>
                        <div className="header-link">
                            <Link href="/">
                                <Image
                                    src="/assets/images/settings.svg"
                                    alt="icon"
                                    fill
                                />
                            </Link>
                        </div>
                        {user ? (
                            <div
                                className="header-link"
                                onClick={() => {
                                    router.push("/profile");
                                }}
                            >
                                <Image
                                    src="/assets/images/account.svg"
                                    alt="icon"
                                    fill
                                />
                            </div>
                        ) : (
                            <button
                                disabled={isLoading}
                                onClick={() => {
                                    router.push("/login");
                                }}
                            >
                                Войти
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
