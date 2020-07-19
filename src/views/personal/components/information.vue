<template>
	<div id="information">
		<div class="ground-box">
			<img class="ground-box-img" src="../../../../public/img/backgroung.jpg"/>
		</div>
		<div class="middle">
			<div class="user-img-box">
				<img class="user-img" src="../../../../public/img/author.jpg"/>
			</div>
			<div v-if="user" :class="changeStyle" @click="changeClick">
				<span v-show="show" class="iconfont">&#x6666;</span>{{changeContent}}
			</div>
			<div v-else class="change">编辑信息</div>
		</div>
		<div class="name-box">
			<div class="name" >
				张三
			</div>
			<div class="douyinId">
				抖音号：123456789
			</div>
		</div>
		<div class="text-box">
			<div class="introduce">
				张三热爱学习
			</div>
			<div class="label-box">
				<div class="label">
					北京
				</div>
				<div class="label">
					男
				</div>
			</div>
			<div class="number-box">
				<div class="box">
					<span class="number">
						123
						<span class="text">
							获赞
						</span>
					</span>
				</div>
				<div class="box">
					<span class="number">
						345
						<span class="text">
							关注
						</span>
					</span>
				</div>
				<div class="box">
					<span class="number">
						2456
						<span class="text">粉丝</span>
					</span>
				</div>
			</div>
		</div>
		<div class="router-box" v-if="user">
			<router-link :to="{path:'user',query:{listName:'works'}}">
				<div class="love" >
					作品
				</div>
			</router-link>
			<router-link :to="{path:'dynamicListUser',query:{page:'动态'}}">
				<div class="love">
					动态
				</div>
			</router-link>
			<router-link :to="{path:'likeListUser',query:{listName:'like'}}">
				<div class="love">
					喜欢
				</div>
			</router-link>

		</div>
		<div class="router-box" v-else>
			<router-link :to="{path:'/personal',query:{listName:'works'}}">
				<div class="love" >
					作品
				</div>
			</router-link>
			<router-link :to="{path:'/dynamicList',query:{page:'动态'}}">
				<div class="love">
					动态
				</div>
			</router-link>
			<router-link :to="{path:'/likeList',query:{listName:'like'}}">
				<div class="love">
					喜欢
				</div>
			</router-link>
		</div>
	</div>
</template>
<script >
export default{
	name:'information',
	props:['user'],
	methods:{
		changeClick(){
			this.changeStyle=this.changeStyle==="change-user"?"change":"change-user"
			this.changeContent=this.changeContent==="关注"?"取消关注":"关注"
			this.show=this.show===true?false:true
		}
	},
	data(){
		return{
			changeStyle:"change-user",
			changeContent:"关注",
			show:true
		}
	}
}
</script>
<style lang="stylus" scoped>
#information
  width:100%
  background:#000
	.ground-box
	  width:100%
	  margin:.1rem 0
	  padding:0 .01rem
		.ground-box-img
		   width:100%
		   height:2.5rem
	.middle
	  width:100%
	  height:2.5rem
	  position:relative
		.user-img-box
		  width:2rem
		  height:2rem
		  border-radius:50%
		  margin-top:-.5rem
		  margin-left:.6rem
			.user-img
			  width:2rem
			  height:2rem
			  border-radius:50%
			  border:.1rem solid #000
		.change
		  position:absolute
		  top:1rem
		  right:1.5rem
		  width:40%
		  height:.8rem
		  line-height:.8rem
		  font-size:.32rem
		  text-align:center
		  background:#333
		  border-radius:.1rem
		.change-user
		  position:absolute
		  top:1rem
		  right:1.5rem
		  width:40%
		  height:.8rem
		  line-height:.8rem
		  font-size:.32rem
		  text-align:center
		  background:red
		  border-radius:.1rem
	.name-box
	  padding:0 .5rem
		.name
		  height:1rem
		  line-height:1rem
		  font-size:.65rem
		.douyinId
		  height:.5rem
		  line-height:.5rem
		  font-size:.3rem
	.text-box
	  padding:0 .5rem
	  margin-top:.3rem
	  border-top:.01rem solid #222
		.introduce
		  height:1rem
		  line-height:1rem
		  font-size:.38rem
		.label-box
		  width:100%
		  height:.5rem
		  line-height:.5rem
		  overflow:hidden
			.label
			  width:1rem
			  height:.4rem
			  line-height:.4rem
			  font-size:.25rem
			  background:#333
			  color:#999
			  text-align:center
			  float:left
			  border-radius:.05rem
			  margin-right:.2rem
	.number-box
	  width:100%
	  height:1rem
	  line-height:1rem
		.box
		  height:.8rem
		  line-height:.8rem
		  float:left
		  margin-right:.2rem
			.text
			  color:#999
	.router-box
	  width:100%
	  height:1rem
	  line-height:1rem
		.love
		  width:33%
		  height:.8rem
		  line-height:.8rem
		  color:#999
		  float:left
		  text-align:center
</style>
