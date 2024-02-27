interface SearchMessage {
    messageID: number;
    userID: number;
    username: string;
    timestamp: number;
    content: string;
    tag: string | null;
    tagcolour: string | null;
    guest: boolean;
    systemName: string;
    avatar: string;
    IP: number;
}

export default SearchMessage;
