<template>
    <div class="main-box">
        <div>
            <el-row class="box-h">
                <el-col :span="4">
                    <span class="line-h iconfont icon-ios-arrow-down">成都</span>
                </el-col>
                <el-col :span="16">
                    <span class="query-box">找影视剧、影院、影人</span>
                </el-col>
                <el-col :span="4">
                    <span class="list line-h iconfont icon-ios-menu"></span>
                </el-col>
            </el-row>
            <div>
                <el-row class="tab-b">
                    <el-button v-bind:class="primary" v-on:click="tabfunc(1)">正在热映</el-button>
                    <el-button v-bind:class="newdefault" v-on:click="tabfunc(2)">即将上映</el-button>
                </el-row>
            </div>
        </div>

        <div class="block">
            <el-carousel height="150px">
                <el-carousel-item trigger="hover" v-for="item in 4" :key="item">
                    <img src="./img/video.png" alt width="100%" height="100%">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="movielist">
            <movielist v-bind:dataType="getType"></movielist>
        </div>
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
            <el-col :span="4">
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
    </div>
</template>

<script>
import movielist from "@/components/movielist";
import { debug } from "util";

export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "首页",
            primary: "btn-c",
            newdefault: "",
            getType: "正在",
            home:true,
            cinema:false,
            orderdetail:false,
            user:false,
        };
    },
    components: {
        movielist: movielist
    },
    mounted() {
        // dom挂载完成后加载
    },
    methods: {
        // 定义函数
        tabfunc(el) {
            if (el == 1) {
                this.primary = "btn-c";
                this.newdefault = "";
                this.getType = "正在";
            } else {
                this.primary = "";
                this.newdefault = "btn-c";
                this.getType = "未来";
            }
        },
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
};
</script>

<style scoped>
.main-box{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.box-h {
  height: 16.67vw;
  padding: 4vw 0;
  line-height: 8.7vw;
  background: rgba(140, 197, 216, 1);
}
.el-col {
  height: 100%;
  display: flex;
}
.line-h {
  font-size: 3.89vw;
  width: 100%;
  padding: 0 5px;
  color: #ffffff;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  /* text-align: center; */
}
.line-h::before {
  float: right;
  font-size: 6vw;
}
.list::before {
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 8vw;
}
.query-box {
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
  color: #ffffff;
  font-size: 4vw;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  border-radius: 16.67vw;
  background: rgba(114, 181, 203, 1);
}
.tab-b {
  width: 100%;
  padding: 5px 10px;
  background: rgba(181, 213, 224, 0.8);
}
.tab-b button {
  width: 50%;
  margin: 0;
  float: left;
  border: none;
}
.el-button {
  background: none;
  color: #000;
}
.btn-c {
  background: #81bbce;
  color: #ffffff;
}
.movielist{
    box-sizing: border-box;
    width: 100%;
    height: 106vw;
    padding-bottom: 60px;
    overflow: hidden;
}
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
