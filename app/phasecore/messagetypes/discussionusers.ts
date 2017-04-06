interface DiscussionUser {
    userID: number;
    name: string;
    systemName: string;
    avatar: string;
    mod: boolean;
}

interface Users {
    0: string;
    1: Array<DiscussionUser>
}

interface DiscussionUsers {
    discID: number;
    users: Users;
}

export default DiscussionUsers;