import User from 'phasecore/user';
import { UserHash, MessageHash, BooleanHash } from 'phasecore/hash';
import Message from 'phasecore/message';

class Discussion {
    private _id: number;
    private _name: string;
    private _creator: number;
    private _members: Array<User>;
    private _moderators: BooleanHash;
    protected _messages: Array<Message>;
    private _liveTypingMessages: MessageHash;

    constructor(id: number, name: string, creator: number, members: Array<User>) {
        this._id = id;
        this._name = name;
        this._creator = creator;
        this._members = members;
        this._moderators = {};
        this._messages = [];
        this._liveTypingMessages = {};
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get creator(): number {
        return this._creator;
    }

    public get members(): Array<User> {
        return this._members;
    }

    public get moderators(): BooleanHash {
        return this._moderators;
    }

    public get messages(): Array<Message> {
        return this._messages;
    }

    public get liveTypingMessages(): MessageHash {
        return this._liveTypingMessages;
    }

    public getLiveTypingMessage(userId: number): Message {
        return this.liveTypingMessages[userId.toString()];
    }

    public set name(name: string) {
        this._name = name;
    }

    public set members(members: Array<User>) {
        this._members = members;
    }

    public set moderators(moderators: BooleanHash) {
        this._moderators = moderators;
    }

    public set messages(messages: Array<Message>) {
        this._messages = messages;
    }

    public prependMessage(message: Message): void {
        this.messages.unshift(message);
    }

    public appendMessage(message: Message): void {
        this.messages.push(message);
    }

    public setLiveTypingMessages(userId: number, message: Message): void {
        this.liveTypingMessages[userId.toString()] = message;
    }

    public updateLiveTypingMessageContent(userId: number, content: string): void {
        this.liveTypingMessages[userId.toString()].updateContent(content);
    }

    public removeLiveTypingMessage(userId: number): void {
        delete this.liveTypingMessages[userId.toString()];
    }
}

export default Discussion;