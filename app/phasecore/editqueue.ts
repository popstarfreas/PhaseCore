export interface EditQueueEntry {
    text?: string;
    pos: number;
    len: number;
    t: number;
}

type EditQueue = Array<EditQueueEntry>;

export default EditQueue;