import Utils from 'phasecore/utils';
import UserStatus from 'phasecore/userstatus';

class User {
    private id: number;
    private name: string;
    private systemName: string;
    private avatar: string;
    private status: UserStatus;

    constructor(id: number, name: string, systemName: string, avatar: string, status: UserStatus) {
        this.id = id;
        this.name = name;
        this.systemName = systemName;
        this.avatar = avatar[0] === "/" ? "https://t.dark-gaming.com:3001"+avatar : avatar;
        this.status = status;
    }

    /**
     * Gets this users Id
     */
    public getId(): number {
        return this.id;
    }

    /**
     * Gets the username for this user
     */
    public getName(): string {
        return this.name;
    }

    /**
     * Gets this users avatar URL
     */
    public getAvatar(): string {
        return this.avatar;
    }

    /**
     * Gets the activity status of this user
     */
    public getStatus(): UserStatus {
        return this.status;
    }

    public setStatus(status: UserStatus): void {
        this.status = status;
    }

    public setAvatar(avatar: string): void {
        this.avatar = avatar;
    }
}

export default User;