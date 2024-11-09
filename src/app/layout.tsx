import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StoreProvider from "@/components/StoreProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
    title: "Nomad Travel",
    description: "Quality",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StoreProvider>
                    <Toaster
                        toastOptions={{
                            style: {
                                padding: "20px",
                            },
                        }}
                    />
                    <Header />
                    {children}
                    <Footer />
                </StoreProvider>
            </body>
        </html>
    );
}
