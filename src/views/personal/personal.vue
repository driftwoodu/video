<template>
	<div id="personal" >
		<information :user="user" ></information>
		<keep-alive>
			<router-view :key="$route.fullPath"/>
		</keep-alive>
	</div>
</template>
<script >
import information from './components/information.vue'
export default{
	name:'personal',
	components:{
		information
	},
	props:['user']
}
</script>
<style lang="stylus" scoped>
#personal
  color:#fff
</style>