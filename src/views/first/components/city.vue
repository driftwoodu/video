<template>
	<div id="city">
		<div class="colation">
			<div class="iconfont colation-left">
				&#x8888;自动定位:{{this.$store.state.tcity}}
			</div>
			<router-link to="/changeCity">
				<div class="iconfont colation-right">
					切换&#xaaaa;
				</div>
			</router-link>
		</div>
		<div class="sort">
			<div class="sort-box" v-for="item of sortList">
				<img class="sort-img" :src="item.imgSrc"/>
				<div class="sort-name">
					{{item.name}}
				</div>	
			</div>	
		</div>
		<div class="video-list">
			<div class="item" v-for="item of list">
				<div class="video">
					<videos :videos="item"></videos>
				</div>
				<div class="title">
					我爱学习
				</div>	
			</div>
		</div>
	</div>
</template>

<script>
import videos from './video.vue'
import axios from 'axios'
export default{
	name:'city',
	components:{
		videos
	},
	data(){
		return{
			list:[],
			sortList:[{
				imgSrc:require('../../../assets/img/delicacy.jpg'),
				name:"美食"
			},
			{
				imgSrc:require('../../../assets/img/scenic.jpg'),
				name:"景点"
			},
			{
				imgSrc:require('../../../assets/img/culture.jpg'),
				name:"文化"
			},
			{
				imgSrc:require('../../../assets/img/fun.jpg'),
				name:"玩乐"
			},
			{
				imgSrc:require('../../../assets/img/hotel.jpg'),
				name:"酒店"
			},
			{
				imgSrc:require('../../../assets/img/shopping.jpg'),
				name:"购物"
			},
			{
				imgSrc:require('../../../assets/img/delicacy.jpg'),
				name:"运动"
			},
			]
		}
	},
	mounted(){
		this.getVideos()
	},
	methods:{
		getVideos(){
			axios.get('api/videos.json')
			.then(this.getVideosSucc)
		},
		getVideosSucc(res){
			this.list=res.data.list
		}
	}
}
</script>

<style lang="stylus" scoped>
::-webkit-scrollbar
  display:none
  
#city
  padding:.02rem
  width:100%
  background:#000
	.colation
	  width:100%
	  height:.8rem
	  line-height:.8rem
	  margin-top:1.2rem
	  border-bottom:.01rem solid #c3c3c3
	  overflow:hidden
		.colation-left
		  float:left
		  margin-left:.3rem
		  color:#bbb
		.colation-right
		  float:right
		  margin-right:.3rem
		  color:#bbb
	.sort
	  width:100%
	  height:2rem
	  overflow:auto
	  display:flex
		.sort-box
		  width:1.5rem
		  height:2rem
		  flex-shrink:0
			.sort-img
			  width:1rem
			  height:1rem
			  border-radius:.1rem
			  margin:.2rem .25rem
			.sort-name
			  width:1rem
			  height:.3rem
			  line-height:.3rem
			  color:#fff
			  margin:0 .25rem
			  text-align:center
	.video-list
	  width:100%
	  overflow:auto
		.item
		  width:50%
		  float:left
			.video
			  width:90%
			  margin-left:5%
			.title
			  color:#fff
			  line-height:.5rem
			  font-size:.3rem
			  margin-top:.2rem
			  padding-left:.4rem
			  padding-right:.2rem	  
</style>