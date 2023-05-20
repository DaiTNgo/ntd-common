import {
    PostMessage,
} from "src/PostMessage";
import {TAction} from "src/PostMessage/type";

interface IPostMessageDriven {
    emit<T,P>(
        action: TAction<T,P>,
        fn?: <TPayloadFn>(payload: TPayloadFn) => void
    ): void;

    on<T>(
        message: Pick<TAction<T>, "type">,
        fn: <T>(payload: T) => void
    ): void;

    readonly url: string;
};
export class PostMessageDriven extends PostMessage implements IPostMessageDriven {
    private readonly url: string;
    private static instance: PostMessageDriven;

    emit<T,P>(
        action: TAction<T,P>,
        fn?: <TPayloadFn>(payload: TPayloadFn) => void
    ) {
        window.parent.postMessage(action, this.url);

        if (fn) {
            this.on(action.type, fn);
        }
    }

    on<T>(
        message: Pick<TAction<T>, "type">,
        fn: <TPayloadFn>(payload: TPayloadFn) => void
    ) {
        const handleMessage = (event: MessageEvent<TAction>) => {
            if (this.isDevMsgOrNotData(event)) return;

            const messageData = event.data;
            const { payload, type } = messageData;

            if (type === message) {
                fn(payload);

                window.removeEventListener("message", handleMessage);
            }
        };

        window.addEventListener("message", handleMessage);
    }

    static get Instance() {
        return this.instance || (this.instance = new this());
    }
}
