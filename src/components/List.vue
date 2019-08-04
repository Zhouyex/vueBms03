<template>
  <div class="hello">
      <!--List-->
      <Header></Header>
    <!--tableData 就是整个数据来源  是数组-->
    <el-table :data="tableData" style="width: 100% ; height: 600px">

      <!--label 就是显示的标题文字-->
      <!--prop 就是上面message数组的title属性   就可以映射  数据就有了-->
      <el-table-column prop="title" label="title"></el-table-column>
      <el-table-column prop="body" label="body" ></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index,scope.row)">删除</el-button>

        </template>
      </el-table-column>

    </el-table>


    <!--分页器   total 数据总量-->
    <el-pagination background layout="prev, pager, next"
                   :total="total"
                   :page-size="pageSize"
                   @current-change="handleCurrentChange"
  style="text-align: center;margin-top: 10px"

    ></el-pagination>
  </div>
</template>

<script>
import Header from './Header'
export default {
  name: 'List',
  components:{Header},
  data () {
    return {
      message:[], //总数据来源
      total:0 ,//数据总量
      pageSize:5, //每页显示数量
      currentPage:1 //当前页面

    }
  },

  created()
  {
    // console.log(this.$store)
    // 请求数据
    // this.axios.get('http://jsonplaceholder.typicode.com/posts').then((res)=>{
    //   // console.log(res.data);
    //   //拿到数据总量
    //   this.message = res.data;
    //   //分页======
    //   this.total = res.data.length;
    // }).catch(()=>{
    //   // console.log('获取数据失败');
    //   this.$message({
    //     showClose: true,
    //     message: '后台数据获取失败',
    //     type: 'warning'
    //   });
    // });


    // this.message = this.$store.state.storeList;
    // this.total = this.$store.state.storeList.length;


    this.message = JSON.parse(localStorage.getItem('list'));
    this.total = JSON.parse(localStorage.getItem('list')).length;

  },
  methods:{
    handleCurrentChange(val) {  //val 页码数
      // console.log(1);
      // console.log(`当前页: ${val}`);
      this.currentPage = val
    },
    handleDelete(index,row)
    {
      //index 当前，当前，当前页面的每一条数据的下标   row 每一行的内容 title+body。。。。
      console.log(index,row);

      //删除的是每一页的下标
      this.message.splice(index,1)
    }
  },
  computed:{
    //把每一页5条数据加载进去
    tableData()
    {
      return this.message.slice((this.currentPage-1) * this.pageSize,this.currentPage*this.pageSize)
    }
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
