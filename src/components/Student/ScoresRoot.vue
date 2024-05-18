<script setup lang="ts">
import ScoreContent from "./ScoreContent.vue";
</script>
<template>
  <el-tabs type="border-card">
    <el-tab-pane label="全部">
      <score-content :course-type-id="'0'"></score-content>
    </el-tab-pane>
    <el-tab-pane label="必修课">
      <score-content :course-type-id="'1'"></score-content>
    </el-tab-pane>
    <el-tab-pane label="选修课">
      <score-content :course-type-id="'2'"></score-content>
    </el-tab-pane>
  </el-tabs>
</template>
<style scoped>

</style>
