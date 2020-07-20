<template>
	<div id="personal" >
		<information :personalDTO="personalDTO" ></information>
		<keep-alive>
			<router-view :key="$route.fullPath"/>
		</keep-alive>
	</div>
</template>
<script >
import information from './components/information.vue'
import axios from 'axios'
  export default{
    name:'personal',
    props:['user'],
    data(){
      return{
        personalDTO:{
          id:"",
          name:{},
          city:{},
          message:{},
          gender:{},
          followed:{},
          follower:{},
          likeds:{},
          videos:{},
        }
      }
    },
    created() {
      this.information()
    },
    methods:{
      information:function(){
              var self = this;
              let fd = new FormData();
              fd.append("id", sessionStorage.getItem('id'));
              axios.post('http://localhost:9090/getPersonalPageById',fd).then((res)=>{
              this.personalDTO = res.data;
        })
      }
    }
  }
</script>
<style lang="stylus" scoped>
#personal
  color:#fff
</style>
