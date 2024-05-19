<script setup lang="ts">
export interface Banner {
  "bannerId": string,
  "bannerType": number,
  "bannerUrl": string,
  "filePath": string
}

//


import {onMounted, reactive} from "vue";
import request from "../../request";

let banners: Banner[] = reactive<Banner[]>([])
onMounted(async () => {
  await request.get("/banner/2").then(resp => {
    if (resp.status == 200) {
      Object.assign(banners, resp.data.data)
      console.log(banners)
    }
  })
})

</script>

<template>
  <el-scrollbar>
    <el-table :data="banners" height="calc(100vh - 60px)">
      <el-table-column label="走马灯图片">
        <template #default="scope">
          <el-image :src="scope.row.filePath" style="height: 100px;">
            <template #error>
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
                  <path fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
            </template>
          </el-image>
        </template>
      </el-table-column>
      <el-table-column prop="bannerUrl" label="点击跳转地址"></el-table-column>
      <el-table-column prop="filePath" label="文件访问路径"></el-table-column>
      <el-table-column prop="" label="操作">
        <el-button type="primary" plain>修改</el-button>
        <el-button type="danger" plain>删除</el-button>
      </el-table-column>
    </el-table>
  </el-scrollbar>
</template>

<style scoped>

</style>