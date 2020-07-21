<template>
	<div id="personal" >
		<information :personalDTO="personalDTO"></information>
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
    components:{
      information
    },
    props:['user','userid'],
    data(){
      return{
        personalDTO:{
          id:"",
          name:"",
          city:"",
          message:"",
          gender:"",
          followed:"",
          follower:"",
          likeds:"",
          videos:"",
        }
      }
    },
    created() {
      this.informat()
    },
    methods:{
      informat:function(){
        console.log(this.user)
              if(this.user==0){
                console.log(this.user)
                console.log(this.userid)
                console.log("22222")
                var self = this;
                let fd = new FormData();
                fd.append("id", this.userid);
                axios.post('http://localhost:9090/getPersonalPageById',fd).then((res)=>{
                this.personalDTO = res.data;
                })
              }else{
                console.log(this.user)
                console.log("11111")
                var self = this;
                let fd = new FormData();
                fd.append("id",sessionStorage.getItem('id'));
                axios.post('http://localhost:9090/getPersonalPageById',fd).then((res)=>{
                this.personalDTO = res.data;
                })
              }
      }
    }
  }
</script>
<style lang="stylus" scoped>
#personal
  color:#fff
</style>
