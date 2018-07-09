export interface DiscussionMessage {
    ID: number;
    userID: number;
    username: string;
    timestamp: number;
    content: string;
    tag: string | null;
    tagcolour: string | null;
    guest: boolean;
    systemName: string;
    avatar: string;
    IP: string | null;
}

export interface DiscussionMessages {
    discID: number;
    messages: string;
    oldestID: number;
}
