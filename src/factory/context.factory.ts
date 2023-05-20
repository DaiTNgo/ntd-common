import React, { createContext } from "react";

type NameFactoryType = string;

type ContextFactoryReturn<T> = {
    useHook: () => T;
    context: React.Context<T>;
};
export const createContextFactory = <ContextType>(
    name: NameFactoryType
): ContextFactoryReturn<ContextType> => {
    const Context = createContext<ContextType>(null as ContextType);
    Context.displayName = name;
    return {
        useHook: () => {
            const value = React.useContext(Context);
            if (!value) {
                throw new Error(
                    `use${name} must be used within a ${name}Provider`
                );
            }
            return value as NonNullable<ContextType>;
        },
        context: Context,
    };
};
