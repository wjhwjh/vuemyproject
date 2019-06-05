<template>
  <div class="foot">

     <div class="cart">
        <div class="icon-shopping_cart">
        </div>
     </div>
     <div class="price">
       <div class="left">
         ￥0
       </div>
       <div class="right">
         另需配送费￥4元
       </div>
     </div>
     <div class="result">
       ￥20元起
     </div>
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .foot
    height: 50px
    background :#141d27
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    .price
      position: absolute
      left: 80px
      bottom: 20%
      height: 60%
      display: inline-flex
      line-height :30px
      .right
        padding-left: 12px
        font-size: 16px
        color :rgba(255,255,255,0.4)
      .left
        padding-right: 12px
        font-size: 16px
        color :rgba(255,255,255,0.4)
        font-weight:700
        border-right:1px solid rgba(255,255,255,0.1)
    .cart
      position: absolute
      bottom: 0
      left: 11px
      width: 58px
      height: 58px
      border-radius :100%
      background :#141d27
      padding-top: 7px
      &:after
        content: ''
        display: block
        clear: both
        width: 44px;
        height: 44px;
        border-radius :100%
        background :rgba(255,255,255,0.1)
        margin :auto
      &>div
        position:absolute
        z-index: 1
        left: 0
        top: 0
        width: 100%
        height: 100%
        text-align :center
        line-height :58px
        font-size:24px
        color :rgba(255,255,255,0.4)
    .result
      width: 105px
      font-size: 12px
      color :rgba(255,255,255,0.4)
      font-weight:700
      line-height:48px
      height:50px
      text-align:center
      background :rgba(255,255,255,0.1)
      float: right



</style>
