<script setup lang="ts">
import {onMounted, reactive} from "vue";
import request from "../../request";
import usePage from "../../hooks/usePage.ts";
import {TeacherCourse} from "../../types";
import CourseImageUpload from "../CourseImageUpload.vue";
import EditStudentScore from "./EditStudentScore.vue";


let page = usePage().page;
let courses = reactive<TeacherCourse[]>([]);
let props = defineProps(["courseTypeId"]);
let courseTypeId = props.courseTypeId;
let courseTypeName = "必修";
switch (courseTypeId) {
  case "2":
    courseTypeName = "选修"
    break;
}
onMounted(async () => {
  await request.get(`/teacher/course/5/1?type=${courseTypeId}`).then((resp) => {
    if (resp.status == 200) {
      Object.assign(page, resp.data.data)
      Object.assign(courses, page.list)
      console.log(courses)
    }
  })
})
</script>

<template>
  <el-scrollbar style="height: calc(100vh - 130px);float: left">
    <el-empty v-if="!(courses.length > 0)" description="没有课程"></el-empty>
    <div class="card-container">
      <el-card v-for="course in courses" :key="course" style="width: 300px;margin: 5px"
               shadow="hover">
        <el-image style="width: 100%;height: 200px" fit="contain"
                  :src="`${request.defaults.baseURL}/upload/course_${course.cid}.jpg`">
          <template #error>
            <el-empty image-size="50px" description="暂无图片"></el-empty>
          </template>
        </el-image>
        <div style="display: flex;justify-content: space-between">
          <course-image-upload :course-id="course.cid"></course-image-upload>
          <edit-student-score :course-id="course.cid" :course-type="course.typeId"></edit-student-score>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>课程号</el-text>
          <el-text>{{ course.cid }}</el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>

        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>课程名</el-text>
          <el-text>{{ course.name }}</el-text>
        </div>
        <el-divider style="margin: 5px 0"></el-divider>

        <div v-if="course.typeId == '1'" style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>所属专业</el-text>
          <el-text>{{ course.mid }}</el-text>
        </div>
        <el-divider v-if="course.typeId == '1'" style="margin: 5px 0"></el-divider>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <el-text>课程类型</el-text>
          <el-text>{{ course.typeId == "1" ? "必修" : "选修" }}</el-text>
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