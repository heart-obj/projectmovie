<template>
    <div class="main-box">
        <div class="main-h">
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
			
			<div class="block" v-if="show">
			    <el-carousel height="150px">
			        <el-carousel-item trigger="hover" v-for="item in 4" :key="item">
			            <img src="./img/video.png" alt width="100%" height="100%">
			        </el-carousel-item>
			    </el-carousel>
			</div>
		</div>
        <div class="movielist" v-if="dataArr">
            <movielist v-bind:dataType="getType" v-bind:show="show" v-bind:dataArr="dataArr"></movielist>
        </div>
        <comfooter></comfooter>
    </div>
</template>

<script>
import movielist from "@/components/movielist";
import comfooter from "@/components/comfooter";
import { debug } from "util";
import { constants } from 'fs';

export default {
    name: "HelloWorld",
    data() {
        return {
            msg: "首页",
            primary: "btn-c",
            newdefault: "",
            getType: "正在",
			show:true,
            home:true,
            cinema:false,
            orderdetail:false,
            user:false,
            dataArr:"",
           
            movielistdata:"",
            movieindexdata:""
        };
    },
    components: {
        movielist: movielist,
        comfooter: comfooter,
    },
    created(){
        
       if(this.show){
            this.movielist()
        }else{
            this.expectMovie()
        }
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
                this.show=true;
                this.dataArr=this.movieindexdata
            } else {
                this.primary = "";
                this.newdefault = "btn-c";
                this.getType = "未来";
                this.show=false;
                if(!this.movielistdata){
                    this.expectMovie()
                }else{
                    this.dataArr=this.movielistdata
                }
                
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
        },
        movielist(){
            let _this = this;
            this.$http({
                    method: 'get',
                    url: '/api2/ajax/movieOnInfoList?token=',
                })
                .then((response) => {
                    var res = response.data.movieList;
                    for (var i = 0; i < res.length; i++) {
                        var img= res[i].img.split("http://p0.meituan.net/w.h/movie/")[1];
                        if(!img){
                            img=res[i].img.split("http://p1.meituan.net/w.h/movie/")[1]
                        }
                        res[i].img = "https://p0.meituan.net/128.180/movie/" +img;
                        res[i].sc2 = res[i].sc / 2;
                    }
                    this.dataArr=res;
                    _this.movieindexdata = res;
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        expectMovie(){
            let _this=this;
            _this.$http({
                method:'get',
                url:'/api2/ajax/comingList?ci=59&token=&limit=10'
            })
            .then((response)=>{
                var res = response.data.coming;
                for (var i = 0; i < res.length; i++) {
                    var img= res[i].img.split("http://p0.meituan.net/w.h/movie/")[1];
                    if(!img){
                        img=res[i].img.split("http://p1.meituan.net/w.h/movie/")[1]
                    }
                    res[i].img = "https://p0.meituan.net/128.180/movie/" +img;
                    res[i].sc2 = res[i].sc / 2;
                };
                this.dataArr=res;
                _this.movielistdata = res;
            })
            .catch((error)=>{
                console.log(error)
            })
        },
        mostrequest(){
            let _this=this;
            _this.$http({
                methods:"get",
                url:"/api2/ajax/mostExpected?ci=59&limit=10&offset=0&token="
            })
            .then((response)=>{
                var res = response.data.coming;
                const dataArr=[];
                for (var i = 0; i < res.length; i++) {
                    var img= res[i].img.split("http://p0.meituan.net/w.h/movie/")[1];
                    if(!img){
                        img=res[i].img.split("http://p1.meituan.net/w.h/movie/")[1]
                    }
                    res[i].img = "https://p0.meituan.net/128.180/movie/" +img;
                    res[i].sc2 = res[i].sc / 2;
                    dataArr.push({
                        title: '',
                        style:{
                            background:res[i].img
                        } 
                    })
                };
            })
            .catch((error)=>{

            })
        }
    }
};
</script>

<style scoped>
.main-box{
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-bottom: 76px;
    overflow: hidden;
	display: flex;
	flex-direction: column;
}
.main-h{
	width: 100%;
	clear: both;
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
    overflow: hidden;
}


</style>
