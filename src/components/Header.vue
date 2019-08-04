<template>
  <div class="header">
    <router-link to='/'> <span>首页</span> </router-link>
    <router-link to='/list'> <span>列表</span> </router-link>
    <router-link to='/shopping'> <span>购物</span> </router-link>
    <router-link to='/detail'> <span>管理</span> </router-link>

    <el-button type="info" @click="rlogin" class="loginbtn">登录</el-button>
    <el-button type="danger"  @click="exitLogin" class="exitbtn" >退出</el-button>
    <span id="welcome" >
      欢迎老大：
      {{uname}}
    </span>

    <!-- <router-link to='/single'> <span>详情</span> </router-link> -->


  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
     uname:'',
    //  flag:true

    }
  },
  created()
  {
    // console.log(localStorage.getItem('username'))
    // JSON.stringify()
    // localStorage.setItem('vif',false);
    this.uname = localStorage.getItem('username')
  },
 methods:{
    rlogin()
    {
      this.$router.push('/login');
      // // this.flag = !this.flag;
      // console.log(this.flag)
      // localStorage.setItem('vif',false);
     
      
    },
    exitLogin(){
      localStorage.removeItem('username');
      // this.$router.push('/')
      // console.log(this) //当前实例
      this.$router.go(0);
    }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #welcome{
    width: 200px;
    height: 50px;
    background-color: #fff;
    padding-right: 20px;
    float: right;
  }
.header{
    text-align: center;
    margin-bottom: 20px;
    margin-top: 20px;

}
    .header span{
        display: inline-block;
        width: 70px;
        height: 50px;
        background-color: #ccc;
        border-radius: 10px;
        text-align: center;
        line-height: 50px;
        font-size: 25px;
    }


</style>
