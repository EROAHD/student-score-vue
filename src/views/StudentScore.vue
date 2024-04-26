<script setup lang="ts">
import {onMounted} from "vue";
import request from "../request";

async function getScore() {
  let {data} = await request.get("/score/2/1");
  console.log(data)
}


onMounted(() => {
  getScore()
})
</script>

<template>
  score
</template>

<style scoped>

</style>