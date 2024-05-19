<script setup lang="ts">
</script>

<template>
  <div class="navbarRoot">
    <el-menu
        :default-active="$route.path"
        mode="vertical"
        router
    >
      <el-menu-item index="/admin/home">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 10px" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8m-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"/>
        </svg>
        <span>主页</span>
      </el-menu-item>

      <el-menu-item index="/admin/teacher">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 10px" viewBox="0 0 256 256">
          <path fill="currentColor"
                d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h13.39a8 8 0 0 0 7.23-4.57a48 48 0 0 1 86.76 0a8 8 0 0 0 7.23 4.57H216a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M104 168a32 32 0 1 1 32-32a32 32 0 0 1-32 32m112 32h-56.57a64 64 0 0 0-13.16-16H192a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8v96a8 8 0 0 0 6 7.75A63.7 63.7 0 0 0 48.57 200H40V56h176Z"/>
        </svg>
        <span>
          教师管理
        </span>
      </el-menu-item>
      <el-menu-item index="/admin/student">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 10px" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M21 16v-5.9l-8.05 4.375q-.45.25-.95.25t-.95-.25l-8.45-4.6q-.275-.15-.388-.375T2.1 9t.113-.5t.387-.375l8.45-4.6q.225-.125.463-.188T12 3.275t.488.063t.462.187l9.525 5.2q.25.125.388.363T23 9.6V16q0 .425-.288.713T22 17t-.712-.288T21 16m-9.95 4.475l-5-2.7q-.5-.275-.775-.75T5 16v-3.8l6.05 3.275q.45.25.95.25t.95-.25L19 12.2V16q0 .55-.275 1.025t-.775.75l-5 2.7q-.225.125-.462.188t-.488.062t-.488-.062t-.462-.188"/>
        </svg>
        <span>
          学生管理
        </span>
      </el-menu-item>
      <el-menu-item index="/admin/course">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 10px" viewBox="0 0 512 512">
          <path fill="currentColor"
                d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93c71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.9 15.9 0 0 0-5.46-12A143 143 0 0 0 202.24 74m279.68-20.7A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.3 143.3 0 0 0-32.31 20.78a15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61"/>
        </svg>
        <span>
          课程管理
        </span>
      </el-menu-item>
      <el-menu-item index="/admin/banner">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 10px" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M3 3h9.382a1 1 0 0 1 .894.553L14 5h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6.382a1 1 0 0 1-.894-.553L12 16H5v6H3z"/>
        </svg>
        <span>
          轮播图管理
        </span>
      </el-menu-item>

      <el-menu-item index="/admin/info">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-right: 10px" viewBox="0 0 24 24">
          <path fill="currentColor"
                d="M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66c-.43-.22-.9-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33c-2.53 0-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z"/>
        </svg>
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