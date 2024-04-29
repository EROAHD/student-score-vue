<script setup lang="ts">
import request from "../request";
import PageBox from "./utils/PageBox.vue";

import {useStudentStore} from "../stores/useStudentStore.ts";

let studentStore = useStudentStore();
let page = studentStore.page
let fieldName = ["课程号", "课程名", "成绩", "老师", "是否挂科"]


async function getScores(pageSize: number, pageNum: number) {
  let {data} = await request.get(`/score/${pageSize}/${pageNum}`);
  if (data.code === 200) {
    Object.assign(page, data.data)
    console.log(page)
  }
}
</script>

<template>
  <page-box :callback="getScores" :page="page" :field-names="fieldName" style="width: 500px"></page-box>
</template>

<style scoped>

</style>