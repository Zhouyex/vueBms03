<template>
  <div class="login">
    <h1>用户登录</h1>
    <el-input v-model="user" placeholder="请输入用户名" class="inp"></el-input>
    <el-input v-model="pwd" placeholder="请输入密码" class="inp"></el-input>

    <el-button type="primary" @click="login">登录</el-button>
    <el-button type="warning" @click="reset">重置</el-button>
  </div>


</template>

<script>
// import Header from './Header'
export default {

  name: 'Login',

//   components:{Header},
  data () {
    return {

      user:'',
      pwd:''
    }
  },
  methods:{
    login()
    {
      if(this.user === '' || this.pwd  === '')
      {
        this.$message({
          message: '请完成登录信息',
          type: 'warning'
        });

        return
      }
      // console.log(1);
      this.axios.post('/api',{
        user:this.user,
        pwd:this.pwd
      }).then((res)=>{
        // console.log(res);
        // console.log(res.data)
        if(res.data === 'ok')
        {
          // alert('登录成功')

          this.$message({
            message: '登录成功',
            type: 'success'
          });

          //获取到登录name
          console.log(JSON.parse(res.config.data).user);

          //设置localStorage
          localStorage.setItem('username',JSON.parse(res.config.data).user);
          this.$router.push('/')

    }else{

          // alert('登录失败')
          this.$message.error('登录失败，检查用户名和密码');
        }

        // if(res.data)

      }).catch(()=>{
        this.$message.error('服务器出问题了--504--');
      })

    },
    reset()
    {
      // console.log(1)
      this.user = '';
      this.pwd='';

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size: 30px;
  }
.login{
  margin:140px auto;
  width: 400px;
  height: 300px;
  border:1px solid ;
  text-align: center;
}
.inp{
  margin: 10px 0;
}
</style>
