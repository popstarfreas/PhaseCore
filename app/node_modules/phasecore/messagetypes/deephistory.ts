import ChatMessage from "phasecore/messagetypes/chatmessage";

interface DeepHistory {
    discID: number;
    messages: ChatMessage[];
    oldestID: number;
    newestID: number;
    stemMessageID: number;
}

export default DeepHistory;
