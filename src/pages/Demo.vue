<template>
    <div class="wrapper">
        <PageCommon title="测试二十" :has-search="true" :has-title="true">
            <template v-slot:search>
                <h1>121212</h1>
            </template>
            <template v-slot:content>
                <div class="test">
                    <p>1212</p>
                    <p>1212</p>
                    <p>1212</p>
                    <p>1212</p>
                    <p>1212</p>
                </div>
            </template>
        </PageCommon>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageCommon from '@/components/PageCommon.vue';

export default defineComponent({
    name: 'Demo',
    components: {
        PageCommon
    }
})
</script>
<style lang="less" scoped>
.wrapper {
    width: 100%;
    height: 100%;
    .test {
        height: 100%;
        overflow-y: auto;
        background-color: greenyellow;
    }
}
</style>