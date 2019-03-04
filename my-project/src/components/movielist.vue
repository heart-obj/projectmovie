<template>
	<div class="list-box">
		<div>
			<el-row v-if="!show">
				<el-row>近期最受期待</el-row>
				<el-row class="pages-b">
					
				</el-row>
			</el-row>
			<el-row v-for='(val,i) in datalist' v-bind:key="i" class="movie-b">
				
				<el-col class="movie-r" v-bind:movie_id=val.id>
					<div class="movie-l">
						<div class="movie-img">
							<img v-bind:src=val.img alt="">
						</div>
						<div class="movie-t">
							<div class="movie-introduce">
								<h3>{{val.nm}}</h3>
								<div class="movie-rate">
									<el-rate v-bind:value=val.sc2 disabled show-score text-color="#ff9900">
									</el-rate>
								</div>
								<div class="text-d">{{val.showInfo}}</div>
								<div class="text-d">主演：{{val.star}}</div>
								<div class="text-d">上映日期：{{val.rt}}</div>
							</div>
						</div>
						<div class="ticket-box">
							<button type="button" class="el-button el-button--primary ticket-btn" v-if="show"><span>购 票</span></button>
							<button type="button" class="el-button el-button--primary ticket-btn" v-if="!show"><span>预 购</span></button>
						</div>
					</div>
					<div></div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
	import slider from 'vue-concise-slider';
	export default {
		name: "movielist",
		data() {
			return {
				modelname: "电影列表",
				datalist: "",
				
			}
		},
		props: ["dataType", "show","dataArr"],
		components:{
			slider
		},
		
		created() {
			this.datalist=this.dataArr;

		},
		mounted() {
			console.log(this.show)
			 
		},
		updated(){

		},
		methods: {
			
		},
		watch:{
			dataArr:{
				immediate:true,
				handler(val){
					console.log(val)
					this.datalist=val
				}
			},
			
		}
		
		
		
	}
</script>
<style scoped>
	.list-box {
		box-sizing: border-box;
		padding: 0 10px;
		width: 100%;
		height: 100%;
		overflow: auto;
	}
	.pages-b{
		width: 100%;
		height: 60px;
	}
	.list-t {
		height: 16.67vw;
	}

	.list-t span {
		font-size: 4.45vw;
		float: left;
		line-height: 16.67vw;
	}

	.list-t span:nth-child(2) {
		float: right;
	}

	.movie-b {
		margin-top: 8px;
	}

	.movie-r {
		width: 100%;
		height: 38.2vw;
		box-shadow: 0 0 8px rgba(0, 0, 0, .2);
		border-radius: 5px;
		padding: 10px;
	}

	.movie-l {
		width: 100%;
		height: 100%;
	}

	.movie-img {
		width: 22vw;
		height: 100%;
		float: left;
	}

	.movie-img img {
		width: 100%;
		height: 100%;
	}

	.movie-t {
		width: calc(100% - 40vw);
		height: 100%;
		float: left;
		padding-left: 10px;
		box-sizing: border-box;
	}

	.movie-introduce {
		max-width: 100%;
		height: 100%;
		position: relative;
	}

	.movie-introduce h3 {
		font-size: 4.45vw;
		height: 5vw;
		line-height: 5vw;
		overflow: hidden;
		text-align: left;
	}

	.movie-rate {
		text-align: left;
	}

	.movie-introduce .text-d {
		width: 100%;
		max-height: 8vw;
		overflow: hidden;
		text-align: left;
		font-size: 3.34vw;
		line-height: 4vw;
		margin-top: 5px;
	}

	.ticket-box {
		width: 100%;
		position: absolute;
		bottom: 8px;
		left: 0;
		box-sizing: border-box;
		padding: 0 10px;
	}

	.ticket-btn {
		padding: 8px 12px;
		float: right;
	}
</style>
