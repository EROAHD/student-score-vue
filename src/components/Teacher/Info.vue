<script setup lang="ts">

import {Password, TeacherInfo} from "../../types";
import {useUserStore} from "../../stores/useUserStore.ts";
import {UserFilled} from "@element-plus/icons-vue";
import {reactive, ref} from "vue";
import FileUpload from "../AvatarUpload.vue";
import request from "../../request";
import useUser from "../../hooks/useUser.ts";
import {ElMessage, FormInstance, FormRules} from "element-plus";

let userStore = useUserStore();
let teacherInfo: TeacherInfo = userStore.teacherInfo
let userAvatar = userStore.userAvatar;
//
const activeName = ref('one')
// 设置表示密码的对象
let passwordObj: Password = useUser().passwordObj;

/*
* 表单验证相关操作
*/
const ruleFormRef = ref<FormInstance>()

const validateOldPass = (rule: any, value: any, callback: any) => {
  if (value == '') {
    callback(new Error('请输入原密码'))
  }
  callback()
}
const validateNewPass = (rule: any, value: any, callback: any) => {
  if (value == '') {
    callback(new Error('请输入新密码'))
  } else if (!passwordObj.passwordValid) {
    console.log(passwordObj.passwordValid)
    callback(new Error('密码格式不正确[8-20位]'))
  } else if (passwordObj.oldPassword === passwordObj.newPassword) {
    callback(new Error('新旧密码一致'))
  }
  callback()
}
const validateReNewPass = (rule: any, value: any, callback: any) => {
  if (value == '') {
    callback(new Error('请重新输入新密码'))
  } else if (!passwordObj.passwordMatch) {
    callback(new Error('两次密码不一致'))
  }
  callback()
}

const rules = reactive<FormRules<typeof ruleForm>>({
  oldPassword: [{validator: validateOldPass, trigger: 'blur'}],
  newPassword: [{validator: validateNewPass, trigger: 'blur'}],
  reNewPassword: [{validator: validateReNewPass, trigger: 'blur'}],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      request.put("/password", passwordObj).then(value => {
        console.log(value)
        if (value.data.code == 200) {
          formEl.resetFields()
          ElMessage({
            showClose: true,
            message: '密码修改成功！',
            type: 'success',
          })
        } else {
          ElMessage({
            showClose: true,
            message: value.data.msg,
            type: 'warning',
          })
        }
      })
    }
  })
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
            <el-tab-pane label="修改密码" name="second">
              <el-form :model="passwordObj"
                       ref="ruleFormRef"
                       status-icon
                       :rules="rules"
                       label-width="100px"
              >
                <el-form-item label="原密码" prop="oldPassword">
                  <el-input :type="'password'" v-model="passwordObj.oldPassword"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassword">
                  <el-input :type="'password'" v-model="passwordObj.newPassword"></el-input>
                </el-form-item>
                <el-form-item label="确认新密码" prop="reNewPassword">
                  <el-input :type="'password'" v-model="passwordObj.reNewPassword"></el-input>
                </el-form-item>
                <el-button plain type="primary" @click="submitForm(ruleFormRef)">提交</el-button>
              </el-form>
            </el-tab-pane>
          </el-tabs>
        </el-card>
      </el-space>

    </el-scrollbar>
  </div>
</template>

<style scoped>
</style>