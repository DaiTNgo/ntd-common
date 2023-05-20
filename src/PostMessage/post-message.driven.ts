import {TAction} from "src/PostMessage/type";
import {PostMessage} from "src/PostMessage/post-message";

interface IPostMessageDriven {
    emit<T,P>(
        action: TAction<T,P>,
        fn?: <TPayloadFn>(payload: TPayloadFn) => void
    ): void;

    on<T>(
        message: T,
        fn: <T>(payload: T) => void
    ): void;
};
export class PostMessageDriven extends PostMessage implements IPostMessageDriven {
    private url: string;
    private static instance: PostMessageDriven;

    private constructor() {
        super();
        this.url= '*'
    };

    set setUrl(url: string) {
        this.url = url;
    };

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
        message: T,
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
