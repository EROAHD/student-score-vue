import {defineStore} from "pinia";
import {reactive} from "vue";
import {Page} from "../types";


export const usePageStore = defineStore("page", () => {
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
    return {page}
})