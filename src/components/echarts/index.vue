<template>
    <div>
        <div id="echart" ref="echart"></div>
        <el-button type="primary"  @click="change">父变化</el-button>
    </div>

</template>

<script>
    export default {
        name: "index",
        props:{
            list:{
                type:Object,
                xdata:[],
                ydata:[]
            }
        },
        data(){
        return{
           inputdata:20,
           listData:{
             xdata:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
             ydata:[5, 20, 36, 10, 10, 20]
           },
     }
        },
        mounted(){
            this.$nextTick(() => {
                setTimeout(() => {
                    this.drawLine()
                }, 1000);
            });
            this.$emit('childFn', this.inputdata);
        },
        methods:{
            change(){
                this.inputdata +=1
                this.$emit('childFn', this.inputdata);
           },
            drawLine(){
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(this.$refs.echart);
                let _this=this;
                // 绘制图表
                myChart.setOption({
                    title: { text: 'echarts图例' },
                    tooltip: {},
                    xAxis: {
                        data: _this.list.xdata
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: _this.list.ydata
                    }]
                });
            }
        },
        watch:{
            list:{
                handler(newValue) {
                    if (newValue){
                        this.drawLine()
                    }
                },
               // immediate: true,
                deep: true,
            },
        }
    }
</script>

<style scoped>
#echart{
    width: 600px;
    height: 400px;
}
</style>