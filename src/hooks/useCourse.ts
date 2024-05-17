import {TeacherCourse} from "../types";
import {reactive, UnwrapNestedRefs} from "vue";

export default function useCourse() {
    let teacherCourse: UnwrapNestedRefs<TeacherCourse> = reactive<TeacherCourse>(
        {
            cid: 0,
            mid: "",
            name: "",
            tno: 0,
            typeId: 0,
        },
    );

    return {teacherCourse};
}