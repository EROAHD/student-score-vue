import {reactive} from "vue";

export default function useInfoBox() {
    let infoBoxObj = reactive({show: false, msg: "", time: 1000})

    function showInfoBox(infoBoxObj: { show: boolean, msg: string, time: number }, msg: string, time?: number) {
        infoBoxObj.show = true
        infoBoxObj.msg = msg
        typeof time === "number" ? infoBoxObj.time = time : infoBoxObj.time = 3000
    }

    return {infoBoxObj, showInfoBox}
}
