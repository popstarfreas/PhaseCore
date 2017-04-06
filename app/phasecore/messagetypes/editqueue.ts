interface Edit {
    text: string;
    pos: number;
    len: number;
    t: number;
}

interface EditQueue {
    discID: number;
    queue: Array<Edit>;
    systemName: string;
    timestamp: number;
    userID: number;
    username: string;
}

export default EditQueue;