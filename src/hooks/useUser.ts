import {computed, reactive} from "vue";
import {Password} from "../types";

export default function useUser() {
    let loginUser: { username: string, password: string } = reactive({
        username: "",
        password: "",
    })

    let passwordObj: Password = reactive({
        oldPassword: "",
        newPassword: "",
        reNewPassword: "",
        passwordMatch: computed(() => {
            return passwordObj.newPassword === passwordObj.reNewPassword
        }),
        passwordValid: computed(() => {
            const passwordPattern = /^(?!\s)(?!.*\s).{8,20}$/
            return passwordPattern.test(passwordObj.newPassword)
        })
    })
    return {loginUser, passwordObj};
}