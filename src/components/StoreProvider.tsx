"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import store from "@/lib/store";

export default function StoreProvider({
    children,
}: {
    children: ReactNode | ReactNode[];
}) {
    return <Provider store={store}>{children}</Provider>;
}
