import ChatMessage from "phasecore/messagetypes/chatmessage";

interface DeepHistoryOlder {
    discID: number;
    messages: ChatMessage[];
    oldestID: number;
}

export default DeepHistoryOlder;
