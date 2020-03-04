<template>
	<div id="follow">
		<follow-header></follow-header>
		<keep-alive>
			<router-view :key="$route.fullPath"/>
		</keep-alive>
	</div>
</template>

<script>
import followHeader from './components/followHeader.vue'
export default{
	name:'follow',
	components:{
		followHeader
	}
}
</script>

<style lang="stylus" scoped>
#follow
  color:#fff
</style>