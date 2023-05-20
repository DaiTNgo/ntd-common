import { createSlice } from "../slice.factory";

type TPayloadIncrement = number;
type TPayloadDecrement = string;
const reducers = {
    increment: (state, payload: TPayloadIncrement) => {
        return state;
    },
    decrement: (state, payload: TPayloadDecrement) => {
        return state;
    },
};
const { initialValue, reducer, actions } = createSlice({
    initialValue: {
        count: 1,
        user: ["a", "b", "c"],
    },
    reducers: {
        __INCREMENT__: (state, payload: TPayloadIncrement) => {
            return state;
        },
        decrement: (state, payload: TPayloadDecrement) => {
            return state;
        },
    },
});
const { increment, decrement } = actions;
//
increment<TPayloadIncrement>(3);
// decrement<TPayloadDecrement>('a')
