<template>
    <div :id="compId" class="bar-charts"></div>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { init, EChartsOption } from 'echarts';

export default defineComponent({
    name: 'BarCharts',
    setup() {
        const compId = computed(() => {
            return `echarts_${Math.random() * 1000}`
        })
        const initCharts = () => {
            var chartDom = document.getElementById(compId.value) as HTMLElement;
            var myChart = init(chartDom);
            const option: EChartsOption = {
                title: {
                    text: 'Temperature Change in the Coming Week'
                },
                tooltip: {
                    trigger: 'axis'
                },
                legend: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: { readOnly: false },
                        magicType: { type: ['line', 'bar'] },
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C'
                    }
                },
                series: [
                    {
                        name: 'Lowest',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        symbol: 'circle',
                        markPoint: {
                            data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
                        },
                        markLine: {
                            data: [
                                { type: 'average', name: 'Avg' },
                                [
                                    {
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    },
                                    {
                                        symbol: 'circle',
                                        label: {
                                            position: 'start',
                                            formatter: 'Max'
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    }
                                ]
                            ]
                        }
                    }
                ]
            };

            option && myChart.setOption(option);
        }

        onMounted(() => {
            initCharts();
        })
        return { compId }
    },
})
</script>

<style lang="less" scoped>
.bar-charts {
    width: 100%;
    height: 400px;
}
</style>