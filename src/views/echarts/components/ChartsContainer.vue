<template>
  <div class="charts-container">
    <div class="sign-1"></div>
    <div class="sign-2"></div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ComputedRef } from "vue";

export default defineComponent({});
</script>
<style lang="less" scoped>
.charts-container {
  position: relative;
  width: 100%;
  height: 3rem;
  background-image: url("../../../assets/images/line.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 0.1rem 0.1rem 0.4rem;
  margin-bottom: 0.15rem;
  background-color: rgba(255, 255, 255, 0.03);
  .sign-1,
  .sign-2 {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 0.1rem;
  }

  .sign-2 {
    bottom: 0;
    top: auto;
  }

  .sign-1::before,
  .sign-2::before,
  .sign-1::after,
  .sign-2::after {
    content: "";
    width: 0.1rem;
    height: 0.1rem;
    position: absolute;
  }
  .sign-1::before,
  .sign-2::before {
    top: 0;
    left: 0;
    border-left: 0.02rem solid #02a6b5;
  }

  .sign-1::before {
    border-top: 0.02rem solid #02a6b5;
  }
  .sign-2::before {
    border-bottom: 0.02rem solid #02a6b5;
  }
  .sign-1::after,
  .sign-2::after {
    top: 0;
    right: 0;
    border-right: 0.02rem solid #02a6b5;
  }
  .sign-1::after {
    border-top: 0.02rem solid #02a6b5;
  }
  .sign-2::after {
    border-bottom: 0.02rem solid #02a6b5;
  }
}
</style>
