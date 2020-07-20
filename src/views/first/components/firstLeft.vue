<template>
	<div id="firstLeft">
		<div class="author">
			@{{item.author}}
		</div>
		<div class="title">
			#{{item.title}}
		</div>
		<div class="box">
			<div class="music">
				月光下跳舞
			</div>	
		</div>
		
		
	</div>
</template>

<script>
export default{
	name:'firstLeft',
	props:['item'],
  mounted(){
    console.log(item)
  }
}
</script>

<style lang="stylus" scoped>
#firstLeft
  height:3rem
  margin-left:.2rem
	.author
	  height:.7rem
	  line-height:.7rem
	  font-size:.34rem
	.title
	  height:.7rem
	  line-height:.7rem
	  font-size:.3rem
	.box
	  width:2rem
	  overflow:hidden
	.music
	  height:.7rem
	  line-height:.7rem
	  font-size:.3rem
	  animation:5s music linear infinite
	  
@keyframes music{
	0%{
		-webkit-transform:translate3d(80%,0,0)
		transform:translate3d(80%,0,0)
	}
	100%{
		-webkit-transform:translate3d(-100%,0,0)
		transform:translate3d(-100%,0,0)
	}
	
}
	  
  
</style>