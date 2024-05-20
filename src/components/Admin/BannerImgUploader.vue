<template>
  <el-form ref="formRef" label-width="200px">
    <el-form-item label="图片上传" class="avatar-uploader">
      <el-upload
          :show-file-list="false"
          :on-success="handleSuccess"
          :before-upload="beforeUpload"
          :action="`${request.defaults.baseURL}/banner/uploadImg`"
          ref="uploadRef">
        <el-image v-if="imageUrl" :src="imageUrl" class="avatar"/>
        <el-icon v-else class="banner-img-box">
          <Plus/>
        </el-icon>
      </el-upload>
    </el-form-item>
    <el-form-item label="文件访问路径">
      <el-input v-model="bannerObj.filePath" disabled></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {ElMessage, UploadProps} from 'element-plus';
import {Plus} from '@element-plus/icons-vue';
import request from "../../request";

const props = defineProps(["bannerObj"]);
let bannerObj = props.bannerObj;
// 定义组件中的状态变量
const formRef = ref(null);
const uploadRef = ref(null);
const imageUrl = ref('');


const handleSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  ElMessage.success("上传成功！")
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  bannerObj.filePath = response.data
}

// 上传前检查文件类型和大小
const beforeUpload = (file) => {
  if (!(file.type === 'image/jpeg')) {
    ElMessage.error('上传图片格式必须是 JPG!');
    return false;
  }
  if (!(file.size / 1024 / 1024 < 2)) {
    ElMessage.error('上传图片大小不能超过 2MB!');
    return false;
  }
  return true;
};

// 提交表单，将文件数据添加到 FormData 中并发送请求

</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.banner-img-box {
  width: 300px;
  box-shadow: 0 0 1px;
  border-radius: 5px;
  transition: box-shadow 0.3s ease-in-out;
}

.banner-img-box:hover {
  box-shadow: 0 0 10px;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.banner-img-box {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
  line-height: 178px; /* 调整图标的垂直居中对齐 */
}
</style>
