<template>
  <div class="m-1">
    <div class="top d-flex jc-around bg-white pt-3 pb-1">
      
      <!-- advanced -->
      <router-link tag="div" :to="`/vip/version/${this.id}`" 
        :class="{active: flag1,'no-active': !flag1}"
        @click.native="changeColor" 
        class="advanced px-6 py-6 text-center"
      >
        <h2>高级版</h2>
        <span class="fs-sss smallFont" 
          :class="{'fs-red-4': flag1, 'fs-black-2': !flag1}"
        >
        适合独立摄影师
        </span>
      </router-link>

      <!-- customize -->
      <router-link tag="div" :to="`/vip/version/${this.id1}`" 
        :class="{active: flag2,'no-active': !flag2}"
        @click.native="changeColor"
        class="tailor-made px-6 py-6 text-center"
      >
        <h2>定制版</h2>
        <span class="fs-sss smallFont" 
          :class="{'fs-red-4':flag2,'fs-black-2': !flag2}"
        >
              适合小型工作室
        </span>
      </router-link>

    </div>
    
    <!-- Alert advanced-->
    <Alert v-show="flag11">
      <div class="alert-content p-5"  @closee="close1">
        <h2>高级版-标题1</h2>
        <div class="fs-black-7 fs-ss pt-4">高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文高级版正文</div>
      </div>
    </Alert>

    <!-- Alert customize-->
    <Alert v-show="flag22"  @closee="close2">
      <div class="alert-content p-5">
        <h2>定制版-标题1</h2>
        <div class="fs-black-7 fs-ss pt-4">定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文定制版正文</div>
      </div>
    </Alert>
    
    <router-view :flag='flag1'></router-view>
  </div>
</template>

<script>
import Alert from '../components/Alert'
export default {
  data() {
    return {
      // 转换颜色
      flag1: true,
      flag2: false,
      // 展示弹框组件
      flag11: true,
      flag22: false,
      // 路由参数
      id: 'advanced',
      id1: 'customize',
    }
  },
  components: {
    // 弹框组件
    Alert
  },
  methods: {
    // 头部高亮
    changeColor() {
      if(this.$route.params.id === 'advanced'){
        this.flag1 = true;
        this.flag2 = false;
        // 如果点过一次了，那么不再弹出
        if(localStorage.getItem('advanced') === this.id){
          this.flag11 = false
        }
      }else if(this.$route.params.id === 'customize'){
        this.flag1 = false;
        this.flag2 = true;
        if(localStorage.getItem('customize') !== this.id1){
            localStorage.setItem('customize', this.id1)
            this.flag22 = true
          }else{
            this.flag22 = false
          }
      }
    },
    close1() {
        this.flag11 = false
    },
    close2() {
        this.flag22 = false
      }
  },
  created() {
    this.changeColor()
    if(localStorage.getItem('advanced') !== this.id){
      localStorage.setItem('advanced', this.id)
    }
  }
}
</script>

<style lang="scss">
 @import '../assets/scss/_variables.scss';
 .active {
   background: map-get($map: $colors, $key: 'red-3');
   border: 1px solid map-get($map: $colors, $key: 'red-4' );
   color: map-get($map: $colors, $key: 'red-1');
   transition: all 0.5s ease;
 }
 .no-active {
   background: map-get($map: $colors, $key: 'black-3');
   border: 1px solid map-get($map: $colors, $key: 'black-4' );
   color: map-get($map: $colors, $key: 'black-1')
 }
 .smallFont{
   transition: all 0.5s ease;
 }
</style>