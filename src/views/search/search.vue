<template>
	<div id="search">
    <div class="ground-box">
    	<img class="ground-box-img" src="../../../public/img/backgroung.jpg"/>
    </div>
    <div class="box">
      <div class="searchBox">
        <input type="text" v-model="search" placeholder="请输入关键词进行搜索" class="searchInput" style="padding-left: 10px;">
        <input type="button"  @click="searchindb" value="搜索" class="searchButton">
      </div>
    </div>
    <div class="item" v-for="item of list">
      <router-link :to="{path:'/player',query:{itemid:item.id}}">
    	<videos :videos="item" @click.native="click"></videos>
      </router-link>
    	<div class="box">
        <div><span class="title">
        	{{item.title}}
        </span></div>
        <div>
          <span class="iconfont love">
    			&#x5555;
    		</span>
        <span class="likecount">
        	{{item.likecount}}
        </span>
        </div>
    	</div>
    </div>
    <div class="ground">
		</div>
	</div>
</template>

<script>
 import axios from 'axios'
 import videos from '../first/components/video.vue'
 export default {
   name:'search',
   components:{
   	videos
   },
    data(){
      return{
        search:"",
        list:[]
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
          axios.post('sys/search',fd,config).then((res)=>{
              this.list=res.data
          })
        }
        console.log(list)
    }
  }
}
</script>

<style lang="stylus" scoped>

#user
  width:100%
  background:#000


	.item
    width:33%
    height:3rem
    float:left
    position:relative
    .box
      position:absolute
      bottom:.1rem
      left:.2rem
      .love
        font-size:.3rem
        color:#fff
      .number
        font-size:.3rem
        color:#fff
  .box{
    margin: 0 auto;
    padding-top: 0px;
    height: 50px;
    width: 100%;
  }
  .searchBox{
    margin: 0 auto;
    width: 60%;
    position: relative;
  }
  .searchInput{
    display: inline-block;
    width: 85%;
    height: 38px;
    border: 1px solid #cccccc;
    float: left;
    box-sizing: border-box;
    -moz-box-sizing:border-box; /* Firefox */
    -webkit-box-sizing:border-box; /* Safari */
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .searchButton{
    display: inline-block;
    width: 15%;
    height: 38px;
    line-height: 40px;
    float: left;
    background-color: #808080;
    font-size: 16px;
    cursor: pointer;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border: none;
    color: #fff;
  }
  .ground-box
    width:100%
    margin:.1rem 0
    padding:0 .01rem
  	.ground-box-img
  	   width:100%
  	   height:2.5rem
</style>
