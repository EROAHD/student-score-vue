import {reactive} from "vue";

export default function useUser() {
    let loginUser: { username: string, password: string } = reactive({username: "", password: ""})


    return {loginUser};
}