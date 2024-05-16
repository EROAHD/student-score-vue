<template>
  <el-button plain @click="open" :type="'danger'">退出登录</el-button>
</template>

<script lang="ts" setup>
import {ElMessage, ElMessageBox} from 'element-plus'
import router from "../router";
import useLocalStorage from "../hooks/useLocalStorage.ts";
import {useUserStore} from "../stores/useUserStore.ts";

const open = () => {
  ElMessageBox.confirm(
      '你将要退出登录，是否确认？',
      '警告',
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
        center: true
      }
  ).then(() => {
    useLocalStorage().removeLocalStorage(["token", "userType", "tokenExpiration"])
    useUserStore().resetStore()
    router.push("/login")
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消退出',
    })
  })
}
</script>
