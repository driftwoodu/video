<template>
  <div class="newsList">
  	<div class="item" v-for="item of list">
  		<div class="author-img">
  			<img class="img" src="../../../../public/img/author.jpg"/>
  		</div>
  		<div class="text">
  			<div class="top">
  				<div class="name">{{item.name}}</div>
  				<div class="time">{{item.time}}</div>
  			</div>
  			<div class="contnent">{{item.content}}</div>
  		</div>
  	</div>
  	<div class="more">没有更多了</div>
  </div>
</template>

<script>

export default {
  name: 'newsList',
  data(){
  	return{
  		list:[{
  			id:1,
  			name:'张三',
  			time:'8-1',
  			content:'你好，我是张三，我特别爱学习'
  		},
  		{
  			id:2,
  			name:'李四',
  			time:'5-4',
  			content:'你好，我是李四，我特别爱睡觉'
  		},
  		{
  			id:3,
  			name:'王二麻',
  			time:'昨天',
  			content:'你好，我是王二麻，我特别爱购物'
  		},
  		{
  			id:4,
  			name:'狗剩',
  			time:'前年',
  			content:'你好，我是狗剩，我特别爱运动'
  		}
  		]
  	}
  }
  
}
</script>
<style lang="stylus" scoped>
.newsList
  background:#000
  margin-top:.2rem
	.item
	  height:1.2rem
	  padding:.3rem .2rem
	  overflow:hidden
		.author-img
		  margin-left:.2rem
		  float:left
		  width:1rem
		  height:1rem
		  border-radius:50%
			.img
			  width:1rem
			  height:1rem
			  border-radius:50%
		.text
		  float:left
		  margin-left:.4rem
		  height:1rem
		  width:75%
			.top
			  height:.5rem
			  overflow:hidden
				.name
				  float:left
				  font-size:.4rem
				  color:#fff
				.time
				  float:right
				  font-size:.25rem
				  color:#aaa
			.contnent
			  height:.5rem
			  line-height:.5rem
			  font-size:.3rem
			  color:#aaa
	.more
	  width:100%
	  height:1rem
	  line-height:1rem
	  font-size:.3rem
	  color:#aaa
	  text-align:center
		  
</style>