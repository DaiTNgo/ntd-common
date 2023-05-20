import React from "react";
import { CreateSliceReturn, TAction } from "./slice.factory";
type TProviderFactoryParams<TState, TReducer> = {
    name: string;
    slice: CreateSliceReturn<TState, TReducer>;
    middleware?: any;
};
interface TProviderFactoryReturn<TState> {
    useContextState: () => TState;
    useContextDispatch: () => <TPayload>(action: TAction<TPayload>) => void;
    Provider: ({ children }: React.PropsWithChildren) => JSX.Element;
}
export declare const createProviderFactory: <TState, TReducer>({ name, slice, middleware, }: TProviderFactoryParams<TState, TReducer>) => TProviderFactoryReturn<TState>;
export {};
