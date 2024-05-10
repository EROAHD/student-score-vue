<script setup lang="ts">
import {ref} from "vue";
import {Page} from "../../types";
// 组件传参 获取page对象和回调函数
// 其中回调函数 用于发送传入
let props = defineProps(["page", "callback", "fieldNames"]);
// 从后端传来的Page对象的映射
let page: Page = props.page;
// 向后端发送请求的函数 有PageNum 页号 和PageSize 页数 两个参数
let reqFun = props.callback;
let fieldNames = props.fieldNames;
// 设置初始页大小和页数
let pageSize = ref(2)
let pageNum = ref(1)
// 调用传进来的函数 发送请求
reqFun(pageSize.value, pageNum.value)

function getPreviousPage(currentPage: number) {
  if (currentPage < 1)
    return;
  reqFun(pageSize.value, currentPage - 1)
}

function getNextPage(currentPage: number) {
  if (currentPage >= page.pageSize)
    return;
  reqFun(pageSize.value, currentPage + 1)
}

</script>

<template>
  <div class="pageBoxRoot">
    <!--  设置要显示的属性名称  -->
    <div class="fieldTitle">
      <div v-for="field in fieldNames">
        {{ field }}
      </div>
    </div>
    <!--  获取要显示的属性值  -->
    <div>
      <div v-for="l in page.list" class="fieldValue">
        <div v-for="key in Object.keys(l)" key="key">
          <div>{{ l[key] == false ? "否" : l[key] }}</div>
        </div>
      </div>
    </div>
    <!--  按钮页面导航栏位置  -->
    <div class="buttonBox">
      <button :disabled="page.isFirstPage" @click="getPreviousPage(page.pageNum)">上一页</button>
      <div class="pageNum"
           v-for="pageItem in page.navigatepageNums"
           @click="pageItem != page.pageNum && reqFun(pageSize,pageItem)"
           :class="{active:page.pageNum == pageItem}">
        {{ pageItem }}
      </div>
      <button :disabled="page.isLastPage" @click="getNextPage(page.pageNum)">下一页</button>
    </div>
    <div>
      <select v-model="pageSize" @change="reqFun(pageSize,pageNum)">
        <option>2</option>
        <option>10</option>
        <option>20</option>
        <option>100</option>
      </select>
    </div>
  </div>
</template>

<style scoped>
.pageBoxRoot {
  overflow: auto;
  border-radius: 10px;
  box-shadow: 0 0 5px inset;
  text-align: center;
}

.buttonBox {
  width: fit-content;
  height: 40px;
  margin: auto;
}

.buttonBox button {
  margin-top: 5px;
}

.buttonBox * {
  float: left;
}

.pageNum {
  width: 40px;
  height: 100%;
  line-height: 40px;
  margin: 0 5px;
  text-align: center;
  box-shadow: 0 0 1px inset;
  border-radius: 50%;
  user-select: none;

}

.active {
  box-shadow: 0 0 5px inset;
}

.fieldTitle {
  font-weight: bold;
}

.fieldTitle div {
  display: inline-block;
  min-width: 100px;
  box-shadow: 0 0 1px;
}

.fieldValue {
  display: block;
}

.fieldValue div {
  display: inline-block;
  min-width: 100px;
  box-shadow: 0 0 1px;
}

.buttonBox select {
  width: 100px;
  height: 20px;
  margin: 10px;
}
</style>