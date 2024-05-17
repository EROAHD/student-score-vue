<script setup lang="ts">
import CourseContent from "./CourseContent.vue";
</script>
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="全部">
      <CourseContent :course-type-id="'0'"></CourseContent>
    </el-tab-pane>
    <el-tab-pane label="必修课">
      <CourseContent :course-type-id="'1'"></CourseContent>
    </el-tab-pane>
    <el-tab-pane label="选修课">
      <CourseContent :course-type-id="'2'"></CourseContent>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>

</style>
