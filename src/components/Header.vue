<!-- 控制顶部状态栏组件 -->
<script setup lang="ts">
import router from "../router";
import {useStudentStore} from "../stores/useStudentStore.ts";
import {onMounted} from "vue";
import request from "../request";

let student = useStudentStore().student;

async function getStudentInfo() {
  let {data} = await request.get("/student/info")
  if (data.code == 200) {
    Object.assign(student, data.data)
    student.logged = true
  }
}

onMounted(() => {
  getStudentInfo()
  console.log(student)
})

function logout() {
  localStorage.removeItem("token")
  student.logged = false
  router.push("/login")
}
</script>

<template>
  <div class="headerRoot">
    <div class="headerTitle">
      <img src="../assets/icon/headerTitle.png" alt="学生成绩查询系统">
      学生成绩查询系统
    </div>
    <div v-if="student.logged" class="afterLogin">
      <div class="nameBox">
        {{ student.name }}
      </div>
      <button @click="logout">退出登录</button>
    </div>
  </div>
</template>

<style scoped>
div {
  display: inline-block;
}

.headerRoot {
  width: calc(100% - 80px);
  height: 40px;
  box-shadow: 0 0 1px inset;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0 0 5px 5px;
  padding: 0 40px;
}

.headerTitle {
  line-height: 40px;
}

.headerTitle img {
  height: 34px;
  float: left;
  margin: 3px 10px;
}

.beforeLogin {
  float: right;
  width: fit-content;
}

.afterLogin {
  float: right;
  width: fit-content;
}


.nameBox {
  width: fit-content;
  padding: 0 10px;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
}

button {
  float: right;
  margin: 5px 0;
}
</style>