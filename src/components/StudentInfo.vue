<script setup lang="ts">
import {Info, useStudentStore} from "../stores/useStudentStore.ts";

let student: Info = useStudentStore().studentInfo
</script>

<template>
  <div class="studentInfoRoot">
    <div class="infoItem">
      <div class="title">学号</div>
      <div class="value">{{ student.sno }}</div>
    </div>

    <div class="infoItem">
      <div class="title">姓名</div>
      <div class="value">{{ student.name }}</div>
    </div>

    <div class="infoItem">
      <div class="title">邮箱</div>
      <div class="value">{{ student.email }}</div>
    </div>

    <div class="infoItem">
      <div class="title">专业编号</div>
      <div class="value">{{ student.mid }}</div>
    </div>

    <div class="infoItem">
      <div class="title">专业名称</div>
      <div class="value">{{ student.major_name }}</div>
    </div>

    <div class="infoItem">
      <div class="title">班级编号</div>
      <div class="value">{{ student.cid }}</div>
    </div>

    <div class="infoItem">
      <div class="title">班级名称</div>
      <div class="value">{{ student.class_name }}</div>
    </div>

  </div>
</template>

<style scoped>
.studentInfoRoot {
  box-shadow: 0 0 5px inset;
  border-radius: 10px;
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin: auto;
  padding: 20px;
}

.infoItem {
  width: fit-content;
  margin: 10px 0;
}

.infoItem .title {
  font-weight: bold;
  display: inline-block;
  width: 150px;
}

.infoItem .value {
  display: inline-block;
  width: fit-content;
}
</style>