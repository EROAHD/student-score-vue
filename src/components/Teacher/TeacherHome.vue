<script setup lang="ts">

const images = [
  "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4wB7s?ver=ef49",
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11N5ug.img",
  "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA11N2LZ.img"
]

</script>

<template>
  <el-carousel height="300px">
    <el-carousel-item v-for="image in images">
      <el-row type="flex" justify="center" align="middle">
        <el-image style="width: 500px" :src="image" fit="scale-down"/>
      </el-row>
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
</style>