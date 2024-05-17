<script setup lang="ts">
import {Histogram, HomeFilled, InfoFilled, School, UserFilled} from "@element-plus/icons-vue";
</script>

<template>
  <div class="navbarRoot">
    <el-menu
        :default-active="$route.path"
        mode="vertical"
        router
    >
      <el-menu-item index="/teacher/home">
        <el-icon>
          <HomeFilled/>
        </el-icon>
        <span>主页</span>
      </el-menu-item>
      <el-sub-menu index="/teacher">
        <template #title>
          <el-icon>
            <School/>
          </el-icon>
          <span>教学相关</span>
        </template>
        <el-menu-item index="/teacher/students">
          <el-icon>
            <UserFilled/>
          </el-icon>
          <span>
          我的学生
          </span>
        </el-menu-item>
        <el-menu-item index="/teacher/course">
          <el-icon>
            <Histogram/>
          </el-icon>
          <span>
          我的课程
          </span>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="/teacher/info">
        <el-icon>
          <InfoFilled/>
        </el-icon>
        <span>
          个人中心
        </span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.navbarRoot {
  height: calc(100vh - 40px);
  background: white;
  box-shadow: 0 0 1px;
  border-radius: 0 0 10px;
}

a {
  text-decoration: none;
}

button {
  width: calc(100% - 10px);
  height: 100%;
  border-radius: 5px 0 0 5px;
  margin: 10px 0;
}

.active button {
  box-shadow: 0 0 6px inset;
}
</style>