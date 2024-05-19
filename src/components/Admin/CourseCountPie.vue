<template>
  <v-chart class="chart" :option="option" autoresize/>
</template>

<script setup>
import {use} from 'echarts/core';
import {CanvasRenderer} from 'echarts/renderers';
import {PieChart} from 'echarts/charts';
import {LegendComponent, TitleComponent, TooltipComponent,} from 'echarts/components';
import VChart, {THEME_KEY} from 'vue-echarts';
import {provide, ref} from 'vue';

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

provide(THEME_KEY, 'light');

const option = ref({
  title: {
    text: '课程统计',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['必修', '选修'],
  },
  series: [
    {
      name: '课程统计',
      type: 'pie',
      radius: '55%',
      center: ['50%', '60%'],
      data: [
        {value: 335, name: '必修'},
        {value: 310, name: '选修'},
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
});
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
