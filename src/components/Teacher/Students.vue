<script setup lang="ts">
import request from "../../request";
import usePage from "../../hooks/usePage.ts";
import {onMounted} from "vue";

let page = usePage().page;


async function getStudents(pageNum: number) {
  let {data} = await request.get(`/student/${page.pageSize}/${pageNum}`);
  if (data.code === 200) {
    Object.assign(page, data.data)
  }
}

function getStudentInfo(scope) {
  console.log(scope.cid)
}

onMounted(() => {
  getStudents(1)
})
</script>

<template>
  <el-scrollbar style="height: calc(100% - 20px);">

    <el-row style="background: white">

      <el-table :data="page.list" :default-sort="{ prop: 'sno', order: 'ascending' }"
                style="height: min-content;"
      >
        <el-table-column prop="sno" label="学号" fixed sortable/>
        <el-table-column prop="name" label="姓名" sortable/>
        <el-table-column prop="email" label="邮箱" width="250" sortable/>
        <el-table-column prop="mid" label="专业编号" sortable/>
        <el-table-column prop="major_name" label="专业" sortable/>
        <el-table-column prop="cid" label="专业号" sortable/>
        <el-table-column prop="class_name" label="专业" sortable/>
        <el-table-column fixed="right" width="200" label="操作">
          <template v-slot="scope">
            <el-button type="primary" @click="getStudentInfo(scope.row)" round>详情</el-button>
            <el-button type="danger" round>重置密码</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="example-pagination-block" style="margin: auto">
        <el-pagination layout="sizes,prev,pager, next"
                       :total="Number(page.pages * page.pageSize)"
                       @current-change="getStudents"
                       style="justify-content: center;"
        />
      </div>
    </el-row>
  </el-scrollbar>

</template>

<style scoped>

</style>