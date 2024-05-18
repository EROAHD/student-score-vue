<script setup lang="ts">

import {UserFilled} from "@element-plus/icons-vue";
import {useUserStore} from "../stores/useUserStore.ts";
import Logout from "../components/Logout.vue";
import {HeaderUserInfo, UserAvatar} from "../types";
import request from "../request";

let baseURL = request.defaults.baseURL;
// 获取pinia对象
const userStore = useUserStore();
// 获取标题头部信息对象
let headerUserInfo: HeaderUserInfo = userStore.headerUserInfo;
// 获取用户头像地址对象
let userAvatar: UserAvatar = userStore.userAvatar;
</script>

<template>
  <div v-if="headerUserInfo.logged" class="afterLogin">
    <div class="nameBox">
      <el-avatar :size="40" :src="userAvatar.imgSrc" :icon="UserFilled"/>
      <div style="width:max-content;height: 40px;float: right;margin: 0 10px">
        {{ headerUserInfo.name }}
      </div>
    </div>
    <logout></logout>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
}

.headerTitle img {
  height: 34px;
  float: left;
  margin: 3px 10px;
}

.afterLogin {
  float: right;
  width: fit-content;
}

.nameBox {
  width: fit-content;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

button {
  float: right;
  margin: 5px 0;
}
</style>