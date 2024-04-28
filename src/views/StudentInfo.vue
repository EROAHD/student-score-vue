<script setup lang="ts">
import {useStudentStore} from "../stores/useStudentStore.ts";

let student = useStudentStore()
</script>

<template>
  {{ student }}
</template>

<style scoped>

</style>