import { Dispatch, SetStateAction } from "react";

export type Teacher = {
    id: number,
    name: string,
    avatar: string,
    bio: string,
    stack: string
}

export type TeacherState = Teacher;
export type SetTeacherState = Dispatch<SetStateAction<TeacherState>>;

