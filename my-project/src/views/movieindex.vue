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
        <div class="bottom-btn">

        </div>
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
    height: 100vw;
    padding-bottom: 60px;
    overflow: hidden;
}
.bottom-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: red;
}
</style>
