<template>
	<div id="followList">
		<div class="item" v-for="item of list">
			<div class="top">
				<div class="img-box">
					<img class="author-img" src="../../../../public/img/author.jpg"/>
				</div>
				<div class="autor-name">
					{{item.author}}{{page}}
				</div>
				<div class="share">
					分享
				</div>
			</div>
			<div class="title">
				{{item.title}}
			</div>
			<router-link to="/player">
				<div class="videos">
					<div class="videos-box" >
						<videos :videos="item"></videos>
					</div>	
				</div>
			</router-link>
			<div class="box">
				<div class="left">
					3-20
				</div>
				<div class="right">
					<div class="iconfont box-number">
						&#x7777;{{item.shareNumber}}
					</div>
					<div class="iconfont box-number">
						&#x1111;{{item.commentNumber}}
					</div>
					<div class="iconfont box-number">
						&#x5555;{{item.loveNumber}}
					</div>
				</div>
			</div>
			<div class="comment-text">
				<input class='comment-input' type="text" placeholder="  #留下你的评论吧" />
			</div>	
		</div>
		
	</div>
</template>

<script>
import axios from 'axios'
import videos from '../../first/components/video.vue'
export default{
	name:'followList',
	components:{
		videos
	},
	created(){
		this.getVideo()
	},
	methods:{
		getVideo(){
			axios.get('api/videos.json')
			.then(this.getVideoSucc)
		},
		getVideoSucc(res){
			if(this.page==="好友"){
				this.list=res.data.list.slice(0,4)
			}else{
				if(this.page==="动态"){
					this.list=res.data.list.slice(8,12)
				}else{
					this.list=res.data.list.slice(4,8)
				}
			}
				
		}
	},
	data(){
		return{
			list:[],
			page:this.$route.query.page
		}
	}
	
}
</script>

<style lang="stylus" scoped>
#followList
  width:100%
  background:#000
  padding-bottom:1rem
	.item
	  padding:0 .5rem
		.top
		  margin-top:1rem
		  height:1rem
		  overflow:hidden
			.img-box
			  float:left
			  border-radius:50%
			  width:1rem
			  height:1rem
				.author-img
				  border-radius:50%
				  width:1rem
				  height:1rem
			.autor-name
			  float:left
			  font-size:.4rem
			  height:1rem
			  line-height:1rem
			.share
			  float:right
			  font-size:.3rem
			  margin-right:.2rem
			  height:1rem
			  line-height:1rem
		.title
		  width:100%
		  font-size:.3rem
		  margin-top:.3rem
		  height:.5rem
		  line-height:.5rem
		.videos
		  width:100%
		  height:7.5rem
			.videos-box
			  width:85%
			  height:8rem
		.box
		  overflow:hidden
		  margin-top:.5rem
			.left
			  float:left
			  font-size:.3rem
			  height:.5rem
			  line-height:.5rem
			.right
			  float:right
			  overflow:hidden
				.box-number
				  float:right
				  font-size:.3rem
				  height:.5rem
				  line-height:.5rem
				  padding-left:.2rem
		.comment-text
		  width:100%
			.comment-input
			  width:95%
			  height:.7rem
			  background:#333
		  
		
</style>