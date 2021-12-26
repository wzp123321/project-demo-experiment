<template>
    <a-layout class="components-layout-demo-responsive">
        <a-layout-sider breakpoint="lg" collapsed-width="0">
            <div class="logo" />
            <a-menu theme="dark" mode="inline" :default-selected-keys="['4']">
                <a-menu-item key="1">
                    <a-icon type="user" />
                    <router-link to="/web/test?tenantCode=njts">test</router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <a-icon type="video-camera" />
                    <router-link to="/web/demo?tenantCode=njts">demo</router-link>
                </a-menu-item>
                <a-menu-item key="3">
                    <a-icon type="upload" />
                    <router-link to="/web/line?tenantCode=njts">line</router-link>
                </a-menu-item>
                <a-menu-item key="4">
                    <a-icon type="user" />
                    <router-link to="/web/bar?tenantCode=njts">bar</router-link>
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
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        console.log(121);
    },
})
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