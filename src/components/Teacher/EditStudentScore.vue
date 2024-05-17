<script setup lang="ts">
import {onMounted, ref} from "vue";
import request from "../../request";
import usePage from "../../hooks/usePage.ts";
import {ElMessage} from "element-plus";

let drawer = ref(false)
let page = usePage().page
let props = defineProps(["courseType", "courseId"]);
let courseId = props.courseId;
let courseType = props.courseType;
let changeDialogVisible = ref(false)
let studentScore = ref({})

onMounted(async () => {
  let {data} = await request.get(`/teacher/student/2/1?courseType=${courseType}&courseId=${courseId}`)
  console.log(data)
  if (data.code == 200) {
    Object.assign(page, data.data)
  }
})

function changeScore(scope) {
  changeDialogVisible.value = true
  console.log(scope)
  studentScore.value = scope
  console.log(studentScore)
}

async function submitChange() {
  await request.put(`/teacher/student/${studentScore.value.sno}/course/${studentScore.value.courseId}/score/${studentScore.value.score}`).then((resp) => {
    console.log(resp)
    if (resp.status == 200) {
      ElMessage.success("修改成绩成功")
      changeDialogVisible.value = false
    }
  })
}
</script>

<template>
  <div>
    <el-button type="primary" @click="drawer = true">
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
          <el-table-column prop="score" label="成绩">
            <template #default="scope">
              <span v-if="scope.row.score === null">--</span>
              <span v-else>{{ scope.row.score }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="mid" label="专业号"/>
          <el-table-column prop="majorName" label="专业名称"/>
          <el-table-column prop="classId" label="班级编号"/>
          <el-table-column prop="className" label="班级"/>
          <el-table-column v-slot="scope">
            <el-button @click="changeScore(scope.row)">修改</el-button>
          </el-table-column>
        </el-table>
        {{ page.list }}
      </el-scrollbar>

      <el-dialog v-model="changeDialogVisible" title="修改成绩" width="300px">
        <el-form>
          <el-form-item label="学号">
            <el-input disabled v-model="studentScore.sno"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input disabled v-model="studentScore.name"></el-input>
          </el-form-item>
          <el-form-item label="课程">
            <el-input disabled v-model="studentScore.courseName"></el-input>
          </el-form-item>
          <el-form-item label="成绩">
            <el-input v-model="studentScore.score"></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="submitChange()">修改</el-button>
      </el-dialog>
    </el-drawer>
  </div>
</template>

<style scoped>

</style>