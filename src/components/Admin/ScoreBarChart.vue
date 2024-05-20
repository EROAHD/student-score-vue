<template>
  <div>
    <v-chart class="chart" :option="barChartOptions"></v-chart>
  </div>
</template>

<script setup>
import {computed, defineProps} from 'vue';
import {use} from 'echarts/core';
import VChart from 'vue-echarts';
import {CanvasRenderer} from 'echarts/renderers';
import {BarChart} from 'echarts/charts';
import {GridComponent, LegendComponent, TitleComponent, TooltipComponent} from 'echarts/components';


use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
]);

const props = defineProps(["scoreCountList"]);


const barChartOptions = computed(() => ({
  title: {
    text: '学生成绩区间统计',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['成绩'],
  },
  xAxis: {
    type: 'category',
    data: ['0 - 59\n不及格', '60 - 69\n及格', '70 - 89\n良好', '90 - 100\n优秀'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '成绩',
      type: 'bar',
      data: [
        {value: props.scoreCountList[0], itemStyle: {color: 'red'}},
        {value: props.scoreCountList[1], itemStyle: {color: '#4caf50'}},
        {value: props.scoreCountList[2], itemStyle: {color: '#4caf50'}},
        {value: props.scoreCountList[3], itemStyle: {color: '#4caf50'}},
      ],
    },
  ],
}));
</script>

<style scoped>
.chart {
  background: white;
  border-radius: 10px;
  width: 50%;
  height: 350px;
  margin: 10px;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.chart:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}
</style>
