<template>
    <el-row class="bottom-btn">
            <el-col :span="5">
                <div class="tab-c" v-on:click="tabClick('home')">
                    <div class="tab_icon home"></div>
                    <span :class="home?'tab_click':'tab_text'">首页</span>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="tab-c" v-on:click="tabClick('cinema')">
                    <div class="tab_icon cinema"></div>
                    <span :class="cinema?'tab_click':'tab_text'">影院</span>
                </div>
            </el-col>
            <el-col :span="4" style="height:100%">
                <div class="movie-c">
                    <div class="tab_icon movie_icon"></div>
                    <span class="tab_text movie_text">电影</span>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="tab-c" v-on:click="tabClick('orderdetail')">
                    <div class="tab_icon orderdetail"></div>
                    <span :class="orderdetail?'tab_click':'tab_text'">订单</span>
                </div>
            </el-col>
            <el-col :span="5">
                <div class="tab-c" v-on:click="tabClick('user')">
                    <div class="tab_icon user"></div>
                    <span :class="user?'tab_click':'tab_text'">个人中心</span>
                </div>
            </el-col>
        </el-row>
</template>
<script>
export default {
    name:"footer",
    data() {
        return {
            home:true,
            cinema:false,
            orderdetail:false,
            user:false,
        };
    },
    components: {

    },
    mounted() {
        // dom挂载完成后加载
    },
    methods: {
        // 定义函数
        tabClick(el){
            console.log(el)
            switch(el){
                case 'home':
                    this.home=true;
                    this.cinema=false;
                    this.orderdetail=false;
                    this.user=false;
                    break;
                case 'cinema':
                    this.home=false;
                    this.cinema=true;
                    this.orderdetail=false;
                    this.user=false;
                    break;
                case 'orderdetail':
                    this.home=false;
                    this.cinema=false;
                    this.orderdetail=true;
                    this.user=false;
                    break;
                case 'user':
                    this.home=false;
                    this.cinema=false;
                    this.orderdetail=false;
                    this.user=true;
                    break;
            }
        }
    }
}
</script>
<style>
.bottom-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding-bottom: 8px;
    padding-top: 8px;
    box-sizing: content-box;
    background: #79b0c3;
}
.tab-c{
    width: 100%;
    height: 100%;
    position: relative;
}
.movie-c{
    width: 100%;
    height: 100%;
    position: relative;
}
/* .tab-c:active{
    background: rgba(255, 255, 255, 0.1);
} */
.tab_icon{
    width: 40px;
    height: 40px;
    background: red;
    display: inline-block;
    text-align: center;
}
.tab_text{
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 3.45vw;
    color: #333;
}
.tab_click {
    display: inline-block;
    width: 100%;
    text-align: center;
    font-size: 3.45vw;
    font-weight: bold;
    color: #ffffff;
}
.movie_icon{
    width: 60px;
    height: 60px;
    border-radius: 60px;
    background: #ffffff url(./img/movie_icon.png)no-repeat center;
    background-size:80% 80%; 
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.movie_text{
    position: absolute;
    bottom: 0;
    left: 0;
}
.home{
    background:url(./img/home_icon.png)no-repeat center;
    background-size:75%;
}
.cinema{
    background:url(./img/home_icon.png)no-repeat center;
    background-size:75%;
}
.orderdetail{
    background:url(./img/home_icon.png)no-repeat center;
    background-size:75%;
}
.user{
    background:url(./img/user_icon.png)no-repeat center;
    background-size:70% 70%;
}
</style>
