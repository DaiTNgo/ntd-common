import React, {
    PropsWithChildren,
    useCallback,
    useMemo,
    useReducer,
} from "react";
import { createContextFactory } from "src/factory/context.factory";
import { CreateSliceReturn, TAction } from "src/factory/slice.factory";

type CreateProviderFactoryParams<TState, TReducer> = {
    name: string;
    slice: CreateSliceReturn<TState, TReducer>;
    middleware?: any;
};

type CombineContextType<TState, TReducer> = {
    children: React.ReactNode;
    slice: CreateSliceReturn<TState, TReducer>;
    middleware: (dispatch: any) => (payload: any) => void;
};

type TDispatch = <TPayload>(action: TAction<TPayload>) => void;

export const createProviderFactory = <TState, TReducer>({
    name,
    slice,
    middleware,
}: CreateProviderFactoryParams<TState, TReducer>) => {
    const { useHook: useContextState, context: ContextState } =
        createContextFactory<typeof slice.initialValue>(name);

    const { useHook: useContextDispatch, context: ContextDispatch } =
        createContextFactory<TDispatch>(name + "Dispatch");

    const CombineContext = ({
        children,
        slice,
        middleware,
    }: CombineContextType<TState, TReducer>) => {
        const { reducer, initialValue } = slice;
        const [rootState, dispatch] = useReducer(reducer, initialValue);

        const mapper = useMemo(() => {
            if (middleware) {
                return new Map(Object.entries(middleware(dispatch)));
            }
        }, [middleware]);

        const myDispatch = useCallback(
            (action: TAction<any>) => {
                const { type, payload } = action;

                if (mapper) {
                    const fn = mapper.get(type);
                    if (fn) {
                        fn(payload);
                    } else {
                        dispatch(action);
                    }
                } else {
                    dispatch(action);
                }
            },
            [mapper]
        );

        return (
            <ContextState.Provider value={rootState}>
                <ContextDispatch.Provider value={myDispatch}>
                    {children}
                </ContextDispatch.Provider>
            </ContextState.Provider>
        );
    };

    const Provider = ({ children }: PropsWithChildren) => {
        return (
            <CombineContext slice={slice} middleware={middleware}>
                {children}
            </CombineContext>
        );
    };

    return { useContextState, useContextDispatch, Provider };
};
