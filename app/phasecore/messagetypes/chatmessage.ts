interface ChatMessage {
    discID: number;
    userID: number;
    username: string;
    timestamp: number;
    msg: string;
    tag: string | null;
    tagcolour: string | null;
    guest: boolean;
    systemName: string;
    avatar: string;
    IP: string | null;
}

export default ChatMessage;