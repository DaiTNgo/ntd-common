import { TTypeofValue, VoidFunction } from '../../../../../../../../src/types';
export declare const mergeClassName: (...classNames: (string | boolean | null | undefined)[]) => string;
export declare const handleExecuteEvent: <T>(isExecute: unknown, fn: T) => T | VoidFunction;
export declare const toPascalCase: (str: string) => string;
export declare const typeofValue: (value: any) => TTypeofValue;
export declare const IIFE: (cb: Function) => any;
export declare function compose<T>(...fns: ((pra: T) => any)[]): (x: T) => T;
export declare function queryString(key: string): string | null;
