<!-- 控制主要显示的内容的组件 -->
<script setup lang="ts"></script>

<template>
  <div class="bodyRoot">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.bodyRoot {
  min-height: calc(100vh - 40px);
  margin: auto;
  border-radius: 5px;
}
</style>