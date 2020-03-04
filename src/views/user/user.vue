<template>
	<div id="user">
		<router-link to="/">
			<div class="iconfont icon" >
		    	&#xbbbb;
		    </div>
	    </router-link>
	    <router-view :user="user"/>
	</div>
</template>

<script>
import personal from '../personal/personal.vue'
export default{
	name:'user',
	components:{
		personal
	},
	data(){
		return{
			user:this.$route.query.user
		}
	}
}
	
</script>

<style lang="stylus" scoped>
#user
 color:#fff
 position:relative
 width:100%
 height:100%
	.icon
	 position:absolute
	 top:.3rem
	 left:.25rem
	 z-index:20
	 color:#fff
</style>