import {reactive} from "vue";
import router from "../router";

export default function useUser() {
    let loginUser: { username: string, password: string } = reactive({
        username: "",
        password: "",
    })
    return {loginUser};
}