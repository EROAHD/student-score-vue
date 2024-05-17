<template>
  <el-upload
      ref="upload"
      class="upload-demo"
      :action="requestUrl"
      :headers="{token:token}"
      :limit="1"
      :on-exceed="handleExceed"
      :before-upload="beforeUpload"
      :show-file-list="false"
      style="display:flex;justify-content: center"
  >
    <template #trigger>
      <el-button type="primary">选择图片</el-button>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import {ElMessage, genFileId, UploadInstance, UploadProps, UploadRawFile} from 'element-plus'
import request from "../request";

let props = defineProps(["courseId"]);
let courseId = props.courseId;

let token = localStorage.getItem("token")
let requestUrl = `${request.defaults.baseURL}/course/img/${courseId}`

const upload = ref<UploadInstance>()

const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('仅支持jpeg图片文件！')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('文件必须小于2MB!')
    return false
  }
  return true
}

const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}

</script>
