<!-- 控制顶部状态栏组件 -->
<script setup lang="ts">
import router from "../router";
</script>

<template>
  <div class="headerRoot">
    <div class="headerTitle">
      <img src="">
      学生成绩查询系统
    </div>
    <button v-if="true" @click="router.push('login')">登录</button>
    <button v-if="false">退出登录</button>
  </div>
</template>

<style scoped>
.headerTitle {
  float: left;
  line-height: 40px;
}

.headerRoot {
  width: calc(100% - 80px);
  height: 40px;
  box-shadow: 0 0 1px inset;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0 0 5px 5px;
  padding: 0 40px;
}

button {
  float: right;
  margin: 5px 0;
}
</style>