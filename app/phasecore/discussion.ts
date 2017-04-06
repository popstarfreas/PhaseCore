import User from 'phasecore/user';
import { UserHash, MessageHash, BooleanHash } from 'phasecore/hash';
import Message from 'phasecore/message';

class Discussion {
    private id: number;
    private name: string;
    private creator: number;
    private members: Array<User>;
    private moderators: BooleanHash;
    private messages: Array<Message>;
    private liveTypingMessages: MessageHash;

    constructor(id: number, name: string, creator: number, members: Array<User>) {
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.members = members;
        this.moderators = {};
        this.messages = [];
        this.liveTypingMessages = {};
    }

    public getId(): number {
        return this.id;
    }

    public getName(): string {
        return this.name;
    }

    public getCreator(): number {
        return this.creator;
    }

    public getMembers(): Array<User> {
        return this.members;
    }

    public getModerators(): BooleanHash {
        return this.moderators;
    }

    public getMessages(): Array<Message> {
        return this.messages;
    }

    public getLiveTypingMessages(): MessageHash {
        return this.liveTypingMessages;
    }

    public getLiveTypingMessage(userId: number): Message {
        return this.getLiveTypingMessages()[userId.toString()];
    }

    public setMembers(members: Array<User>): void {
        this.members = members;
    }

    public setModerators(moderators: BooleanHash): void {
        this.moderators = moderators;
    }

    public setMessages(messages: Array<Message>): void {
        this.messages = messages;
    }

    public prependMessage(message: Message): void {
        this.messages.unshift(message);
    }

    public appendMessage(message: Message): void {
        this.messages.push(message);
    }

    public setLiveTypingMessages(userId: number, message: Message): void {
        this.getLiveTypingMessages()[userId.toString()] = message;
    }

    public updateLiveTypingMessageContent(userId: number, content: string): void {
        this.getLiveTypingMessages()[userId.toString()].setContent(content);
    }
    
    public removeLiveTypingMessage(userId: number): void {
        delete this.getLiveTypingMessages()[userId.toString()];
    }
}

export default Discussion;