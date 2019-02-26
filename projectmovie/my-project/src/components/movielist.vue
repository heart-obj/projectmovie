<template>
    <div class="list-box">
        <div>
            <el-row v-for='(val,i) in datalist' v-bind:key="i">
                <el-col class="list-t">
                    <span>{{val.title}}</span>
                    <span class="iconfont icon-ios-arrow-forward"></span>
                </el-col>
                <el-col class="moive-r">
                    <div class=""></div>
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
            url:'static/moviedata.json',
        })
        .then((response)=>{
            console.log(response)
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
.moive-r{
    width: 100%;
    height: 50.2vw;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    border-radius: 5px;
    padding: 20px;
}
</style>
