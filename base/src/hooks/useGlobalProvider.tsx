import { useState } from "react";
import { Teacher, TeacherState, SetTeacherState } from "../@types/Teacher";

const initialTeacher: Teacher = {
    id: 0,
    name: "",
    avatar: "",
    bio: "",
    stack: ""
};

function useGlobalProvider() {
    const [teacherSelect, setTeacherSelect]: [TeacherState, SetTeacherState] = useState(initialTeacher);

    return {
        teacherSelect,
        setTeacherSelect
    }
}
export default useGlobalProvider;