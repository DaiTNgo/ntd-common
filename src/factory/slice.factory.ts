type CreateSliceParams<TState, TReducers> = {
    initialValue: TState;
    reducers: TReducers;
};

export type CreateSliceReturn<TState, TReducers> = {
    actions: Record<keyof TReducers, <T>(payload?: T) => TState>;
    reducer: (state: TState, action: TAction<any>) => TState;
    initialValue: TState;
};

type TFunctionReducer<TState> = (state: TState, payload: any) => TState;

export type TAction<TPayload> = {
    type: string;
    payload: TPayload;
};

export const createSlice = <
    TState,
    TReducers extends Record<string, TFunctionReducer<TState>>
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
    }, {});

    return {
        actions,
        reducer,
        initialValue,
    };
};
