<template>
  <div id="app">
    <div class="headWrap">
      <v-header></v-header>
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
    <!-- <div class="content"></div>-->
    <router-view></router-view>

    <v-foot></v-foot>
  </div>
</template>

<script>
  import foot from './components/foot/foot'

  export default {
    data () {
      return {}
    },
    components: {
      'v-foot':foot
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
      color: rgb(77, 85, 93)
      flex: 1
      text-align: center
      &.act
        color: rgb(240, 20, 20)
</style>
