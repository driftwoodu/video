<template>
	<div id="">
		<div id="changeHeader">
			<router-link to="/index/city">
				<div class="iconfont left">
					&#x9999;
				</div>
			</router-link>
			<div class="text">
				切换城市
			</div>
		</div>
		<div class="ground">

		</div>
	</div>


</template>
<script>
export default{
	name:"changeHeader"
}
</script>
<style lang="stylus" scoped>
#changeHeader
  width:100%
  height:.8rem
  line-height:.8rem
  position:fixed
  top:0
  left:0
  margin:0 auto
  background:#000
  z-index:20
.ground
  width:100%
  height:.8rem
	.left
	  position:absolute
	  top:0
	  left:.3rem
	  color:#fff
	.text
	  font-size:.35rem
	  text-align:center
	  color:#fff

</style>
