<script lang="ts" setup>

import Navbar from "./StudentNavbar.vue";
import StudentContent from "./StudentContent.vue";
import request from "../../request";
import {onMounted} from "vue";
import {StudentInfo} from "../../types";
import {useUserStore} from "../../stores/useUserStore.ts";

let studentInfo: StudentInfo = useUserStore().studentInfo;

async function getStudentInfo() {
  let {data} = await request.get("/student/info")
  if (data.code == 200) {
    Object.assign(studentInfo, data.data)
    studentInfo.logged = true
  }
}

onMounted(() => {
  getStudentInfo()
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

</style>