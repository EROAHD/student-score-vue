import {StudentCourse, TeacherCourse} from "../types";
import {reactive, UnwrapNestedRefs} from "vue";

export default function useCourse() {
    let teacherCourse: UnwrapNestedRefs<TeacherCourse> = reactive<TeacherCourse>(
        {
            cid: 0,
            mid: "",
            name: "",
            tno: 0,
            typeId: 0,
        }
    )
    let studentCourse: UnwrapNestedRefs<StudentCourse> = reactive<StudentCourse>({
            courseId: 0,
            courseMajor: "",
            courseName: "",
            courseType: 0,
            score: 0,
            teacherName: ""
        }
    )

    return {teacherCourse, studentCourse};
}