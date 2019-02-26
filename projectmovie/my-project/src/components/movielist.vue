<template>
    <div class="list-box">
        <div>
            <el-row v-for='(val,i) in datalist' v-bind:key="i">
                <!-- <el-col class="list-t">
                    <span>{{val.title}}</span>
                    <span class="iconfont icon-ios-arrow-forward"></span>
                </el-col> -->
                <el-col class="movie-r">
                    <div class="movie-l">
                        <div class="movie-img">
                            <img src="https://p0.meituan.net/128.180/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg" alt="">
                        </div>
                        <div class="movie-t">
                            <div class="movie-introduce">
                                <h3>决战食神</h3>
                                <div class="movie-rate">
                                    <el-rate
                                        v-bind:value=3.5
                                        disabled
                                        show-score
                                        text-color="#ff9900"
                                        score-template="">
                                    </el-rate>
                                </div>
                                <div class="text-d">今天199家影院放映3380场</div>
                                <div class="text-d">主演：罗莎·萨拉查,克里斯托弗·沃尔兹,基恩·约翰逊</div>
                            </div>
                            <div class="">

                            </div>
                        </div>
                        
                    </div>
                    <div></div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
export default {
    name:"movielist",
    data(){
        return {
            modelname:"电影列表",
            datalist:"",
        }
    },
    props:["dataType"],
    created(){
        let _this=this;
        this.$http({
            method: 'get',
            url:'/api2/ajax/movieOnInfoList?token=',
        })
        .then((response)=>{
            console.log(response.data.movieList)
            _this.datalist=response.data;
        })
        .catch((error)=>{
            console.log(error)
        });
    },
    mounted(){
        
    } 
}
</script>
<style scoped>
.list-box{
    padding:0 10px
}
.list-t{
    height: 16.67vw;
}
.list-t span{
    font-size: 4.45vw;
    float: left;
    line-height: 16.67vw;
}
.list-t span:nth-child(2){
    float:right;
}
.movie-r{
    width: 100%;
    height: 50.2vw;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding: 10px;
}
.movie-l{
    width: 100%;
    height: 100%;
}
.movie-img{
    width: 28vw;
    height: 100%;
    float: left;
}
.movie-img img{
    width: 100%;
    height: 100%;
}
.movie-t{
    width: calc(100% - 28vw);
    height: 100%;
    float: left;
    padding-left: 10px;
    box-sizing: border-box;
}
.movie-introduce{
    max-width:100%;
    height: 100%;
}
.movie-introduce h3{
    font-size: 4.45vw;
    text-align: left;
}
.movie-rate{
    text-align: left;
}
.movie-introduce .text-d{
    width: 100%;
    height: 7vw;
    overflow: hidden;
    text-align: left;
    font-size: 3.34vw;
    line-height: 3.34vw;
    margin-top: 10px;
}
</style>
