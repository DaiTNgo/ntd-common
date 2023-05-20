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
export declare const createSlice: <
    TState,
    TReducers extends Record<string, TFunctionReducer<TState>>
>({
    initialValue,
    reducers,
}: CreateSliceParams<TState, TReducers>) => {
    actions: {};
    reducer: <TPayload>(
        state: TState | undefined,
        action: TAction<TPayload>
    ) => TState;
    initialValue: TState;
};
export {};
