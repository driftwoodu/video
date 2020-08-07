<template>
	<div class="">
		<div id="followHeader">
			<div class="left">
				<span class="iconfont icon">
					&#x4444;
				</span>
				随拍
			</div>
			<div class="middle">
				<router-link :to="{path:'index/follow'}">
					<span class="header-span">
						关注
					</span>
				</router-link>
			</div>

		</div>
		<div class="ground">

		</div>
	</div>
</template>

<script>
export default{
	name:'followHeader'
}
</script>

<style lang="stylus" scoped>
.ground
  width:100%
  height:1rem
#followHeader
  position:fixed
  top:0
  left:0
  z-index:20
  color:#fff
  width:100%
  margin:0 auto
  background:#000
  padding-top:.5rem
  height:1rem
	.left
	  position:absolute
	  top:.5rem
	  left:0
	  width:25%
	  text-align:center
	  line-height:.5rem
	  font-size:.4rem
		.icon
		  font-size:.5rem
	.middle
	  text-align:center
	  height:.5rem
	  line-height:.5rem
		.header-span
		  font-size:.35rem
		  margin:0 .15rem
		  color:#fff
</style>
