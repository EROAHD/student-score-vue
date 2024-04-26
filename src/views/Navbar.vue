<script setup lang="ts">

</script>

<template>
  <div class="navbarRoot">
    <router-link to="/" active-class="active">
      <button>主页</button>
    </router-link>
    <router-link to="/Student/score" active-class="active">
      <button>学生成绩</button>
    </router-link>
  </div>
</template>

<style scoped>
.navbarRoot {
  width: 15%;
  height: 100%;
  box-shadow: 0 0 1px;
  float: left;
}

a {
  text-decoration: none;
}

button {
  width: calc(100% - 10px);
  border-radius: 5px 0 0 5px;
  margin: 10px 0;
  float: right;
}

.active button {
  box-shadow: 0 0 6px inset;
}
</style>