import React from "react";
type NameFactoryType = string;
type ContextFactoryReturn<T> = {
    useHook: () => T;
    context: React.Context<T>;
};
export declare const createContextFactory: <ContextType>(
    name: NameFactoryType
) => ContextFactoryReturn<ContextType>;
export {};
