<template>
  <div :id="compId" class="bar-charts"></div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted, ref } from "vue";
import { init, EChartsOption } from "echarts";
import "echarts-gl";
const ROOT_PATH =
  "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples";
var CHUNK_COUNT = 230;

export default defineComponent({
  name: "GisCharts",
  setup() {
    const compId = computed(() => {
      return `echarts_${Math.random() * 1000}`;
    });
    const myChart = ref();
    // https://blog.openstreetmap.org/2012/04/01/bulk-gps-point-data/
    const fetchData = (idx: number) => {
      if (idx >= CHUNK_COUNT) {
        return;
      }
      var dataURL = ROOT_PATH + "/data/asset/data/gps/gps_" + idx + ".bin";
      var xhr = new XMLHttpRequest();
      xhr.open("GET", dataURL, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = function (e) {
        var rawData = new Int32Array(this.response);
        var data = new Float32Array(rawData.length);
        var addedDataCount = rawData.length / 2;
        for (var i = 0; i < rawData.length; i += 2) {
          data[i] = rawData[i + 1] / 1e7;
          data[i + 1] = rawData[i] / 1e7;
        }
        myChart.value.appendData({
          seriesIndex: 0,
          data: data,
        });
        fetchData(idx + 1);
      };
      xhr.send();
    };
    const initCharts = () => {
      var chartDom = document.getElementById(compId.value) as HTMLElement;
      myChart.value = init(chartDom);
      var dataCount = 0;

      const option = {
        backgroundColor: "#000",
        title: {
          text: "10000000 GPS Points",
          left: "center",
          textStyle: {
            color: "#fff",
          },
        },
        geo: {
          map: "world",
          roam: true,
          label: {
            emphasis: {
              show: false,
            },
          },
          silent: true,
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111",
            },
            emphasis: {
              areaColor: "#2a333d",
            },
          },
        },
        series: [
          {
            name: "弱",
            type: "scatterGL",
            progressive: 1e6,
            coordinateSystem: "geo",
            symbolSize: 1,
            zoomScale: 0.002,
            blendMode: "lighter",
            large: true,
            itemStyle: {
              color: "rgb(20, 15, 2)",
            },
            postEffect: {
              enable: true,
            },
            silent: true,
            dimensions: ["lng", "lat"],
            data: new Float32Array(),
          },
        ],
      };
      fetchData(0);

      option && myChart.value.setOption(option);
    };

    onMounted(() => {
      initCharts();
    });
    return { compId };
  },
});
</script>

<style lang="less" scoped>
.bar-charts {
  width: 100%;
  height: 400px;
}
</style>
