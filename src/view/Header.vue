<template>
  <div class="headerRoot">
    <div class="headerTitle">
      <img src="../assets/icon/headerTitle.png" alt="学生成绩查询系统">
      学生成绩查询系统
    </div>
    <header-user v-if="headerUserInfo.logged"></header-user>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "../stores/useUserStore.ts";
import {HeaderUserInfo, UserAvatar} from "../types";
import request from "../request";
import HeaderUser from "../components/HeaderUser.vue";

let baseURL = request.defaults.baseURL;
// 获取pinia对象
const userStore = useUserStore();
// 获取标题头部信息对象
let headerUserInfo: HeaderUserInfo = userStore.headerUserInfo;
// 获取用户头像地址对象
let userAvatar: UserAvatar = userStore.userAvatar;
console.log(baseURL + userAvatar.savePath);
</script>

<style scoped>
div {
  display: inline-block;
}

.headerRoot {
  width: calc(100% - 80px);
  height: 40px;
  box-shadow: 0 0 1px inset;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0 0 5px 5px;
  padding: 0 40px;
}

.headerTitle {
  line-height: 40px;
}

.headerTitle img {
  height: 34px;
  float: left;
  margin: 3px 10px;
}

button {
  float: right;
  margin: 5px 0;
}
</style>
