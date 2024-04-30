<script setup lang="ts">

</script>

<template>
  <div class="studentContentRoot">
    <router-view class="content"></router-view>
  </div>
</template>

<style scoped>
.studentContentRoot {
  width: 85%;
  height: 100%;
  box-shadow: 0 0 1px;
  float: left;
  border-radius: 5px;
}

.content {
  overflow: auto;
}
</style>