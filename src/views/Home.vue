
<template>
  <div class="home">
    <a-button @click="goBack">回退</a-button>
    <grid-layout
      :layout="layout"
      :col-num="3"
      :row-height="240"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :maxRows="3"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        @moved="onItemMoved"
      >{{ item.i }}</grid-item>
    </grid-layout>
  </div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'; // @ is an alias to /src
import { cloneDeep } from 'lodash';
import { LayoutItem } from '../types/index';
import { verifyLayout } from './utils';

export default defineComponent({
  setup() {
    // 初始数据
    const layout = ref<LayoutItem[]>([
      { x: 0, y: 0, w: 1, h: 1, i: 0 },
      { x: 1, y: 0, w: 2, h: 1, i: 1 },
      { x: 0, y: 1, w: 2, h: 1, i: 2 },
      { x: 0, y: 2, w: 3, h: 1, i: 3 },
      { x: 2, y: 1, w: 1, h: 1, i: 4 },
    ]);
    // 历史数据
    const historyDataList = ref<LayoutItem[][]>([]);
    // 已经更新过的数据
    const nowLayoutData = ref<LayoutItem[]>([
      { x: 0, y: 0, w: 1, h: 1, i: 0 },
      { x: 1, y: 0, w: 2, h: 1, i: 1 },
      { x: 0, y: 1, w: 2, h: 1, i: 2 },
      { x: 0, y: 2, w: 3, h: 1, i: 3 },
      { x: 2, y: 1, w: 1, h: 1, i: 4 },
    ]);
    /**
     * 拖拽完成事件
     * 1.将之前的数据存储到history数据中
     * 2.然后再将移动完成的数据存储到nowlayout数据中
     */
    const onItemMoved = () => {
      console.log('moved--------------------')
      historyDataList.value.push(cloneDeep(nowLayoutData.value));
      nowLayoutData.value = cloneDeep(layout.value);
      // const flag = verifyLayout(layout.value);
      // if (flag) {
      //   goBack()
      // }
    };
    const goBack = () => {
      console.log(historyDataList.value[historyDataList.value.length - 1]);
      layout.value = historyDataList.value[historyDataList.value.length - 1];
      nowLayoutData.value = cloneDeep(layout.value);
      historyDataList.value.pop();
    }
    onMounted(() => {
      verifyLayout(layout.value);
    })

    return { layout, onItemMoved, historyDataList, nowLayoutData, goBack }
  }
})
</script>
<style scoped>
.vue-grid-item {
  background-color: aqua;
}
</style>
