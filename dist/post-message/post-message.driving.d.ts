import { PostMessageBase } from "../../../../../../../../src/post-message/post-message.base";
interface IPostMessageDriving {
    on<TMessage>(message: TMessage, fn: <T>(payload: T) => void): any;
    manual(fn: (event: MessageEvent) => void): any;
    listen<TFunction extends (event: MessageEvent) => void>(
        fn: TFunction
    ): () => void;
}
export declare class PostMessageDriving
    extends PostMessageBase
    implements IPostMessageDriving
{
    private static instance;
    on<TMessage>(message: TMessage, fn: <T>(payload: T) => void): () => void;
    manual(fn: (event: MessageEvent) => void): () => void;
    listen<TFunction extends (event: MessageEvent) => void>(
        fn: TFunction
    ): () => void;
    static get Instance(): PostMessageDriving;
}
export {};
