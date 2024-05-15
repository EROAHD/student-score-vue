<script setup lang="ts">
import router from "../router";

function goHome() {
  const userType = localStorage.getItem("userType")
  if (userType != null) {
    let path = "/" + userType.toLowerCase() + "/home"
    router.push(path)
  } else {
    router.push({name: "login"})
  }
}
</script>
<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <p>页面未找到！</p>
      <button @click="goHome()">返回主页</button>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  height: calc(100vh - 40px);
  border-radius: 5px;
}

.not-found-content {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  width: 400px;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

h1 {
  font-size: 3rem;
  margin: 0;
}

p {
  font-size: 1.5rem;
  margin: 10px 0;
}

button {
  margin: auto;
}

</style>
