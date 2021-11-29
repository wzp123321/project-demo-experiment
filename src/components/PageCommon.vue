<template>
    <div class="page-common">
        <div class="page-common__container">
            <div class="page-common__container-title" v-if="compHasTitle">{{ title }}</div>
            <div class="page-common__container-search" v-if="compHasSearch">
                <slot name="search"></slot>
            </div>
            <div class="page-common__container-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
    name: 'PageCommon',
    props: {
        title: {
            type: String,
            default: ''
        },
        hasTitle: {
            type: Boolean,
            default: false
        },
        hasSearch: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const compTitle = computed(() => {
            return props.title;
        });
        const compHasTitle = computed(() => {
            return props.hasTitle;
        });
        const compHasSearch = computed(() => {
            return props.hasSearch;
        })
        return { compTitle, compHasTitle, compHasSearch }
    },
})
</script>
<style lang="less" scoped>
.page-common {
    height: 100%;
    overflow: hidden;
    background-color: #999;
    padding: 16px;
    box-sizing: border-box;
    &__container {
        background-color: #fff;
        height: 100%;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        &-title {
            height: 48px;
            line-height: 48px;
        }
        &-search {
            padding: 16px;
        }
        &-content {
            overflow: hidden;
            flex-grow: 1;
        }
    }
}
</style>
