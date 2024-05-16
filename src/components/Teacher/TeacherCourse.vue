<template>
  <el-scrollbar style="height: calc(100% - 20px);padding: 10px">
    <el-tabs type="border-card">
      <el-tab-pane label="全部">
        {{ all }}
      </el-tab-pane>
      <el-tab-pane label="必修课">
        {{ request.get("/teacher/course/5/1?type=0") }}

      </el-tab-pane>
      <el-tab-pane label="选修课">
        {{ request.get("/teacher/course/5/1?type=0") }}

      </el-tab-pane>
    </el-tabs>
  </el-scrollbar>
</template>


<script setup lang="ts">

import request from "../../request";

let all = request.get("/teacher/course/5/1?type=0")
console.log(all.data.data)
</script>

<style scoped>

</style>