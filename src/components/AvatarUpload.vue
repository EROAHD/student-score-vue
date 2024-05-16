<template>
  <el-upload
      ref="upload"
      accept=""
      class="upload-demo"
      :action="`${request.defaults.baseURL}/avatar`"
      :headers="{token:token}"
      :limit="1"
      :on-exceed="handleExceed"
      :on-success="handleAvatarSuccess"
      :show-file-list="false"
      style="display:flex;justify-content: center"
  >
    <template #trigger>
      <el-button type="primary">选择头像</el-button>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import type {UploadInstance, UploadProps, UploadRawFile} from 'element-plus'
import {genFileId} from 'element-plus'
import request from "../request";
import {useUserStore} from "../stores/useUserStore.ts";

let token = localStorage.getItem("token")
let userStore = useUserStore();
let userAvatar = userStore.userAvatar;

const upload = ref<UploadInstance>()

const handleAvatarSuccess: UploadProps['onSuccess'] = async (response: any) => {
  console.log(response)
  if (response.code == 200) {
    let {data} = await request.get(`${request.defaults.baseURL}/avatar`)
    Object.assign(userAvatar, data.data)
  }
  upload.value!.clearFiles()
}

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

</script>
