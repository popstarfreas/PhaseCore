export interface Discussion {
    ID: number;
    Name: string;
    Creator: number;
    Message: string;
    Username: string | null;
    GuestName: string;
    timestamp: number;
}

export type Discussions = Array<Discussion>;

export default Discussions;