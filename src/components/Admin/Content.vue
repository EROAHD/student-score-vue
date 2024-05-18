<script setup lang="ts">

</script>

<template>
  <div class="studentContentRoot">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.studentContentRoot {
  height: calc(100vh - 60px);
  box-shadow: 0 0 1px;
  border-radius: 5px;
  padding: 10px;
}
</style>