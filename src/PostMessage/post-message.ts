export class PostMessage {
    isDevMsgOrNotData(event: MessageEvent) {
        const messageData = event.data;
        const isDevMsg =
            // @ts-ignore
            messageData.source &&
            // @ts-ignore
            messageData?.source.includes("react-devtools");

        return !event.data || isDevMsg;
    }
}
