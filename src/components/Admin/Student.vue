<script setup lang="ts">

import {onMounted, reactive, ref} from "vue";
import request from "../../request";
import Student from "./Student.vue";
import {ElMessage} from "element-plus";
import {UserFilled} from "@element-plus/icons-vue";
import AddStudent from "./AddStudent.vue";


//
interface Student {
  sno: number,
  name: string,
  sex: boolean,
  email: string,
  mid: number,
  majorName: string,
  cid: number,
  className: string
}

//


let students: Student[] = reactive<Student[]>([])

async function getAllStudents() {
  let {data} = await request.get("/admin/student")
  if (data.code == 200) {
    Object.assign(students, data.data)
  }
}

// 获取学生信息
let dialogStudent = reactive({
  sno: 0,
  name: "",
  sex: true,
  email: "",
  mid: 0,
  majorName: "",
  cid: 0,
  className: "",
  avatarPath: ""
})


//
async function getStudentAvatarBySno(sno: number) {
  dialogStudent.avatarPath = ""
  let {data} = await request.get(`/admin/avatar/${sno}`)
  if (data.code == 200) {
    dialogStudent.avatarPath = data.data.savePath
  }
}

let showStudentInfoDialog = ref(false)

async function getStudentInfo(scope: any) {
  let {data} = await request.get(`/admin/student?sno=${scope.row.sno}`)
  if (data.code == 200) {
    showStudentInfoDialog.value = true
    Object.assign(dialogStudent, data.data[0])
    await getStudentAvatarBySno(scope.row.sno)
  } else {
    ElMessage.error("未找到学生详情！")
  }
}

// 过滤学生
let studentFilter = reactive({
  sno: "",
  name: "",
  email: ""
})

async function getStudentByFilter() {
  let {data} = await request.get(`/admin/student?sno=${studentFilter.sno}&name=${studentFilter.name}&email=${studentFilter.email}`)
  if (data.code == 200) {
    students.length = 0
    Object.assign(students, data.data)
  }
}

onMounted(() => {
  getAllStudents()
})


</script>

<template>
  <el-scrollbar style="background:white;">
    <el-form style="height: 40px">
      <el-space>
        <el-form-item>
          <el-input v-model="studentFilter.sno" type="number" placeholder="学号筛选"
                    @blur="getStudentByFilter"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="studentFilter.name" type="text" @blur="getStudentByFilter"
                    placeholder="名称筛选"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="studentFilter.email" @blur="getStudentByFilter" placeholder="邮箱筛选"></el-input>
        </el-form-item>
        <el-form-item>
          <add-student></add-student>
        </el-form-item>
      </el-space>
    </el-form>
    <el-table :data="students" style="width: 100%" height="calc(100vh - 132px)">
      <el-table-column prop="sno" label="学号" fixed></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column label="性别" width="100">
        <template #default="scope">
          {{ scope.row.sex ? '男' : '女' }}
        </template>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="300"></el-table-column>
      <el-table-column prop="mid" label="专业号"></el-table-column>
      majorName
      <el-table-column prop="majorName" label="专业"></el-table-column>
      <el-table-column prop="className" label="班级"></el-table-column>
      <template #empty>
        <el-empty description="暂无数据"/>
      </template>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" @click="getStudentInfo(scope)">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--  设置点击详情的弹出框  -->
    <el-dialog v-model="showStudentInfoDialog" class="studentInfo" width="min-content">
      <el-space>
        <el-card style="width: 400px;">
          <template #header>个人信息</template>
          <div style="display: flex; justify-content: center;">
            <div style="height: min-content;box-shadow: 0 0 5px;border-radius: 5px">
              <el-avatar :size="200" :icon="UserFilled" :src="request.defaults.baseURL + '/' + dialogStudent.avatarPath"
                         shape="square"></el-avatar>
            </div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>学号：</div>
            <div>{{ dialogStudent.sno }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>邮箱</div>
            <div>{{ dialogStudent.email }}</div>
          </div>
          <el-divider></el-divider>
        </el-card>
        <el-card style="width: 400px">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>姓名：</div>
            <div>{{ dialogStudent.name }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>性别：</div>
            <div>{{ dialogStudent.sex ? "男" : "女" }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>专业编号</div>
            <div>{{ dialogStudent.mid }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>专业</div>
            <div>{{ dialogStudent.majorName }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>班级编号</div>
            <div>{{ dialogStudent.cid }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>班级</div>
            <div>{{ dialogStudent.className }}</div>
          </div>
          <el-divider></el-divider>
        </el-card>
      </el-space>
      <!--      {{ dialogStudent }}-->
    </el-dialog>

  </el-scrollbar>
</template>

<style scoped>
.studentInfo {
}
</style>