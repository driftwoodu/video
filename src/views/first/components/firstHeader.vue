<template>
	<div id="firstHeader">
		<div class="iconfont left">
			&#x4444;随拍
		</div>
		<div class="middle">
			<router-link to="/">
				<span class="header-span">
					推荐
				</span>
			</router-link>
			|
			<router-link to="/city">
				<span class="header-span">
					北京
				</span>
			</router-link>
		</div>
		<div class="iconfont right">
			&#x2222;
		</div>
	</div>
</template>

<script>
export default{
	name:'firstHeader'
}
</script>

<style lang="stylus" scoped>
a
  color:#fff
#firstHeader
  width:100%
  position:fixed
  top:.5rem
  left:0
  height:.61rem
  line-height:.61rem
  margin:0 auto
  z-index:20
	.left
	  position:absolute
	  top:0
	  left:0
	  color:#fff
	  width:20%
	  text-align:center
	  font-size:.4rem
	.right
	  position:absolute
	  top:0
	  right:0
	  color:#fff
	  width:15%
	  text-align:center
	  font-size:.4rem
	.middle
	  text-align:center
	  color:#fff
		.header-span
		  font-size:.4rem
	  
  
</style>