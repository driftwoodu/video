<template>
	<div id="search">
    <p>
		<input id="search" type="text" v-model="search" placeholder="请输入你感兴趣的" value="">
          <button @click="searchindb()">搜索</button>
     </p>
	</div>
</template>

<script>
 import axios from 'axios'
 export default {
   name:'search',
    data(){
      return{
        search:""
        }
    },
    created() {

    },
  methods:{
    searchindb:function(){
       if(this.search ==""){
         alert("搜索不能为空")
       }
       else{
          let fd = new FormData();
          fd.append("search", this.search);

          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
          axios.post('http://localhost:9090/search',fd,config).then((res)=>{
              console.log(res)
          })
          this.$router.push('/searchresult');
          }

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
