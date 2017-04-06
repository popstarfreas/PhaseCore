import SafeString from 'phasecore/safestring';
import System from 'phasecore/system';
import Utils from 'phasecore/utils';

class Message {
    private userId: number;
    private avatar: string;
    private username: SafeString;
    private guestname: SafeString;
    private content: SafeString;
    private timestamp: number;
    private systemName: string;
    private tag: string;
    private tagColour: string;

    constructor(userId: number, avatar: string, username: string, guestname: string, content: string, timestamp: number, systemName: string, tag: string, tagColour: string) {
        this.userId = userId;
        this.avatar = avatar;
        this.username = new SafeString(username);
        this.guestname = new SafeString(guestname);
        this.content = new SafeString(content);
        this.timestamp = timestamp;
        this.systemName = systemName;
        this.tag = tag;
        this.tagColour = tagColour;
    }

    public getUserId(): number {
        return this.userId;
    }

    public getAvatar(): string {
        let avatar = this.avatar;
        if (avatar.indexOf("http") === -1) {
            avatar = `https://t.dark-gaming.com:3001${this.avatar}`;
        } else if (avatar == "http://t.dark-gaming.com:3000/img/system.png") {
            avatar = System.avatar;
        }
        return avatar;
    }

    public getUsername(): SafeString {
        return this.username;
    }

    public getGuestname(): SafeString {
        return this.guestname;
    }

    public getContent(): SafeString {
        return this.content;
    }

    public getTimestamp(): number {
        return this.timestamp;
    }

    public getSystemName(): string {
        return this.systemName;
    }
    
    public getTag(): string {
        return this.tag;
    }

    public getTagColour(): string {
        return this.tagColour;
    }

    public setContent(content: string): void {
        this.content.setContent(content);
    }

    /* Gets the name for display */
    public getDisplayName(): SafeString {
        let displayName: SafeString = this.getUsername();

        if (displayName.asIs().length === 0) {
            displayName = this.getGuestname();
        }

        return displayName;
    }
}

export default Message;