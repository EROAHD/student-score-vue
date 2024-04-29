<script lang="ts" setup>

import Navbar from "./StudentNavbar.vue";
import StudentContent from "./StudentContent.vue";
import {Info, useStudentStore} from "../stores/useStudentStore.ts";
import request from "../request";
import {onMounted} from "vue";

let studentInfo: Info = useStudentStore().studentInfo;

async function getStudentInfo() {
  let {data} = await request.get("/student/info")
  if (data.code == 200) {
    Object.assign(studentInfo, data.data)
    studentInfo.logged = true
  }
}

onMounted(() => {
  getStudentInfo()
  console.log(studentInfo)
})


</script>
<template>
  <div class="studentRoot">
    <navbar></navbar>
    <student-content></student-content>
  </div>
</template>


<style scoped>
.studentRoot {
  width: 100%;
  height: calc(100vh - 40px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

.navContent {
  display: inline-block;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10px;
}
</style>