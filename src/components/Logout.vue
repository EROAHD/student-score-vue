<template>
  <el-button plain @click="open" :type="'danger'">退出登录</el-button>
</template>

<script lang="ts" setup>
import {ElMessage, ElMessageBox} from 'element-plus'

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
    router.push("/login")
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '取消退出',
    })
  })
}
</script>
