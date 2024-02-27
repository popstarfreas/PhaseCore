import ChatMessage from "phasecore/messagetypes/chatmessage";

interface DeepHistoryNewer {
    discID: number;
    messages: ChatMessage[];
    newestID: number;
}

export default DeepHistoryNewer;
