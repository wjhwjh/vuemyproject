<template>
  <div id="app">
    <div class="headWrap">
      <v-header :seller = "sellerData"></v-header>
    </div>
    <ul class="tab">
      <li class="act">
        <router-link :to="{ path:'/goods'}">商品</router-link>
      </li>
      <li>
        <router-link :to="{ path:'/ratingselect'}">评价</router-link>
      </li>
      <li>
        <router-link :to="{ path:'/seller'}">商家</router-link>
      </li>
    </ul>
    <router-view :seller="{'sellerD': sellerData}"></router-view>


  </div>
</template>

<script>
  let ERR_OK = 0

  export default {
    data () {
      return {
        sellerData:{},
        height: ''
      }
    },
    created(){
      this.$ajax.get('/sellers').then((res)=>{
       // if (res.data.errno === ERR_OK) this.sellerData = res.data.data;
      })
    },
    methods:{
      changeWindow(){
        const _this = this;
        this.height = document.documentElement.clientHeight
        window.onresize = ()=>{
            console.log(this)
            this.height = document.documentElement.clientHeight

            console.log(this.height)

        }
      }
    },
    watch:{
     height() {
          this.changeWindow(this.height)
     }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/mixin.styl";
  .tab
    display: flex
    height: 40px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    li
      line-height: 40px
      font-size: 14px
      flex: 1
      text-align: center
      &.act>a
        color: rgb(240, 20, 20)
      &>a
        color: rgb(77, 85, 93)
</style>
