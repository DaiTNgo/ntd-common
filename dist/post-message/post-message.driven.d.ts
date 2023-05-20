import { TAction } from '../../../../../../../../src/post-message/type';
import { PostMessageBase } from '../../../../../../../../src/post-message/post-message.base';
interface IPostMessageDriven {
    emit<T, P>(action: TAction<T, P>, fn?: <TPayloadFn>(payload: TPayloadFn) => void): void;
    on<T>(message: T, fn: <T>(payload: T) => void): void;
}
export declare class PostMessageDriven extends PostMessageBase implements IPostMessageDriven {
    private url;
    private static instance;
    private constructor();
    set setUrl(url: string);
    emit<T, P>(action: TAction<T, P>, fn?: <TPayloadFn>(payload: TPayloadFn) => void): void;
    on<T>(message: T, fn: <TPayloadFn>(payload: TPayloadFn) => void): void;
    static get Instance(): PostMessageDriven;
}
export {};
