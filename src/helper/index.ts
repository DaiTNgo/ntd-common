import { TTypeofValue, VoidFunction } from "src/types";
export const mergeClassName = (
    ...classNames: (string | boolean | null | undefined)[]
): string => {
    return classNames.filter(Boolean).join(" ");
};

export const handleExecuteEvent = <T>(
    isExecute: unknown,
    fn: T
): T | VoidFunction => {
    if (isExecute) {
        return fn;
    }

    return () => {};
};

export const toPascalCase = (str: string): string =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join("");


export const typeofValue = (value: any) => {
    return Object.prototype.toString.call(value).slice(8, -1) as TTypeofValue;
};

export const IIFE = (cb: Function) => {
    if(typeofValue(cb) !== 'Function') {
        throw new Error("[IIFE] --- [cb] is not a function");
    }
    return cb();
};

export function compose<T>(...fns: ((pra:T)=>any)[]) {
    return (x: T) => fns.reduceRight((v, f) => f(v), x);
}

export function queryString(key: string) {
    const search = new URLSearchParams(location.search);
    return search.get(key);
}
