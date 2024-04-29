<script setup lang="ts">
import Calendar from "./Calendar.vue";
import StudentCourse from "./StudentCourse.vue";
</script>

<template>
  <calendar style="width:280px;height: 230px;float: left"></calendar>
  <student-course style="width: calc(100% - 300px);height: 250px;padding: 0"></student-course>
</template>

<style scoped>

</style>