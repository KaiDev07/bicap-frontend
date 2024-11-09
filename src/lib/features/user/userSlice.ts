"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type User = {
    id: string;
    email: string;
    isActivated: boolean;
};

export type InitialState = {
    user: User | null;
    isLoading: boolean;
};
const initialState: InitialState = { user: null, isLoading: false };

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
});

export default userSlice.reducer;
export const { setUser, setIsLoading } = userSlice.actions;
