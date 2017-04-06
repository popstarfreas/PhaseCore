interface UserOnline {
    UserID: number;
    Avatar: string;
    name: string;
    systemName: string;
}

type UsersOnline = Array<UserOnline>;

export default UsersOnline;