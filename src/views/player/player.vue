<template>
  <div class="player">
    <div class="iconfont icon" @click="click">
    	&#xbbbb;
    </div>
    <div class="list">
    	<videolist></videolist>
    </div>
    <div class="comment">
    	留下你的精彩评论吧
    </div>
  </div>
</template>

<script>
import videolist from '../first/components/videoList.vue'
export default {
  name: 'player',
  components:{
  	videolist
  },
  methods:{
  	click(){
  		this.$router.go(-1)
  	}
  }
}
</script>
<style lang="stylus">
.player
 color:#fff
 position:relative
 width:100%
 height:100%
	.icon
	 position:absolute
	 top:.3rem
	 left:.25rem
	 z-index:20
	.comment
	 position:absolute
	 bottom:.2rem
	 left:.25rem
	 z-index:20
	 color:#999
	 font-size:.35rem
	.list
	 width:100%
 	 height:100%
 	 z-index:18


</style>
