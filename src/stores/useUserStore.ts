import {defineStore} from "pinia";
import {computed, reactive, UnwrapNestedRefs} from "vue";
import {HeaderUserInfo, StudentInfo, TeacherInfo, UserAvatar} from "../types";
import request from "../request";

export const useUserStore = defineStore('UserStore', () => {
    const userAvatar: UnwrapNestedRefs<UserAvatar> = reactive<UserAvatar>({
        savePath: "",
        uploadDate: new Date("0000-00-00"),
        userId: "",
        imgSrc: computed(() => {
            const baseURL = request.defaults.baseURL;
            if (baseURL && userAvatar.savePath)
                return `${baseURL}/${userAvatar.savePath}`
            else {
                return ""
            }
        }),
        reset: () => {
            userAvatar.savePath = "";
            userAvatar.uploadDate = new Date("0000-00-00");
            userAvatar.userId = "";
        }
    });

    const teacherInfo = reactive<TeacherInfo>({
        sex: false,
        tno: 0,
        name: "",
        phone: "",
        logged: false,
        reset: () => {
            teacherInfo.sex = false;
            teacherInfo.tno = 0;
            teacherInfo.name = "";
            teacherInfo.phone = "";
            teacherInfo.logged = false;
        }
    });

    const studentInfo = reactive<StudentInfo>({
        cid: 0,
        class_name: "",
        email: "",
        logged: false,
        major_name: "",
        mid: 0,
        name: "",
        sno: 0,
        reset: () => {
            studentInfo.cid = 0;
            studentInfo.class_name = "";
            studentInfo.email = "";
            studentInfo.logged = false;
            studentInfo.major_name = "";
            studentInfo.mid = 0;
            studentInfo.name = "";
            studentInfo.sno = 0;
        }
    });

    const headerUserInfo = reactive<HeaderUserInfo>({
        name: "",
        logged: false,
        reset: () => {
            headerUserInfo.name = "";
            headerUserInfo.logged = false;
        }
    });
    const resetStore = () => {
        userAvatar.reset();
        teacherInfo.reset();
        studentInfo.reset();
        headerUserInfo.reset();
    };

    return {userAvatar, studentInfo, teacherInfo, headerUserInfo, resetStore};
});
