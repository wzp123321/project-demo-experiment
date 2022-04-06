<template>
  <div class="container">
    <input v-textInputFilter v-model="testValue" style="width:300px"/>
    <el-input v-textInputFilter v-model="elValue" style="width:300px"></el-input>
    <div id="main"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { init, EChartsOption } from "echarts";

export default defineComponent({
  setup() {
    const testValue = ref("");
    const elValue = ref('');
    const symbolStyle: { [key: string]: any } = {
      color: {
        type: "radial",
        x: 0.5,
        y: 0.5,
        r: 0.5,
        colorStops: [
          {
            offset: 0,
            color: "#FFFFFF",
          },
          {
            offset: 0.2,
            color: "#FFFFFF",
          },
          {
            offset: 0.3,
            color: "#FFFFFF",
          },
          {
            offset: 0.4,
            color: "#3681FF",
          },
          {
            offset: 0.5,
            color: "#3681FF",
          },
          {
            offset: 0.6,
            color: "#FFFFFF",
          },
          {
            offset: 0.7,
            color: "#FFFFFF",
          },
          {
            offset: 0.8,
            color: "#FFFFFF",
          },
          {
            offset: 0.9,
            color: "#FFFFFF",
          },
          {
            offset: 1,
            color: "#3681FF",
          },
        ],
      },
    };

    const initEcharts = () => {
      var chartDom = document.getElementById("main");
      if (!chartDom) {
        return;
      }
      var myChart = init(chartDom);
      const option: EChartsOption = {
        tooltip: {
          trigger: "axis",
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              {
                value: 820,
                // symbolSize: 4,
                // emphasis: {
                //   ...symbolStyle,

                // }
                // itemStyle: symbolStyle,
              },
              {
                value: 820,
                // itemStyle: symbolStyle,
              },
              {
                value: 120,
                // itemStyle: symbolStyle,
              },
              {
                value: undefined,
                // itemStyle: symbolStyle,
              },
              {
                value: 320,
                // symbolSize: 3,
                itemStyle: {},
              },
              {
                value: undefined,
                // itemStyle: symbolStyle,
              },
            ],
            type: "line",
            // smooth: true,
            symbolSize: 20,
            showSymbol: false,
            connectNulls: true, //重点内容
            emphasis: {
              scale: false,
              itemStyle: symbolStyle,
            },
          },
        ],
      };

      option && myChart.setOption(option);
    };
    onMounted(() => {
      initEcharts();
    });
    return {
      testValue,
      elValue
    };
  },
});
</script>

<style lang="less" scoped>
.container {
  width: 100%;
  height: 100%;
  #main {
    width: 100%;
    height: 300px;
  }
}
</style>
