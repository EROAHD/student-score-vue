<script setup lang="ts">
import UserCountPie from "./UserCountPie.vue";
import CourseCountPie from "./CourseCountPie.vue";
import ScoreBarChart from "./ScoreBarChart.vue";

//
import {onMounted, reactive} from "vue";
import request from "/src/request/index.js";

let scoreCountList = reactive([])
let userCountList = reactive([])
let courseCountList = reactive([])

async function getScoreCount() {
  let scoreRangeList = [
    {
      min: 0,
      max: 59
    }, {
      min: 60,
      max: 69
    }, {
      min: 70,
      max: 89
    }, {
      min: 90,
      max: 100
    }
  ]
  for (let i = 0; i < scoreRangeList.length; i++) {
    let {data} = await request.get(`/dashboard/reports/student/score/${scoreRangeList[i].min}/${scoreRangeList[i].max}`)
    if (data.code == 200) {
      scoreCountList[i] = data.data
    }
  }
}

async function getUserCount() {
  for (let i = 0; i < 3; i++) {
    let {data} = await request.get(`/dashboard/reports/user/count/${i}`)
    if (data.code == 200) {
      userCountList[i] = data.data
    }
  }
}

async function getCourseCount() {
  for (let i = 1; i <= 2; i++) {
    let {data} = await request.get(`/dashboard/reports/course/count/${i}`)
    if (data.code == 200) {
      courseCountList[i - 1] = data.data
    }
  }

}

onMounted(() => {
  getUserCount()
  getCourseCount()
  getScoreCount()
})


</script>

<template>
  <el-scrollbar>

    <div class="container">
      <user-count-pie :userCountList="userCountList"></user-count-pie>
      <course-count-pie :course-count-list="courseCountList"></course-count-pie>
      <score-bar-chart :scoreCountList="scoreCountList"></score-bar-chart>
    </div>
  </el-scrollbar>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap; /* 允许换行 */
  gap: 10px; /* 添加间距 */
}

.container > * {
  flex: 1 1 45%; /* 在宽屏时，每个组件占据 45% 的宽度 */
  min-width: 250px; /* 设置最小宽度，避免组件过小 */
  box-sizing: border-box; /* 包括内边距和边框 */
}

@media (max-width: 768px) {
  .container > * {
    flex: 1 1 100%; /* 在窄屏时，每个组件占据 100% 的宽度 */
  }
}
</style>
