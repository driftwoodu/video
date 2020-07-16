<template>
<div>
  <p>用户名：<input type='text' v-model="userName"></p>
  <p>密码：<input type='text' v-model="passWord"></p>
  <button @click="login()">登录</button>
</div>
</template>
<script>
  import axios from 'axios'
 export default {
  methods:{
    login(){
   const self = this;
   axios.get('http://localhost:9090/login').then(response=>{
     var res =response.data;
     console.log(response);
     var len = res.length;
     var userNameArr= [];
     var passWordArr= [];
     var ses= window.sessionStorage;
    // 拿到所有的username
    for(var i=0; i<len; i++){
     userNameArr.push(res[i].username);
     passWordArr.push(res[i].password);
    }
    console.log(userNameArr, passWordArr);
    if(userNameArr.indexOf(this.userName) === -1){
      alert('账号不存在！');
    }else{
     var index = userNameArr.indexOf(this.userName);

     if(passWordArr[index] === this.passWord){
      // 把token放在sessionStorage中
      ses.setItem('data', res[index].token);

      this.$parent.$data.userTitle = res[index].usertitle;
      //验证成功进入首页

      //this.startHacking ('登录成功！');
      //跳转到首页
      console.log("1")
      this.$router.push('/index');
      // console.log(this.$router);
     }else{
      alert('密码错误！')
     }
    }
   }).catch(err=>{
    console.log('连接数据库失败！')
   })
  }
  }
}
</script>
