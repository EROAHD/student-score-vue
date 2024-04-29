<script setup lang="ts">
import request from "../request";
import {useStudentStore} from "../stores/useStudentStore.ts";
import PageBox from "./utils/PageBox.vue";

let studentStore = useStudentStore();
//
let page = studentStore.page
let fieldName = ["课程号", "课程名", "老师"]

async function getCourses(pageSize: number, pageNum: number) {
  let {data} = await request.get(`/course/${pageSize}/${pageNum}`);
  if (data.code === 200) {
    Object.assign(page, data.data)
    console.log(page)
  }
}
</script>

<template>
  <page-box :callback="getCourses" :page="page" :field-names="fieldName"></page-box>
</template>

<style scoped>

</style>