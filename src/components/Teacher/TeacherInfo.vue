<script setup lang="ts">

import {TeacherInfo, UserAvatar} from "../../types";
import {useUserStore} from "../../stores/useUserStore.ts";
import {UserFilled} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import FileUpload from "../AvatarUpload.vue";
import request from "../../request";

let userStore = useUserStore();
let teacherInfo: TeacherInfo = userStore.teacherInfo
let userAvatar: UserAvatar = userStore.userAvatar;
//
const activeName = ref('one')
let passwordObj = reactive({oldPassword: "", newPassword: ""})

// 修改密码的函数
async function changePassword() {
  let {data} = await request.put("/password", passwordObj)
  console.log(data)
}
</script>

<template>
  <div class="teacherInfoRoot">
    <el-scrollbar :height="'calc(100vh - 60px)'">
      <el-space>
        <el-card style="width: 400px;height: calc(100vh - 60px)">
          <template #header>个人信息</template>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: center">
            <el-avatar :size="200" :icon="UserFilled" :src="userAvatar.imgSrc" shape="square"></el-avatar>
          </div>
          <file-upload></file-upload>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>账号：</div>
            <div>{{ teacherInfo.tno }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>手机号</div>
            <div>{{ teacherInfo.phone }}</div>
          </div>
          <el-divider></el-divider>
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div>所属角色</div>
            <div>
              <el-tag type="primary" size="large">教师</el-tag>
            </div>
          </div>
          <el-divider></el-divider>

        </el-card>
        <el-card style="width: 500px;height: calc(100vh - 60px)">
          <template #header>基本资料</template>
          <el-tabs class="demo-tabs" v-model="activeName">
            <el-tab-pane label="基本信息" name="one">
              <el-divider></el-divider>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>姓名</div>
                <div>{{ teacherInfo.name }}</div>
              </div>
              <el-divider></el-divider>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>性别</div>
                <div>{{ teacherInfo.sex ? '男' : '女' }}</div>
              </div>
              <el-divider></el-divider>
            </el-tab-pane>
            <el-tab-pane label="修改密码" name="second" style="display: flex;justify-content: center">
              <el-form>
                <el-form-item label="原密码">
                  <el-input :type="'password'" v-model="passwordObj.oldPassword"></el-input>
                </el-form-item>
                <el-form-item label="新密码">
                  <el-input :type="'password'" v-model="passwordObj.newPassword"></el-input>
                </el-form-item>
                <el-button type="primary" @click="changePassword">提交</el-button>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-space>

    </el-scrollbar>
  </div>
</template>

<style scoped>
.teacherInfoRoot {
  padding: 10px;
}
</style>