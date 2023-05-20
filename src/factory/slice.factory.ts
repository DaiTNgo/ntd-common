type CreateSliceParams<TState, TReducers> = {
    initialValue: TState;
    reducers: TReducers;
};

export type CreateSliceReturn<TState, TReducers> = {
    actions: Record<
        keyof TReducers,
        <T>(payload?: T) => { payload: T; type: keyof TReducers }
    >;
    reducer: <TPayload>(state: TState, action: TAction<TPayload>) => TState;
    initialValue: TState;
};

export type TAction<TPayload> = {
    type: string;
    payload: TPayload;
};
type TFunctionReducer<TState, TPayload> = (
    state: TState,
    payload: TPayload
) => TState;

type TFunctionCreator<TPayload> = (payload?: TPayload) => TAction<TPayload>;

export const createSlice = <
    TPayload,
    TState,
    TReducers ,
>({
    initialValue,
    reducers,
}: CreateSliceParams<TState, TReducers>) => {
    const reducer = <TPayload>(
        state = initialValue,
        action: TAction<TPayload>
    ): TState => {
        const mapper = new Map(Object.entries(reducers));

        const fn = mapper.get(action.type);
        if (fn) {
            return fn(state, action.payload);
        }

        return state;
    };

    const actions = Object.keys(reducers).reduce((acc, key) => {
        return {
            ...acc,
            [key]: (payload?: any) => ({
                type: key,
                payload,
            }),
        };
    }, {} as Record<keyof TReducers, TFunctionCreator<TPayload>>);



    return {
        actions,
        reducer,
        initialValue,
    };
};
const reducers = {
    increment: (state, payload: number) => {
        return state;
    },
    decrement: (state, payload: number) => {
        return state;
    },
}
const { initialValue, reducer, actions } = createSlice({
    initialValue: {
        count: 1,
        user: ["a", "b", "c"],
    },
    reducers: reducers,
});
const { increment, decrement } = actions;
decrement();

type B = {
    [key in keyof typeof reducers]: any;
}[keyof typeof reducers]
type A<T> = {
    [key in keyof typeof reducers]: (payload?: T) => void;
}[keyof typeof reducers]
