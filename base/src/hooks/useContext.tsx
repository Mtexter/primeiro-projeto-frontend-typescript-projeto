import { useContext } from "react";
import { GlobalContext } from "../context";
import { TeacherState, SetTeacherState } from "../@types/Teacher";

function useGlobal() {
    return useContext(GlobalContext);
}

export default useGlobal as () => {
    teacherSelect: TeacherState;
    setTeacherSelect: SetTeacherState;
};