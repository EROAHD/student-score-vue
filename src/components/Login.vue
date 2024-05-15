<script setup lang="ts">
import useUser from "../hooks/useUser.ts";
import InfoBox from "./utils/InfoBox.vue";
import useInfoBox from "../hooks/useInfoBox.ts";
import request from "../request";
import {useUserStore} from "../stores/useUserStore.ts";
import router from "../router";

let {infoBoxObj, showInfoBox} = useInfoBox()
let {loginUser} = useUser();
let headerUser = useUserStore().headerUserInfo;

async function login() {
  if (!loginUser.username || !loginUser.password) {
    showInfoBox(infoBoxObj, "用户名或密码不能为空");
    return;
  }
  let {data} = await request.post("/login", loginUser)
  if (data.code == 200) {
    console.log(data)
    const token: string = data.data.token
    const userType: string = data.data.userType
    // let tokenExpiration = new Date().getTime() + 5000;
    const tokenExpiration: number = new Date().getTime() + (7 * 24 * 60 * 60 * 1000)
    // 将部分字段存储到本地存储中
    localStorage.setItem("userType", userType)
    localStorage.setItem("token", token)
    localStorage.setItem("tokenExpiration", String(tokenExpiration))
    //
    headerUser.logged = true
    // 跳转指定的角色的页面
    switch (userType) {
      case "STUDENT":
        console.log("student")
        await router.push({name: "studentRoot"})
        break
      case "TEACHER":
        console.log("teacher")
        await router.push({name: "teacherRoot"})
        break
    }
  } else {
    showInfoBox(infoBoxObj, data.msg)
  }
}

</script>

<template>
  <InfoBox v-if="infoBoxObj.show" :infoBox="infoBoxObj"></InfoBox>
  <div class="loginRoot">
    <h1>登录</h1>
    <div class="formBox">
      <input type="text" v-model="loginUser.username" placeholder="用户名" @keydown.enter="login">
      <input type="password" v-model="loginUser.password" placeholder="密码" @keydown.enter="login">
      <button @click="login" @keydown.enter="login">登录</button>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 10px 20px;
  height: fit-content;
  line-height: 10px;
  background-color: rgba(136, 236, 204, 0.4);
  border-radius: 5px;
  display: block;
  /*margin: 10px 0;*/
  box-shadow: 0 0 6px;
  user-select: none;
  width: 100px;
  position: relative;
  left: 50%;
  translate: -50%;
}

button:active {
  box-shadow: 0 0 6px inset;
}

.loginRoot {
  /* 设置基础样式 */
  width: 400px;
  height: fit-content;
  padding: 25px 0;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 10px;
  /* 设置组件位置 */
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
}

.loginRoot h1 {
  text-align: center;
  display: block;
  height: 80px;
  line-height: 80px;
}

.formBox {
  width: min-content;
  margin: auto;
}

input {
  width: 250px;
}

input {
  width: 200px; /* 设置文本框的宽度 */
  height: 30px;
  padding: 0 10px;
  border-radius: 5px; /* 设置圆角 */
  background-color: rgba(188, 227, 233, 0.51);
  border: none; /* 去掉边框 */
  margin: 10px 0;
}

</style>