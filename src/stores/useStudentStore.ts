import {defineStore} from "pinia";
import {reactive} from "vue";

export interface Info {
    sno: number,
    name: string,
    email: string,
    mid: number,
    major_name: string,
    cid: number,
    class_name: string,
    logged: boolean
}

export interface Course {
    cid: number,
    name: string,
    teacher_name: string
}

export interface Page {
    "total": number,
    "list": [],
    "pageNum": number,
    "pageSize": number,
    "size": number,
    "startRow": number,
    "endRow": number,
    "pages": number,
    "prePage": number,
    "nextPage": number,
    "isFirstPage": boolean,
    "isLastPage": boolean,
    "hasPreviousPage": boolean,
    "hasNextPage": boolean,
    "navigatePages": number,
    "navigatepageNums": [],
    "navigateFirstPage": number,
    "navigateLastPage": number
}

export const useStudentStore = defineStore('sysUser', () => {
        const studentInfo = reactive<Info>({
            cid: 0,
            class_name: "",
            email: "",
            logged: false,
            major_name: "",
            mid: 0,
            name: "",
            sno: 0
        })
        const page = reactive<Page>({
            endRow: 0,
            hasNextPage: false,
            hasPreviousPage: false,
            isFirstPage: false,
            isLastPage: false,
            list: [],
            navigateFirstPage: 0,
            navigateLastPage: 0,
            navigatePages: 0,
            navigatepageNums: [],
            nextPage: 0,
            pageNum: 0,
            pageSize: 0,
            pages: 0,
            prePage: 0,
            size: 0,
            startRow: 0,
            total: 0
        })
        return {studentInfo, page}
    }
)