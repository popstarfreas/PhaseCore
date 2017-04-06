interface TerrariaUser {
    name: string;
    ip?: string;
}

type TerrariaUsersOnline = Array<TerrariaUser>;

export default TerrariaUsersOnline;