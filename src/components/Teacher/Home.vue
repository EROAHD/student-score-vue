<script setup lang="ts">
/*
* 定义banner类型
*/
import {onMounted, reactive} from "vue";
import request from "../../request";
import ScoreBarChart from "../Admin/ScoreBarChart.vue";

export interface Banner {
  "bannerId": string,
  "bannerType": number,
  "bannerUrl": string,
  "filePath": string
}

//

let banners: Banner[] = reactive<Banner[]>([])
onMounted(async () => {
  await request.get("/banner/2").then(resp => {
    if (resp.status == 200) {
      Object.assign(banners, resp.data.data)
      console.log(banners)
    }
  })
})

//
function imageClicked(bannerUrl: string) {
  window.open(bannerUrl, "_blank")
}

let scoreCountList = reactive([1,20,60,90])

</script>

<template>
  <el-carousel height="300px">
    <el-carousel-item v-for="banner in banners">
      <el-row type="flex" justify="center" align="middle">
        <div @click="imageClicked(banner.bannerUrl)">
          <el-image v-if="banner.bannerType == 1" style="height: 300px"
                    :src="`${request.defaults.baseURL}/${banner.filePath}`"
                    fit="scale-down"/>
          <el-image v-if="banner.bannerType == 0" style="height: 300px" :src="banner.filePath" fit="scale-down"/>
        </div>
      </el-row>
    </el-carousel-item>
  </el-carousel>
  <score-bar-chart :scoreCountList="scoreCountList"></score-bar-chart>
</template>

<style scoped>
</style>