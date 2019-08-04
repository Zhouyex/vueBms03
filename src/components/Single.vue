<template>
  <div class="header">
    <!-- single -->

    <!-- 轮播图 -->
    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide><img src="../assets/pic01.jpg" alt="" width="800"></swiper-slide>
    <swiper-slide><img src="../assets/pic02.jpg" alt="" width="800"></swiper-slide>
    <swiper-slide><img src="../assets/pic03.jpg" alt="" width="800"></swiper-slide>
    <!-- <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>

    <h1>{{msg.title}}</h1>
    <p>{{msg.body}}</p>
  </div>
</template>

<script>
export default {
  name: 'Single',
  data () {
    return {
        id:this.$route.params.id,
        msg:{},
       

    }
   
  },
  
   created()
    {
      this.axios.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then((res)=>{
        // console.log(res);
        this.msg = res.data;
        
      })
    },
    
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)

       mounted(){
      var mySwiper = new Swiper('.swiper1',{   
                pagination: '.swiper-pagination',
                autoplay: 3000,
                paginationClickable: true,
                centeredSlides: true,
                autoplayDisableOnInteraction: false,
                preventClicks: false,
                speed: 600,
                observer:true,
                loop: true,
                observeParents:true
       })
     
    

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    text-align: center;
    font-size: 30px
  }
  p{
    text-align: center;
    font-size: 20px;
  }

</style>
