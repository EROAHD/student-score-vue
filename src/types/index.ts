// 表示学生信息
export interface StudentInfo {
    sno: number,
    name: string,
    email: string,
    mid: number,
    major_name: string,
    cid: number,
    class_name: string,
    logged: boolean
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
