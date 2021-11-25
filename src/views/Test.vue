<template>
    <a-button @click="onTest">12121</a-button>
    <ComponentA></ComponentA>
    <a-menu style="width: 256px" mode="vertical">
        <a-menu-item key="1">
            <template #icon>
                <MailOutlined />
            </template>
            Navigation One
        </a-menu-item>
        <a-menu-item key="2">
            <template #icon>
                <CalendarOutlined />
            </template>
            Navigation Two
        </a-menu-item>
        <a-sub-menu key="sub1">
            <template #icon>
                <AppstoreOutlined />
            </template>
            <template #title>Navigation Three</template>
            <a-menu-item key="3">Option 3</a-menu-item>
            <a-menu-item key="4">Option 4</a-menu-item>
            <a-sub-menu key="sub1-2" title="Submenu">
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
            </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="sub2">
            <template #icon>
                <SettingOutlined />
            </template>
            <template #title>Navigation Four</template>
            <a-menu-item key="7">Option 7</a-menu-item>
            <a-menu-item key="8">Option 8</a-menu-item>
            <a-menu-item key="9">Option 9</a-menu-item>
            <a-menu-item key="10">Option 10</a-menu-item>
        </a-sub-menu>
    </a-menu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import mitt from 'mitt';

import ComponentA from './components/ComponentA.vue'

const emitter = mitt();
export default defineComponent({
    name: 'Test',
    components:{
        ComponentA
    },
    setup() {
        const router = useRouter();
        const onTest = () => {
            console.log(1111);
            emitter.emit('test', { id: 1, name: '232' })
            router.push({
                path: '/demo',
                query: { id: 1, name: '232' }
            })
        }
        return { onTest }
    }
})
</script>
