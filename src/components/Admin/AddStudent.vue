<script setup lang="ts">
// 添加学生的方法相关
import {computed, reactive, ref} from "vue";
import request from "../../request";

let showStudentAddDialog = ref(false)
let newStudent = reactive({
  stu_in_year: "", // 学生入学年份 22，23
  stu_major_id: 0, // 学生专业号 1001，1002
  stu_class: 0, // 学生班级号 01， 02
  stu_class_num: 0, //学生班级排号 01，02
  //
  name: "",
  email: "",
  sex: true,
  // 班级号
  cid: computed(() => {
    return String(newStudent.stu_major_id) + "0" + newStudent.stu_class
  }),
})

// 获取所有专业号
let allMajors = reactive([])

async function getAllMajors() {
  await request.get("admin/major").then((resp) => {
    if (resp.status == 200) {
      Object.assign(allMajors, resp.data.data)
    }
  }).catch()
}

// 获取某一专业中所有的班级
let allClass = reactive([])

async function getAllClass() {
  await request.get("admin/class").then(
      (resp) => {
        if (resp.status == 200) {
          Object.assign(allClass, resp.data.data)
        }
      }
  )
}

async function addStudent() {
  showStudentAddDialog.value = true
  await getAllMajors()
  await getAllClass()
}
</script>

<template>
  <el-button type="primary" plain @click="addStudent">添加学生</el-button>
  <!--  添加学生的弹出框  -->
  <el-dialog v-model="showStudentAddDialog">
    <el-space>
      <el-form>
        <el-form-item>
          <el-date-picker
              type="year"
              placeholder="请选择入学年份"
              format="YYYY"
              value-format="YY"
              v-model="newStudent.stu_in_year"
              default-value="2024"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-select v-model="newStudent.stu_major_id" :default-first-option="true">
            <el-option v-for="major in allMajors" :value="major.mid" :label="major.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="newStudent.stu_class" :default-first-option="true">
            <el-option v-for="sClass in allClass" :value="sClass.cid" :label="sClass.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="newStudent.stu_class_num">
            <el-option v-for="key in 50" :value="key" :label="key"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-space>
    {{ newStudent }}
  </el-dialog>
</template>

<style scoped>

</style>