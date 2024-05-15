import {Page} from "../types";
import {reactive} from "vue";

export default function usePage() {
    let page: Page = reactive<Page>({
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
        pageSize: 10,
        pages: 0,
        prePage: 0,
        size: 0,
        startRow: 0,
        total: 0
    })

    return {page}
}
