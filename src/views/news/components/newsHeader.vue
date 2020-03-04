<template>
  <div class="newsHeader">
  	<div class="middel">消息</div>
  	<div class="right">联系人</div>
  </div>
</template>

<script>
export default {
  name: 'newsHeader',
  
}
</script>
<style lang="stylus" scoped>
.newsHeader
  width:100%
  height:1rem
  line-height:1rem
  position:relative
  border-bottom:.01rem solid #444
	.right
	  position:absolute
	  top:0
	  right:.3rem
	  height:1rem
	  line-height:1rem
	  font-size:.35rem
	  color:#eee
	.middel
	  width:100%
	  text-align:center
	  height:1rem
	  line-height:1rem
	  font-size:.4rem
	  color:#eee
</style>