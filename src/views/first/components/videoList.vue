<template>
	<div id="videoList">
		<swiper :options="swiperOption" >
			<swiper-slide class="swiper" v-for="(item,index) of list" :key="index">
				<videos ref="videos" :videos="item" :index="index"></videos>
				<div v-if="pages-1===index" class="left">
					<first-left :item="item"></first-left>
				</div>
				<div v-if="pages-1===index" class="right">
					<first-right @openShare="openShare" @openComment="openComment" :loveColor="loveColor" :item="item"></first-right>
				</div>
			</swiper-slide>
		</swiper>
		<div v-if="show" class="comment-box">
			<component @close="close" :is="componentName" :item="item"></component>
		</div>
	</div>
</template>

<script>
import {swiper,swiperSlide} from 'vue-awesome-swiper'
import {videoPlayer} from 'vue-video-player'
import firstLeft from './firstLeft.vue'
import firstRight from './firstRight.vue'
import videos from './video.vue'
import axios from 'axios'
import comment from '../../components/comment.vue'
import firstShare from '../../components/share.vue'
export default{
	name:'videoList',
  props:['videolist','flag'],
	components:{
		swiper,
		swiperSlide,
		videoPlayer,
		firstLeft,
		firstRight,
		videos,
		comment,
		firstShare
	},
	data(){
		return{
			componentName:"",
			show:false,
			pages:1,
			loveColor:false,
			swiperOption:{
				notNextTick:true,
				direction:'vertical',//设置华滑动方向为垂直
				autoHeight:true,//自动高度
				mousewhell:false,
				mousewheelControl:false,//设置鼠标滑轮
				setWrapperSize:true,
				height:window.innerHeight,
				on:{
				    tap:(event)=>{
				      this.player(this.pages-1)
				    },
				    slideNextTransitionStart:(event)=>{
				      this.pages+=1
				      this.next(this.pages-1)
				    },
				    slidePrevTransitionStart:(event)=>{
				    	if(this.pages>1){
				    		this.pages-=1
				    	}
				    	this.previous(this.pages-1)
				    },
				    doubleTap:(event)=>{
				      this.showColor()
				    },
				},
			},
			list:[]
		}
	},
	mounted(){
		this.getVideos()
	},
	methods:{
		openShare(){
			this.show=true
			this.componentName="first-share"
		},
		close(){
			this.show=false
		},
		openComment(){
			this.show=true
			this.componentName="comment"
		},
		showColor(){
      if(this.loveColor === false){
        this.loveColor = true;
        firstRight.showColor="iconfont icon-red"
        console.log("red")
      }else{
        this.loveColor = false;
        firstRight.showColor="iconfont right-icon"
        console.log("gray")
      }
		},
		getVideos(){
			axios.get('sys/getVideo',{
        params:{

        }
      })
			.then(this.getVideosSucc)
		},
		getVideosSucc(res){
      if(this.flag=='0'){
        this.list=this.videolist
      }else{
        this.list=res.data
      }
		},
		player(val){
			this.$refs.videos[val].judge()
		},
		next(val){
			this.$refs.videos[val-1].pause()
			this.$refs.videos[val].play()
		},
		previous(val){
			this.$refs.videos[val+1].pause()
			this.$refs.videos[val].play()
		}
	}

}
</script>

<style lang="stylus" scoped>
#videoList
  width:100%
  height:100%
  z-index:15
	.swiper
	  color:#fff
	  font-size:2rem
	  position:relative
		.left
		  position:absolute
		  bottom:1rem
		  left:.2rem
		  z-index:16
		  font-size:.5rem
		.right
		  position:absolute
		  bottom:1rem
		  right:.2rem
		  z-index:16
		  font-size:.5rem
	.comment-box
	  z-index:22
	  width:100%
	  height:10rem
	  position:fixed
	  bottom:0
	  left:0
	  display:flex
	  align-items:center
	  justify-content:center
</style>
