import { ForwardRefExoticComponent, PropsWithChildren, PropsWithoutRef, RefAttributes } from "react";
export type FunctionHasChildrenType = ({ children, }: PropsWithChildren) => JSX.Element;
type FunctionInjectType = FunctionHasChildrenType;
type AppType = (<Props>(props?: Props) => JSX.Element) | ForwardRefExoticComponent<PropsWithoutRef<any> & RefAttributes<any>>;
export type ComponentInjectPropsType = {
    providers?: Array<FunctionInjectType>;
    /** containers: logic + ui + store */
    containers?: Array<FunctionHasChildrenType>;
    template?: Array<FunctionHasChildrenType>;
    services?: Array<FunctionHasChildrenType>;
    app: AppType;
};
export {};
