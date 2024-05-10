import {defineStore} from "pinia";
import {reactive} from "vue";
import {StudentInfo} from "../types";


export const useStudentStore = defineStore('student', () => {
        const studentInfo = reactive<StudentInfo>({
            sno: 0,
            name: "",
            email: "",
            mid: 0,
            major_name: "",
            cid: 0,
            class_name: "",
            logged: false
        })
        return {studentInfo}
    }
)