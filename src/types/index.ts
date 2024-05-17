// 表示修改密码时的密码对象
import {ComputedRef} from "vue";

export interface Password {
    oldPassword: string,
    newPassword: string,
    reNewPassword: string,
    passwordMatch: boolean,
    passwordValid: boolean
}

// 表示分页的对象
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

export interface TeacherCourse {
    cid: number,
    name: string,
    mid: string,
    tno: number,
    typeId: number,
}

/** -------------------------------------------------------------------------------------------------------------------
 *  store 中使用的类型
 */
// 表示学生信息
export interface StudentInfo {
    sno: number,
    name: string,
    email: string,
    mid: number,
    major_name: string,
    cid: number,
    class_name: string,
    logged: boolean,
    reset: any
}

export interface TeacherInfo {
    tno: number,
    name: string,
    sex: boolean,
    phone: string,
    logged: boolean,
    reset: any

}

// 表示页面标题栏显示的信息
export interface HeaderUserInfo {
    name: string,
    logged: boolean,
    reset: any
}

export interface UserAvatar {
    savePath: string,
    uploadDate: Date,
    userId: string,
    imgSrc: ComputedRef<string>,
    reset: any
}

// ---------------------------------------------------------------------------------------------------------------------

