<script setup lang="ts">
let {infoBox} = defineProps(["infoBox"])
if (infoBox.show == true) {
  setTimeout(() => {
    infoBox.show = false;
  }, infoBox.time);
}
</script>

<template>
  <div v-show="infoBox.show" class="infoBoxRoot">
    <div class="infoBoxTitle">
      <div class="title">信息</div>
      <div class="close" @click="infoBox.show=false">关闭</div>
    </div>
    <div class="info">
      {{ infoBox.msg }}
    </div>
  </div>
</template>

<style scoped>
/* 输入提示信息浮动通知 */
.infoBoxRoot {
  width: 300px;
  height: 60px;
  border-radius: 5px;
  position: fixed;
  left: 50%;
  top: 10%;
  translate: -50% 0;
  background-color: rgba(255, 255, 255, 0.825);
  border: 1px solid;
  z-index: 100;
}

/* 设置提示信息浮动通知的标题 */
.infoBoxTitle {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background-color: rgba(255, 0, 0, 0.659);
  line-height: 30px;
}

.title {
  width: 40px;
  height: 30px;
  display: inline-block;
  margin-left: 130px;
}


.close {
  width: 40px;
  height: 30px;
  text-align: center;
  float: right;
  border-radius: 5px;
  box-shadow: 0 0 1px inset;
  font-size: 13px;
  cursor: pointer;
}

.close:active {
  box-shadow: 0 0 10px inset;
}

.info {
  width: 100%;
  height: 30px;
  text-align: center;

}
</style>