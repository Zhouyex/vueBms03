<template>
  <div class="hello">
    <Header></Header>
    

    <h2 class="zl">总览</h2>

    <ul class="items">
      <li v-for="(item,index) of list" :key="index">
        <router-link :to="'/single/'+item.id">
          <p  v-changeStyle:ita="{font:'30px'}" class="looptitle">{{item.id}}.{{item.title}}</p>
        </router-link>

        <p  v-changeStyle:ita="{font:'24px'}" class="loopbody">{{item.body}}</p>
      </li>
    </ul>

    <!--<el-button :plain="true" >数据已全部加载</el-button>-->
    <!--<el-button :plain="true" >后台数据获取失败</el-button>-->
    <p class="loadbtn">
      <el-button type="primary" @click="getMore">加载更多</el-button>
    </p>

  </div>
</template>

<script>
import Header from './Header'
export default {

  name: 'Home',
  components:{Header},
  data () {
    return {
      list:[],
      n:0

    }
  },
  methods:{

    getMore()
    {
      // console.log(1);
      if(this.n<10)
      {
        //   this.axios.get('http://jsonplaceholder.typicode.com/posts').then((res)=>{
        //   console.log(res.data);
        //   let data = res.data.slice(10+this.n,15+this.n);
        //   this.list = this.list.concat(data);
        //   // http://jsonplaceholder.typicode.com/posts/1


        // }).catch(()=>{
        //   console.log('获取数据失败');

        //     this.$message({
        //       showClose: true,
        //       message: '后台数据获取失败',
        //       type: 'warning'
        //     });

        // });
        let data = this.$store.state.storeList.slice(10+this.n,15+this.n)
        // this.list = this.$store.state.storeList;
        this.list = this.list.concat(data);

        this.n+=5;

      }else{

        this.$message({
          showClose: true,
          message: '数据已全部加载'
        });

      }

    },
    



  },

  created()
  { 
    // 获取vuex中的数据
    // console.log(this.$store)

    this.axios.get('http://jsonplaceholder.typicode.com/posts').then((res)=>{
      // console.log(res.data);
      // this.list = res.data.slice(0,10)

      // 使用vuex store 的数据
      // commit 第一个参数触发store下mutation事件，第二个参数是传递的参数
      this.$store.commit('initList',res.data);
      this.list = this.$store.state.storeList.slice(0,10);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .zl{
    font-size: 30px;
    text-align: center;
  }
  .items{
      margin-top: 10px;
      /* height: 30px; */
  }
  .items li{
    margin-top:20px ;
    background-color: #ccc;
  }
  .looptitle{
    font-size: 30px;
    text-align: center;
    margin-bottom: 10px;
  }
  .loopbody{
    font-size: 25px;
  }
  .loadbtn{
    text-align: center;
  }
  .loginbtn {
    position: absolute;
    top: 0;
    left: 0;
  }
  .exitbtn {
    position: absolute;
    top: 0;
    left: 100px;
  }

</style>
