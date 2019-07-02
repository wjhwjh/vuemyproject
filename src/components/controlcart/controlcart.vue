<template>
  <div class="controlBox">
    <div class="btnBox">
      <transition name="fade" appear:false css:false >
      <span class="leftBtn icon-remove_circle_outline" @click.stop="reduceNum" v-show="food.count > 0"></span>
      </transition>
      <transition name="fade" mode="out-in" appear>
      <span class="goodNum" v-show="food.count > 0">{{food.count}}</span>
      </transition>
      <span class="rightBtn icon-add_circle" @click.stop="addNum"></span>
    </div>
  </div>
</template>

<script>
 import Vue from 'vue'
 import connect from '../connect/connect'
  export default {
    data(){
      return {
      }
    },
    props:{
     food: {
      type:Object
     }
    },
    methods: {
      // 添加商品
      addNum(){
        if(!this.food.count){
           Vue.set(this.food, 'count', 1)
        }else {
          this.food.count++
        }
       // 抛物线动画
       connect.$emit('cartAdd', event.target)
      },
      reduceNum(){
        this.food.count--
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .controlBox
    width: 80px
    .btnBox
      display: flex;
      align-items: stretch
      justify-content: flex-end;
      .leftBtn, .rightBtn
        font-size: 24px
        line-height: 24px
        transition:all 0.4s
      .leftBtn
        color: rgb(0, 160, 220)
        // vue里动画设置， active肯定是要有的，指的是元素进入的
        &.fade-enter-active, &.fade-leave-active
          opacity :1
          transition:all 0.4s
          transform :translate3d(0,0,0) rotate(0)
        // enter也是要有的，
        &.fade-enter, &.fade-leave-to
          opacity: 0
          transition:all 0.4s
          transform :translate3d(24px,0,0) rotate(180deg)
      .rightBtn
        color: rgb(0, 160, 220)
      .goodNum
        font-size: 10px
        color: rgb(147, 153, 159)
        line-height: 24px
        width: 24px
        text-align: center
        transition:all 0.4s
        &.fade-enter-active, &.fade-leave-active
          opacity :1
          transition:all 0.4s
        &.fade-enter, &.fade-leave-to
          opacity: 0


</style>
