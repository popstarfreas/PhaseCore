import Utils from 'phasecore/utils';
import UserStatus from 'phasecore/userstatus';

class User {
    private _id: number;
    private _name: string;
    private _systemName: string;
    private _avatar: string;
    private _status: UserStatus;

    constructor(id: number, name: string, systemName: string, avatar: string, status: UserStatus) {
        this._id = id;
        this._name = name;
        this._systemName = systemName;
        this._avatar = typeof avatar !== "undefined"
            ? avatar[0] === "/"
                ? "https://t.dark-gaming.com:3001" + avatar
                : avatar
            : ""
            
        this._status = status;
    }

    public get id(): number {
        return this._id;
    }

    public get name() {
        return this._name;
    }

    public get systemName() {
        return this._systemName;
    }

    public get avatar() {
        return this._avatar;
    }

    public get status() {
        return this._status;
    }

    public set status(status: UserStatus) {
        this._status = status;
    }

    public set avatar(avatar: string) {
        this._avatar = avatar;
    }
}

export default User;
