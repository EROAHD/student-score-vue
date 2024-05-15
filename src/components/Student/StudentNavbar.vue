<script setup lang="ts">

</script>

<template>
  <div class="navbarRoot">
    <router-link :to="{name:'studentHome'}" active-class="active">
      <button>🏠主页</button>
    </router-link>
    <router-link :to="{name:'studentScore'}" active-class="active">
      <button>🗒️我的成绩</button>
    </router-link>
    <router-link :to="{name:'studentInfo'}" active-class="active">
      <button>💁个人中心</button>
    </router-link>
  </div>
</template>

<style scoped>
.navbarRoot {
  width: 15%;
  height: 100%;
  box-shadow: 0 0 1px;
  border-radius: 0 0 10px;
  float: left;
}

a {
  text-decoration: none;
}

button {
  width: calc(100% - 10px);
  border-radius: 5px 0 0 5px;
  margin: 10px 0;
  float: right;
}

.active button {
  box-shadow: 0 0 6px inset;
}
</style>