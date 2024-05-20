<script setup lang="ts">
import {ElMessage} from "element-plus";
//
import {onMounted, reactive, ref} from "vue";
import request from "../../request";
import BannerImgUploader from "./BannerImgUploader.vue";

// 定义banner对象类型
export interface Banner {
  "bannerId": string,
  "bannerType": number,
  "bannerUrl": string,
  "filePath": string
}

// 挂载时获取所有的banner信息
let banners: Banner[] = reactive<Banner[]>([])
onMounted(async () => {
  await getAllBanners()
})

async function getAllBanners() {
  banners.length = 0;
  await request.get("/banner/2").then(resp => {
    if (resp.status == 200) {
      Object.assign(banners, resp.data.data)
      console.log(banners)
    }
  })
}

let banner: Banner = reactive<Banner>(
    {
      bannerId: "",
      bannerType: 1,
      bannerUrl: "",
      filePath: ""
    }
)

function resetBannerObj() {
  banner.bannerId = ""
  banner.bannerUrl = ""
  banner.filePath = ""
}


// 点击添加按钮后的操作
let dialogTableVisible = ref(false)

// 点击右下角按钮后的动作
function showAddMenu() {
  dialogTableVisible.value = true
}

// 通过bannerId删除banner
async function deleteBanner(scope) {
  if (scope.row.bannerId) {
    if (banners.length === 1) {
      ElMessage.error("至少保留一个轮播图")
    } else {
      let {data} = await request.delete(`/banner/${scope.row.bannerId}`)
      console.log(data)
      console.log(scope.row.bannerId)
      if (data.code == 200) {
        ElMessage.success("删除成功")
        await getAllBanners()
      }
    }
  } else {
    ElMessage.error("删除失败")
  }
}

// 通过表格中行信息获取图片路径
function getBannerFilePath(scope) {
  if (scope.row.bannerType == 1)
    return request.defaults.baseURL + "/" + scope.row.filePath
  return scope.row.filePath
}

// 提交新添加的banner
async function submitNewBanner() {
  if (banner.filePath && banner.bannerUrl) {
    let {data} = await request.post("/banner/save", banner)
    if (data.code == 200) {
      dialogTableVisible.value = false
      ElMessage.success("添加成功")
      await getAllBanners();
    } else {
      ElMessage.error("添加失败")
    }
  } else {
    ElMessage.error("数据不完整")
  }
}

</script>

<template>
  <el-scrollbar>
    <!--  显示所有banner的表格  -->
    <el-table height="calc(100vh - 60px)" :data="banners">
      <template #empty>
        <el-empty description="暂无数据"></el-empty>
      </template>
      <el-table-column label="轮播图图片">
        <template #default="scope">
          <el-image :src="getBannerFilePath(scope)"
                    style="height: 100px;">
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
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="danger" plain @click="deleteBanner(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-button size="large" type="primary"
               style="width:80px;height:80px;position: fixed;bottom:100px;right:100px;z-index: 100;"
               circle
               plain
               @click="showAddMenu"
    >添加
    </el-button>
    <!--  新增轮播图操作  -->
    <el-dialog v-model="dialogTableVisible" title="添加轮播图图片">
      <el-form label-width="200px">
        <el-form-item label="点击图片时跳转的地址">
          <el-input type="text" v-model="banner.bannerUrl"></el-input>
        </el-form-item>
        <!--    选择上传轮播图图片的类型    -->
        <el-form-item label="选择轮播图图片类型">
          <el-select v-model="banner.bannerType" placeholder="请选择" style="width: 100px" default-first-option
                     @change="resetBannerObj">
            <el-option label="本地图片" :value="1"></el-option>
            <el-option label="网络图片" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <!--    处理本地图片上传    -->
        <banner-img-uploader v-if="banner.bannerType==1" :bannerObj="banner"></banner-img-uploader>
        <!--    处理网络图片    -->
        <el-form-item v-if="banner.bannerType==0" label="网络图片链接">
          <el-input v-model="banner.filePath"></el-input>
          <el-image :src="banner.filePath" style="width: 180px;height: 180px">
            <template #error>
              <el-empty description=" " :image-size="80"/>
            </template>
          </el-image>
        </el-form-item>
        <!--     新增banner的提交按钮   -->
        <el-form-item style="display: flex;justify-content: center">
          <el-button type="primary" @click="submitNewBanner">提交</el-button>
        </el-form-item>
        <!--        -->
      </el-form>
    </el-dialog>
    <!--    -->
    <!--    -->

  </el-scrollbar>
</template>

<style scoped>

</style>