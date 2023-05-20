

import React from "react";
import { createProviderFactory, createSlice } from "src/factory";

const aggregateSlice = createSlice({
    initialValue: {
        count: 11,
        like: 99,
        users: [] as any[],
    },
    reducers: {
        increment: (state) => {
            return {
                ...state,
            };
        },
        addUser: (state, payload) => {
            state.users.push(payload);
            return {
                ...state,
            };
        },
        cong: (state) => {
            return {
                ...state,
            };
        },
    },
});

export const { increment, addUser, cong } = aggregateSlice.actions;

// like middleware
const middleware = (dispatch: any) => {
    return {
        getApi: async (payload: any) => {
            const resp = await (
                await fetch("https://jsonplaceholder.typicode.com/todos/1")
            ).json();
            console.log({ payload });
            dispatch(addUser(resp));
        },
    };
};

export const {
    useContextState: useAudioContextState,
    useContextDispatch: useAudioContextDispatch,
    Provider,
} = createProviderFactory({
    name: "AudioAssessment",
    slice: aggregateSlice,
    middleware: middleware,
});
