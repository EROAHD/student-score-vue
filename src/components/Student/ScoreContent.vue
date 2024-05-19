<script setup lang="ts">
import {onMounted, reactive} from "vue";
import request from "../../request";
import {StudentCourse} from "../../types";


let courses = reactive<StudentCourse[]>([]);
let props = defineProps(["courseTypeId"]);
let courseTypeId = props.courseTypeId;

onMounted(async () => {
  await request.get(`/student/score/${courseTypeId}`).then((resp) => {
    if (resp.status == 200) {
      Object.assign(courses, resp.data.data)
      console.log(courses)
    }
  })
})
</script>

<template>
  <el-scrollbar style="height: calc(100vh - 130px);float: left;width: 100%">
    <el-empty v-if="!(courses.length > 0)" description="没有课程"></el-empty>
    <div class="card-container">
      <el-card v-for="course in courses"
               :key="course"
               style="width: 300px;margin: 5px"
               shadow="hover"
               :style="{boxShadow:course.score == null?'0 0 3px Orange':course.score < 60?'0 0 5px red':''}"
      >
        <el-image style="width: 100%;height: 200px" fit="contain"
                  :src="`${request.defaults.baseURL}/upload/course_${course.courseId}.jpg`">
          <template #error>
            <el-empty :image-size="50" description="暂无图片"></el-empty>
          </template>
        </el-image>
        <div style="display: flex;justify-content: space-between">
        </div>
        <el-divider style="margin: 5px 0"></el-divider>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>课程号</el-text>
          <el-text>{{ course.courseId }}</el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>课程名</el-text>
          <el-text>{{ course.courseName }}</el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>授课教师</el-text>
          <el-text>{{ course.teacherName }}</el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>成绩</el-text>
          <el-text :style="{color:course.score == null?'orange':(course.score < 60?'red':'')}">
            {{ course.score == null ? "暂无成绩" : course.score }}
          </el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>

        <div v-if="course.courseType == 1"
             style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>所属专业</el-text>
          <el-text>{{ course.courseMajor }}</el-text>
        </div>
        <el-divider v-if="course.courseType == 1" style="margin: 5px 0"></el-divider>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>课程类型</el-text>
          <el-text>{{ course.courseType == 1 ? '必修' : '选修' }}</el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>
      </el-card>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
}
</style>