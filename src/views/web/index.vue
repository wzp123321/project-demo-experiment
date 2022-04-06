<template>
  <a-layout class="components-layout-demo-responsive">
    <a-layout-sider breakpoint="lg" collapsed-width="0">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span @click="onPageTo('test')"></span>
          <!-- <router-link to="/web/test?tenantCode=njts">test</router-link> -->
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="video-camera" />
          <span @click="onPageTo('demo')"></span>
          <!-- <router-link to="/web/demo?tenantCode=njts">demo</router-link> -->
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="upload" />
          <span @click="onPageTo('line')"></span>
          <!-- <router-link to="/web/line?tenantCode=njts">line</router-link> -->
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="user" />
          <span @click="onPageTo('bar')"></span>
          <!-- <router-link to="/web/bar?tenantCode=njts">bar</router-link> -->
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="user" />
          <span @click="onPageTo('gis')"></span>
          <!-- <router-link to="/web/gis?tenantCode=njts">gis</router-link> -->
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <iframe name="testIframe"></iframe>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const router = useRouter();
    const value = ref<string>("");
    const onPageTo = (value: string) => {
      router.push({
        path: `/web/${value}`,
        query: {
          tenantCode: "njts",
        },
      });
    };
    return {
      value,
      onPageTo,
    };
  },
});
</script>
<style lang="less" scoped>
.components-layout-demo-responsive {
  height: 100%;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
