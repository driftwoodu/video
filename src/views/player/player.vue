<template>
  <div class="player">
    <div class="iconfont icon" @click="click">
    	&#xbbbb;
    </div>
    	<videoList :videolist="list" flag='0'></videoList>
  </div>
</template>

<script>
  import {videoPlayer} from 'vue-video-player'
  import videoList from '../first/components/videoList.vue'
  import axios from 'axios'
export default {
  name: 'player',
  components:{
  	videoList
  },
  data(){
    return{
      itemid:this.$route.query.itemid,
      list:[]
      }
    },
  created(){
    this.getVideos()
  },
  methods:{
    getVideos(){
      let fd = new FormData();
      fd.append("videoid", this.itemid);
    	axios.post('sys/getVideoByVideoId',fd,{
        params:{

        }
      })
    	.then(this.getVideosSucc)
    },
    getVideosSucc(res){
    	this.list.push(res.data);
    },
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
