<script setup lang="ts">
import useUser from "../hooks/useUser.ts";
import InfoBox from "./InfoBox.vue";
import useInfoBox from "../hooks/useInfoBox.ts";
import request from "../request";
import router from "../router";

let {infoBoxObj, showInfoBox} = useInfoBox()
let {loginUser} = useUser();

async function login() {
  if (!loginUser.username || !loginUser.password) {
    showInfoBox(infoBoxObj, "用户名或密码不能为空");
    return;
  }
  let {data} = await request.post("/login", loginUser)
  console.log(data)
  if (data.code == 200) {
    showInfoBox(infoBoxObj, "登陆成功！")
    localStorage.setItem("token", data.data.token)
    await router.push("/Student")
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
      <input type="text" v-model="loginUser.username" placeholder="用户名">
      <input type="password" v-model="loginUser.password" placeholder="密码">
      <button @click="login">登录</button>
    </div>
  </div>
</template>

<style scoped>
.loginRoot {
  /* 设置基础样式 */
  width: 400px;
  height: 250px;
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

button {
  width: 100px;
  position: relative;
  left: 50%;
  translate: -50%;
}
</style>