// {\"messageID\":14113590,\"userID\":-2,\"username\":\"System\",\"timestamp\":1511890570,\"content\":\"[u]mr zomb slayer[/u] has left.\",\"tag\":\"Rift\",\"tagcolour\":\"#00BA92\",\"guest\":false,\"systemName\":\"Dark Gaming\",\"avatar\":\"http://t.dark-gaming.com:3000/img/system.png\",\"IP\":\"66.8.216.245\"}
interface HistoryMessage {
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
    IP: string;
}

export default HistoryMessage;
