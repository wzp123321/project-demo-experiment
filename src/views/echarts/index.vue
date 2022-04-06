<template>
  <div class="echarts-demo"></div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EchartsDemo",
  setup() {
    console.log(123);
  },
});
</script>

<style lang="less" scoped>
.echarts-demo {
  width: 100%;
  height: 100%;
}
</style>
