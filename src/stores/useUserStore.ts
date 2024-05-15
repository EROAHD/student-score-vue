import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {HeaderUserInfo, StudentInfo, TeacherInfo, UserAvatar} from "../types";
import request from "../request";


export const useUserStore = defineStore('teacher', () => {
        const userAvatar = reactive<UserAvatar>({
            savePath: "",
            uploadDate: undefined,
            userId: "",
            imgSrc: computed(() => {
                let baseURL = request.defaults.baseURL;
                return `${baseURL}/${userAvatar.savePath}`
            })
        })
        const teacherInfo = reactive<TeacherInfo>({
            tno: 0,
            name: "",
            phone: "",
            logged: false
        })
        const studentInfo = reactive<StudentInfo>({
            cid: 0,
            class_name: "",
            email: "",
            logged: false,
            major_name: "",
            mid: 0,
            name: "",
            sno: 0
        })
        const headerUserInfo = reactive<HeaderUserInfo>({
            name: "",
            logged: false
        })
        return {userAvatar, studentInfo, teacherInfo, headerUserInfo}
    }
)