import {defineStore} from "pinia";
import {reactive} from "vue";

export const useStudentStore = defineStore('sysUser', () => {
        const student = reactive({
            sno: 0,
            name: "",
            email: "",
            mid: 0,
            major_name: "",
            cid: 0,
            class_name: "",
            logged: false
        })
        return {student}
    }
)