<script lang="ts" setup>

import Navbar from "./Navbar.vue";
import Content from "./Content.vue";
import request from "../../request";
import {onMounted} from "vue";
import {useUserStore} from "../../stores/useUserStore.ts";
import {AdminInfo, HeaderUserInfo, UserAvatar} from "../../types";

let userStore = useUserStore();
let userAvatar: UserAvatar = userStore.userAvatar;
let headerUserInfo: HeaderUserInfo = userStore.headerUserInfo;
let adminInfo: AdminInfo = userStore.adminInfo;

console.log(adminInfo)

async function getAdminInfo() {
  let {data} = await request.get("/admin/info")
  if (data.code == 200) {
    Object.assign(adminInfo, data.data)
    headerUserInfo.name = adminInfo.name
    adminInfo.logged = true
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
  getAdminInfo()
  getAvatar()
})


</script>
<template>
  <div class="studentRoot">
    <el-row>
      <el-col :sm="6" :md="4" :lg="3" :xl="1">
        <navbar></navbar>
      </el-col>
      <el-col :sm="18" :md="20" :lg="21" :xl="9">
        <content></content>
      </el-col>
    </el-row>
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