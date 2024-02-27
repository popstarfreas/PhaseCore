import SafeString from 'phasecore/safestring';
import System from 'phasecore/system';
import Utils from 'phasecore/utils';

class Message {
    private _userId: number;
    private _avatar: string;
    protected _username: SafeString;
    protected _guestname: SafeString;
    protected _content: SafeString;
    private _timestamp: number;
    private _systemName: string;
    private _tag: string;
    private _tagColour: string;
    public ip: string = "";

    constructor(userId: number, avatar: string, username: string, guestname: string, content: string, timestamp: number, systemName: string, tag: string, tagColour: string) {
        this._userId = userId;
        this._avatar = avatar;
        this._username = new SafeString(username);
        this._guestname = new SafeString(guestname);
        this._content = new SafeString(content);
        this._timestamp = timestamp;
        this._systemName = systemName;
        this._tag = tag;
        this._tagColour = tagColour;
    }

    public get userId(): number {
        return this._userId;
    }

    public get avatar(): string {
        let avatar = this._avatar;
        if (avatar.indexOf("http") === -1) {
            avatar = `https://t.dark-gaming.com:3001${this._avatar}`;
        } else if (avatar === "http://t.dark-gaming.com:3000/img/system.png") {
            avatar = System.avatar;
        }
        return avatar;
    }

    public get username(): SafeString {
        return this._username;
    }

    public get guestName(): SafeString {
        return this._guestname;
    }

    public get content(): SafeString {
        return this._content;
    }

    public get timestamp(): number {
        return this._timestamp;
    }

    public get systemName(): string {
        return this._systemName;
    }

    public get tag(): string {
        return this._tag;
    }

    public get tagColour(): string {
        return this._tagColour;
    }

    public setContent(content: string) {
        this._content.setContent(content);
    }

    public updateContent(content: string) {
        this._content.setContent(content);
    }

    /* Gets the name for display */
    public getDisplayName(): SafeString {
        let displayName: SafeString = this.username;

        if (displayName.asIs().length === 0) {
            displayName = this.guestName;
        }

        return displayName;
    }
}

export default Message;