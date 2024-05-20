<template>
  <v-chart class="chart" :option="option" autoresize/>
</template>

<script setup>
import {use} from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import {PieChart} from 'echarts/charts';
import {LegendComponent, TitleComponent, TooltipComponent} from 'echarts/components';
import VChart, {THEME_KEY} from 'vue-echarts';
import {computed, defineProps, provide} from 'vue';

const props = defineProps(["userCountList"]);

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'light');

const option = computed(() => ({
  title: {
    text: '用户统计',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['学生', '教师', '管理员'],
  },
  series: [
    {
      name: '用户统计',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        {value: props.userCountList[0], name: '管理员'},
        {value: props.userCountList[1], name: '教师'},
        {value: props.userCountList[2], name: '学生'},
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}));
</script>

<style lang="css" scoped>
.chart {
  background: white;
  border-radius: 10px;
  width: 50%;
  height: 250px;
  margin: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease; /* 添加过渡动画 */
}

.chart:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); /* 添加阴影效果 */
  transform: translateY(-1px); /* 添加轻微上移效果 */
}
</style>
