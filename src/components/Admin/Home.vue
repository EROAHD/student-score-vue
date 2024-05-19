<script setup lang="ts">
import UserCountPie from "./UserCountPie.vue";
import CourseCountPie from "./CourseCountPie.vue";
</script>

<template>
  <el-scrollbar>

    <div class="container">
      <user-count-pie></user-count-pie>
      <course-count-pie></course-count-pie>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 允许换行 */
  gap: 10px; /* 添加间距 */
}

.container > * {
  flex: 1 1 45%; /* 在宽屏时，每个组件占据 45% 的宽度 */
  min-width: 250px; /* 设置最小宽度，避免组件过小 */
  box-sizing: border-box; /* 包括内边距和边框 */
}

@media (max-width: 768px) {
  .container > * {
    flex: 1 1 100%; /* 在窄屏时，每个组件占据 100% 的宽度 */
  }
}
</style>
