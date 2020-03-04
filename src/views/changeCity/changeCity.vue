<template>
	<div id="">
		<change-header></change-header>
		<city-list :cities="cities"></city-list>
		<city-alphabet :cities="cities"></city-alphabet>
	</div>
</template>
<script>
import axios from 'axios'
import changeHeader from './components/changeHeader'
import cityList from './components/cityList'
import cityAlphabet from './components/cityAlphabet'
export default{
	name:'changeCity',
	components:{
		changeHeader,
		cityList,
		cityAlphabet
	},
	data(){
		return{
			cities:[]
		}
	},
	mounted(){
		this.getCity()
	},
	methods:{
		getCity(){
			axios.get('api/city.json')
			.then(this.getCitySucc)
		},
		getCitySucc(res){
			this.cities=res.data.city
		}
	}
	
}
</script>

<style lang="stylus" scoped>
	
</style>