<template>
    <div>{{ params }}</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute, useRouter, LocationQuery } from 'vue-router';
import mitt from 'mitt';
const emitter = mitt();
export default defineComponent({
    name: 'Demo',
    setup() {
        const route = useRoute();
        const router = useRouter();
        const params = ref<LocationQuery>()
        onMounted(() => {
            console.log(route.query);
            params.value = route.query;
            console.log('params--------------', params);
            router.push({
                query: {
                    tenantCode: '121'
                }
            })
        })
        emitter.on('test', (params: any) => {
            console.log('params--------------------', params);
        })
        return { params }
    },
})
</script>
<style lang="less" scoped>
</style>