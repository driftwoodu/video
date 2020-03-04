<template>
	<div class="share">
		<div class="header">
			分享到
		</div>
		<div class="share-box">
			<vshare :vshareConfig="vshareConfig"></vshare>
		</div>
		<div class="close" @click="close">
			取消
		</div>
	</div>
</template>

<script>
export default{
	name:'share',
	data(){
		return{
			vshareConfig: {
          shareList: [
            'qzone',
            'tqq',
            'sqq',
            'mogujie',
            'diandian'
          ],
          common : {
            //此处放置通用设置
          },
          share : [{
            bdSize:32
            }
          ],
          slide : [
            //此处放置浮窗分享设置
          ],
          image : [
            //此处放置图片分享设置
          ],
          selectShare : [
            //此处放置划词分享设置
          ]
        }
		}
	},
	methods:{
		close(){
			this.$emit('close')
			
		}
	}
}
</script>

<style lang="stylus" scoped>
.share
  background:#fff
  color:#000
  height:4rem
  position:relative
  top:3rem
  border-radius:.3rem .3rem 0 0
  width:100%
	.header
	  height:.8rem
	  line-height:.8rem
	  font-size:.4rem
	  text-align:center
	.share-box
	  height:1rem
	  padding:.5rem 0
	  margin:0 auto
	.close
	  height:.5rem
	  line-height:.5rem
	  font-size:.4rem
	  position:absolute
	  bottom:.5rem
	  left:0
	  width:100%
	  text-align:center
  
</style>