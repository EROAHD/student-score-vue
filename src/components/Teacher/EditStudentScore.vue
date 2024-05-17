<script setup lang="ts">
import {onMounted, ref} from "vue";
import request from "../../request";
import usePage from "../../hooks/usePage.ts";

let drawer = ref(false)
let page = usePage().page
let props = defineProps(["courseType", "courseId"]);
let courseId = props.courseId;
let courseType = props.courseType;
let dialogFormVisible = ref(false)

onMounted(async () => {
  let {data} = await request.get(`/teacher/student/2/1?courseType=${courseType}&courseId=${courseId}`)
  console.log(data)
  if (data.code == 200) {
    Object.assign(page, data.data)
  }
})
</script>

<template>
  <el-button type="primary" style="width:100px;display: flex;justify-content: center" @click="drawer = true">
    编辑学生成绩
  </el-button>

  <el-drawer :direction="'rtl'"
             v-model="drawer"
             title="成绩编辑"
             size="80%">
    <el-scrollbar>
      <el-table :data="page.list" height="250" style="width: 100%" :highlight-current-row="true">
        <el-table-column prop="sno" label="学号" width="180"/>
        <el-table-column prop="name" label="姓名" width="180"/>
        <el-table-column prop="courseName" label="课程"/>
        <el-table-column prop="teacher" label="老师"/>
        <el-table-column prop="score" label="成绩"/>
        <el-table-column prop="mid" label="专业号"/>
        <el-table-column prop="majorName" label="专业名称"/>
        <el-table-column prop="classId" label="班级编号"/>
        <el-table-column prop="className" label="班级"/>
        <el-table-column>
          <el-button @click="dialogFormVisible = true">修改</el-button>
        </el-table-column>
      </el-table>
      {{ page.list }}
    </el-scrollbar>

    <el-dialog v-model="dialogFormVisible" title="Shipping address" width="800">

    </el-dialog>
  </el-drawer>
</template>

<style scoped>

</style>