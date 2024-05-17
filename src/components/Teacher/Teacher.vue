<script lang="ts" setup>

import Navbar from "./Navbar.vue";
import TeacherContent from "./Content.vue";
import request from "../../request";
import {onMounted} from "vue";
import {useUserStore} from "../../stores/useUserStore.ts";
import {HeaderUserInfo, TeacherInfo, UserAvatar} from "../../types";

let userStore = useUserStore();
let userAvatar: UserAvatar = userStore.userAvatar;
let headerUserInfo: HeaderUserInfo = userStore.headerUserInfo;
let teacherInfo: TeacherInfo = userStore.teacherInfo;

console.log(teacherInfo)

async function getTeacherInfo() {
  let {data} = await request.get("/teacher/info")
  if (data.code == 200) {
    Object.assign(teacherInfo, data.data)
    headerUserInfo.name = teacherInfo.name
    teacherInfo.logged = true
    headerUserInfo.logged = true
  }
}

async function getAvatar() {
  let {data} = await request.get("/avatar");
  if (data.code == 200) {
    console.log(data.data)
    console.log(userAvatar)
    Object.assign(userAvatar, data.data)
    console.log(userAvatar)
  }
}

onMounted(() => {
  getTeacherInfo()
  getAvatar()
})


</script>
<template>
  <div class="teacherRoot">
    <el-row>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <navbar></navbar>
      </el-col>
      <el-col :xs="16" :sm="18" :md="20" :lg="21" :xl="9">
        <teacher-content></teacher-content>
      </el-col>
    </el-row>
  </div>
</template>


<style scoped>
.teacherRoot {
  width: 100%;
  height: calc(100vh - 40px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

</style>