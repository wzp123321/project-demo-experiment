<template>
    <div>11111111</div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import mitt from 'mitt';
const emitter = mitt();
export default defineComponent({
    name: 'Demo',
    setup() {
        onMounted(() => {
            emitter.on('test', (params: any) => {
                console.log('params--------------------', params);
            })
        })
    },
})
</script>
<style lang="less" scoped>
</style>