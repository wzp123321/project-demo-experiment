<template>
  <div class="echarts-demo">
    <!-- 头部 -->
    <div class="echarts-demo__header">
      <h2>菜鸟可视化</h2>
      <p>{{ realTime }}</p>
    </div>
    <!-- 内容区域 -->
    <div class="echarts-demo__container">
      <!-- 左 -->
      <div class="left-module">
        <EchartContainer>1233</EchartContainer>
        <EchartContainer>1233</EchartContainer>
        <EchartContainer>1233</EchartContainer>
      </div>
      <!-- 中 -->
      <div class="middle-module"></div>
      <!-- 右 -->
      <div class="right-module">
        <EchartContainer>1233</EchartContainer>
        <EchartContainer>1233</EchartContainer>
        <EchartContainer>1233</EchartContainer>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onUnmounted, onMounted, ref } from "vue";
import dayjs from "dayjs";

import EchartContainer from "./components/ChartsContainer.vue";

export default defineComponent({
  name: "EchartsDemo",
  components: {
    EchartContainer,
  },
  setup() {
    const realTime = ref("");
    let timer: any;

    // 初始化
    onMounted(() => {
      timer = setInterval(() => {
        realTime.value = dayjs(new Date()).format("YYYY-MM-DD-hh时mm分ss秒");
      }, 1 * 1000);
    });
    // 销毁
    onUnmounted(() => {
      clearInterval(timer);
    });

    return {
      realTime,
    };
  },
});
</script>

<style lang="less" scoped>
.echarts-demo {
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/bg.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  &__header {
    position: relative;
    width: 100%;
    height: 1rem;
    text-align: center;
    line-height: 0.8rem;
    background-image: url("../../assets/images/head_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    h2 {
      color: #fff;
      font-size: 0.32rem;
      font-weight: 600;
    }
    p {
      font-size: 0.16rem;
      color: #fff;
      position: absolute;
      top: 40%;
      right: 0.16rem;
      transform: translateY(-50%);
    }
  }

  &__container {
    flex: 1 1 auto;
    overflow: hidden;
    min-width: 1366px;
    padding: 0.1rem 0.1rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .left-module::-webkit-scrollbar,
    .right-module::-webkit-scrollbar,
    .middle-module::-webkit-scrollbar {
      width: 0;
    }
    .left-module,
    .right-module {
      flex: 3;
      height: 100%;
      overflow-y: auto;
    }
    .middle-module {
      flex: 5;
      height: 100%;
      overflow-y: auto;
    }
  }
}
</style>
