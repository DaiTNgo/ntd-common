import { PropsWithChildren } from "react";
type FunctionHasChildrenType = ({ children }: PropsWithChildren) => JSX.Element;
type FunctionInjectType = FunctionHasChildrenType;
type AppType = (props?: any, ref?: any) => JSX.Element;
export type ComponentInjectPropsType = {
    providers?: Array<FunctionInjectType>;
    /** containers: logic + ui + store */
    containers?: Array<FunctionHasChildrenType>;
    template?: Array<FunctionHasChildrenType>;
    services?: Array<FunctionHasChildrenType>;
    app: AppType;
};
export {};
