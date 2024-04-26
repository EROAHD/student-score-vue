<!-- 控制顶部状态栏组件 -->
<script setup lang="ts">
import router from "../router";
import {useStudentStore} from "../stores/useStudentStore.ts";
import {onMounted} from "vue";

let student = useStudentStore().student;
onMounted(() => {
  console.log(student)
})
</script>

<template>
  <div class="headerRoot">
    <div class="headerTitle">
      <img src="../assets/icon/headerTitle.png" alt="学生成绩查询系统">
      学生成绩查询系统
    </div>
    <div v-if="!student" class="beforeLogin">
      <button v-if="router.currentRoute.value.fullPath!='/login' && !student"
              @click="router.push('login');console.log()">
        登录
      </button>
    </div>
    <div v-else class="afterLogin">
      <div class="nameBox">
        {{ student.name }}
      </div>
      <button v-if="student">退出登录</button>
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
  height: 40px;
  float: left;
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