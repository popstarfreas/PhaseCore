export interface TerrariaUser {
    name: string;
    tagColour: string;
    tagName: string;
    ip?: string;
}

type TerrariaUsersOnline = Array<TerrariaUser>;

export default TerrariaUsersOnline;