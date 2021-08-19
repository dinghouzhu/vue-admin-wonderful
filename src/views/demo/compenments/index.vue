<template>
    <div>
         <el-button type="primary"  @click="reserve">子变化</el-button>{{demodata}}
        <el-button type="primary"  @click="routeChange">路由传值</el-button>
          <echartsdemo :list="listData"  @childFn="parentFn"  ></echartsdemo>
    </div>
</template>

<script>
    import echartsdemo from "../../../components/echarts/index"
    export default {
        name: "index",
        components:{
            echartsdemo
        },
        data(){
            return{
                demodata:0,
                demodata1:0,
                listData:{
                    xdata:["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
                    ydata:[5, 20, 36, 10, 10, 60]
                }
            }
        },
        methods:{
            parentFn(payload) {
                this.demodata = payload;
            },
            routeChange(){
                this.$router.push({
                    path: '/forms/basic-form',
                    query: {
                        ruleForm: JSON.stringify({
                            name: '钉钉',
                            region: '666',
                            date1: '',
                            date2: '',
                            imgurl: '',
                            desc: '非常牛'
                        }),
                    }
                })
            },
            reserve(){
               // this.listData.xdata.reverse()
              //  this.listData.ydata=[100, 20, 36, 10, 10, 100]
                this.listData.ydata.splice(0, 1, this.listData.ydata[0] += 1)
                this.listData.ydata.splice(1, 1, this.listData.ydata[1] += 2)
                this.listData.ydata.splice(2, 1, this.listData.ydata[2] += 3)
                this.listData.ydata.splice(3, 1, this.listData.ydata[3] += 4)
                this.listData.ydata.splice(4, 1, this.listData.ydata[4] += 5)
                this.listData.ydata.splice(5, 1, this.listData.ydata[5] += 6)
                // this.listData.xdata.reverse()
                // this.listData.ydata.reverse()
            }
        },

    }
</script>

<style scoped>

</style>