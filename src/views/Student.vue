<script lang="ts" setup>

import Navbar from "./Navbar.vue";
import StudentContent from "./StudentContent.vue";
</script>
<template>
  <div class="studentRoot">
    <navbar></navbar>
    <StudentContent></StudentContent>
  </div>
</template>


<style scoped>
.studentRoot {
  width: 100%;
  height: calc(100vh - 40px);
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
}

.navContent {
  display: inline-block;
  width: 100px;
  height: 100px;
  box-shadow: 0 0 10px;
}
</style>