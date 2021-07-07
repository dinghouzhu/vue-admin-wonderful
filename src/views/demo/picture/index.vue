<template>
    <div divstyle="position: relative">
        <ul id = "total">
            <li v-for="(item,index) in tmpdiv" :key="index" :style="item.listyle" :class="[item.liclassName]" @click="liclick(index)">
                <div  :style="item.divstyle" :class="[item.divclassName]"></div>
            </li>
        </ul>
    </div>


</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                chan:true,
                tmpdiv:[],
            }
        },
        methods:{
           pic(rows,cols,w,h) {
               console.log(rows,cols,w,h);
        for(var r = 0 ;r <rows ;r++)
        {
            for(var c = 0 ;c < cols;c++)
            {
                let tmpdiv={};
                tmpdiv.divclassName = "divclass";
                tmpdiv.divstyle={};
                let num = (r*cols+c+1);
                let src = require('./image/'+num+'.jpg');
                tmpdiv.divstyle.backgroundImage = 'url(' + src + ')';
                tmpdiv.divstyle.transform = "scale(0.9)";
                tmpdiv.divstyle.width = w/cols +"px";
                tmpdiv.divstyle.height = h/rows +"px";
                tmpdiv.listyle = {};
                tmpdiv.listyle.width = w/cols +"px";
                tmpdiv.listyle.height = h/rows +"px";
                tmpdiv.liclassName = "liclass";
                tmpdiv.listyle.left = Math.floor(w/cols) *c+'px';
                tmpdiv.listyle.top = Math.floor(h/rows)*r+'px';
                tmpdiv.listyle["transform"] = 'scale(0.9) rotate(' +(Math.random()*40-20)+'deg)'
                    +
                    'translateX(' +(40*c-80)+'px)'+
                    'translateY(' +(40*r-80)+'px)';
                this.tmpdiv.push(tmpdiv)
                //0 1 2 3 4
                //这个transform的意思就是呢
                //其中rotate是旋转随机的角度，这里的数字是可以随便自己给的，可以给30,40
                //那么为什么要减掉一个数呢，因为这样能够让图片旋转的更好看一点，因为减一个数就可能会出现负数，旋转角度变化比较大，并且方向不同
                //translate X元素在水平方向移动的距离
                //负值向左运动，正值向右运动
                //Y在垂直方向的距离
                //负值向左，正值向右
            }
        }
        console.log(this.tmpdiv);
    },


            liclick(i) {
                let w = 700;
                let h = 600;
                let rows = 5;
                let cols = 5;
                console.log(i);
                if (this.chan === true) {
                    let Img = this.tmpdiv[i].divstyle["backgroundImage"];
                    //通过children来获取到子节点
                    let Left = 0;
                    let Top = 0;
                    for (let j = 0; j < this.tmpdiv.length; j++) {
                        this.tmpdiv[j].divstyle["transform"] = 'rotate(0deg)' +
                            'translateX(0)' +
                            'translateY(0)'
                        this.tmpdiv[j].divstyle["backgroundImage"] = Img;
                        this.tmpdiv[j].divstyle["background-size"] = w + "px " + h + "px";
                        this.tmpdiv[j].divstyle["backgroundPosition"] = (-Left) + "px " + (-Top) + "px";
                        this.tmpdiv[j].divstyle["transform"] = "scale(1)";
                        Left += Math.floor(w / cols);
                        if (Left >= w) {
                            Top += Math.floor(h / rows);
                            Left = 0;
                        }
                    }
                    this.chan = false;
                } else if (this.chan === false) {
                    for (let j = 0; j < this.tmpdiv.length; j++) {
                        let r = Math.floor(j / rows);
                        let c = j - r * cols;
                        this.tmpdiv[j].divstyle["background-size"] = "100% 100%";
                        let num = (r * cols + c + 1);
                        let src = require('./image/'+num+'.jpg');
                        this.tmpdiv[j].divstyle["backgroundImage"]  = 'url(' + src + ')';
                        this.tmpdiv[j].divstyle["transform"] = 'scale(0.9) rotate(' + (Math.random() * 40 - 20) + 'deg)' +
                            'translateX(' + (40 * c - 80) + 'px)' +
                            'translateY(' + (40 * r - 80) + 'px)'
                    }
                    this.chan = true
                }
            }

        },
        mounted(){
           this.pic(5,5,700,600)
        },
    }
</script>

<style scoped>
     #total{
        list-style: none;
        margin: auto;
        position: absolute;
        left: 25%;
         width: 90%;
         height: 100%;
        /* border: 1px solid red; */
    }

    .liclass{
       list-style: none;
        position: absolute;
        transition: transform 1500ms ease-out;
    }

   .divclass{
        background-size: 100% 100%;
        border: 1px solid black;
        transition: transform 1500ms ease-out;
    }
</style>