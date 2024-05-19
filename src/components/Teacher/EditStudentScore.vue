<script setup lang="ts">
import {Ref, ref, UnwrapRef} from "vue";
import request from "../../request";
import usePage from "../../hooks/usePage.ts";
import {ElMessage} from "element-plus";
import {StudentScore} from "../../types";

let page = usePage().page
let props = defineProps(["courseType", "courseId"]);
let courseId = props.courseId;
let courseType = props.courseType;
let drawer = ref(false)


async function getStudents() {
  drawer.value = true
  let {data} = await request.get(`/teacher/students/${courseType}/${courseId}`)
  console.log(data)
  if (data.code == 200) {
    Object.assign(page, data.data)
  }
}


let changeDialogVisible = ref(false)
let studentRow: Ref<UnwrapRef<StudentScore>> = ref<StudentScore>({
  classId: 0,
  className: "",
  courseId: 0,
  courseName: "",
  majorName: "",
  mid: 0,
  name: "",
  score: 0,
  sno: 0,
  teacher: ""
})

function changeScore(scope) {
  changeDialogVisible.value = true
  console.log(scope)
  studentRow.value = scope
  console.log(studentRow)
}

async function submitChange() {
  if (!studentRow.value.score) {
    ElMessage.error("请输入有效的值！")
  }
  if (studentRow.value.score > 100 || studentRow.value.score < 0) {
    ElMessage.error("成绩必须大于等于0且小于等于100")
  } else {
    await request.put(`/teacher/student/${studentRow.value.sno}/course/${studentRow.value.courseId}/score/${studentRow.value.score}`).then((resp) => {
      console.log(resp)
      if (resp.status == 200) {
        ElMessage.success("修改成绩成功")
        changeDialogVisible.value = false
      }
    })
  }
}
</script>

<template>
  <div>
    <el-button plain type="primary" @click="getStudents">
      编辑学生成绩
    </el-button>

    <el-drawer :direction="'rtl'"
               v-model="drawer"
               title="成绩编辑"
               size="80%">
      <el-scrollbar>
        <el-table :data="page.list" height="100%" style="width: 100%" :highlight-current-row="true">
          <el-table-column prop="sno" label="学号" width="180"/>
          <el-table-column prop="name" label="姓名" width="180"/>
          <el-table-column prop="courseName" label="课程"/>
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
            <el-button plain @click="changeScore(scope.row)" type="primary">修改</el-button>
          </el-table-column>
        </el-table>
      </el-scrollbar>

      <el-dialog v-model="changeDialogVisible" title="修改成绩" width="300px">
        <el-form>
          <el-form-item label="学号">
            <el-input disabled v-model="studentRow.sno"></el-input>
          </el-form-item>
          <el-form-item label="姓名">
            <el-input disabled v-model="studentRow.name"></el-input>
          </el-form-item>
          <el-form-item label="课程">
            <el-input disabled v-model="studentRow.courseName"></el-input>
          </el-form-item>
          <el-form-item label="成绩">
            <el-input type="number" v-model.number="studentRow.score"></el-input>
          </el-form-item>
        </el-form>
        <el-button plain @click="submitChange()">修改</el-button>
      </el-dialog>
    </el-drawer>
  </div>
</template>

<style scoped>

</style>