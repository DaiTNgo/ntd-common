import {TAction} from "src/PostMessage/type";
import {PostMessage} from "src/PostMessage/post-message";

interface IPostMessageDriving {
    on<TMessage>(
        message: TMessage,
        fn: <T>(payload: T) => void
    ): any;

    manual(fn: (event: MessageEvent) => void): any;

    listen<TFunction extends (event: MessageEvent) => void>(fn: TFunction): () => void;
}

export class PostMessageDriving extends PostMessage implements IPostMessageDriving {
    private static instance: PostMessageDriving;

    on<TMessage>(
        message: TMessage,
        fn: <T>(payload: T) => void
    ) {
        const handleMessage = (event: MessageEvent<TAction>) => {
            if (this.isDevMsgOrNotData(event)) return;

            const messageData = event.data;
            const {payload, type} = messageData;

            if (type === message) {
                fn(payload);
            }
        };

        return this.listen(handleMessage);
    }

    manual(fn: (event: MessageEvent) => void) {
        const handleMessage = (event: MessageEvent) => {
            if (this.isDevMsgOrNotData(event)) return;

            fn(event);
        };

        return this.listen(handleMessage);
    }

    listen<TFunction extends (event: MessageEvent) => void>(fn: TFunction) {
        window.addEventListener("message", fn);
        return () => {
            window.removeEventListener("message", fn);
        };
    }

    static get Instance() {
        return this.instance || (this.instance = new this());
    }
}
