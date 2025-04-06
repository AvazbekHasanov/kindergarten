<template>
  <div class="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    <!-- Enrollments Over Time -->
    <el-card class="rounded-xl">
      <h3 class="text-lg font-semibold mb-2">Yangi Ro'yxatlar</h3>
      <v-chart :option="enrollmentChart" style="height: 300px;" />
    </el-card>

    <!-- Age Group Distribution -->
    <el-card class="rounded-xl">
      <h3 class="text-lg font-semibold mb-2">Yosh toifasi</h3>
      <v-chart :option="ageGroupChart" style="height: 300px;" />
    </el-card>

    <!-- Staff Count by Role -->
    <el-card class="rounded-xl">
      <h3 class="text-lg font-semibold mb-2">Xodimlar soni</h3>
      <v-chart :option="staffChart" style="height: 300px;" />
    </el-card>

    <!-- Monthly Fees -->
    <el-card class="rounded-xl col-span-1 md:col-span-2">
      <h3 class="text-lg font-semibold mb-2">Oylik To'lovlar</h3>
      <v-chart :option="feeChart" style="height: 300px;" />
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { use } from 'echarts/core'
import VChart from 'vue-echarts'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  LineChart,
  PieChart,
  BarChart
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
} from 'echarts/components'

use([
  CanvasRenderer,
  LineChart,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent
])

const enrollmentChart = ref({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: ['Yanvar', 'Fevral', 'Mart', 'Aprel'] },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Ro\'yxatlar',
      type: 'line',
      data: [25, 40, 30, 50]
    }
  ]
})

const ageGroupChart = ref({
  tooltip: { trigger: 'item' },
  legend: { bottom: 0 },
  series: [
    {
      name: 'Yosh',
      type: 'pie',
      radius: '60%',
      data: [
        { value: 10, name: '1-2 yosh' },
        { value: 20, name: '3-4 yosh' },
        { value: 15, name: '5-6 yosh' }
      ]
    }
  ]
})

const staffChart = ref({
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['O\'qituvchi', 'Yordamchi', 'Oshpaz']
  },
  yAxis: { type: 'value' },
  series: [
    {
      type: 'bar',
      data: [8, 4, 2],
      itemStyle: {
        color: '#409EFF'
      }
    }
  ]
})

const feeChart = ref({
  tooltip: { trigger: 'axis' },
  xAxis: {
    type: 'category',
    data: ['Yanvar', 'Fevral', 'Mart', 'Aprel']
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'To\'lovlar (so\'m)',
      type: 'bar',
      data: [12000000, 15000000, 10000000, 17000000],
      itemStyle: {
        color: '#67C23A'
      }
    }
  ]
})
</script>
