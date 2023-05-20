export type VoidFunction = () => void;
export type TTypeofValue = "String" | "Number" | "Boolean" | "Object" | "Array" | "Function" | "Undefined" | "Null" | "Symbol" | "BigInt";
export type TObjectNested<T> = T extends Record<string, Record<string, any>> ? TObjectNested<T[keyof T]> : keyof T;
