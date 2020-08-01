<template>
	<div id="navigation">
		<router-link to="/">
			<div class="nav-box">
				首页
			</div>
		</router-link>
		<router-link to="/index/follow">
			<div class="nav-box">
				关注
			</div>
		</router-link>
    <router-link to="/index/upload">
		<div class="nav-box">
			<div class="iconfont icon-box">
				&#x6666;
			</div>
		</div>
    </router-link>
		<router-link to="/index/news">
			<div class="nav-box">
				消息
			</div>
		</router-link>
		<router-link :to="{path:'/worksList',query:{user:'1' ,userid:this.userid}}">
			<div class="nav-box">
				我
			</div>
		</router-link>
	</div>
</template>

<script>
export default{
	name:'navigation',
  data(){
    return{
      userid:""
    }
  },
  mounted(){
    this.userid=sessionStorage.getItem('id')
  }
}
</script>

<style lang="stylus" scoped>
#navigation
  height:1rem
  width:100%
  position:fixed
  bottom:0
  left:0
  z-index:20
	.nav-box
	  float:left
	  width:20%
	  color:#fff
	  text-align:center
	  height:1rem
	  line-height:1rem
	  font-size:.4rem
		.icon-box
		  width:70%
		  height:.7rem
		  background:#fff
		  color:#000
		  margin:.15rem 15%
		  line-height:.8rem
		  border-radius:.1rem
</style>
