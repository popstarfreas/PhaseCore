import Discussion from 'phasecore/discussion';
import User from 'phasecore/user';
import Message from 'phasecore/message';

export type UserHash = { [userId: string] : User };
export type DiscussionHash = { [discussionID: string] : Discussion };
export type BooleanHash = { [id: string] : boolean };
export type MessageHash = { [userId: string] : Message };