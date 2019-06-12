<template>
  <div class="cartWrap">
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
    <div class="bg"></div>
    <div class="cartFood">
        <div class="cartTit">
          购物车 <span class="clear">清空</span>
        </div>
        <ul class="cartList">
          <li class="item">
              <h3 class="footTit"></h3>
              <div class="cart"></div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
   @import "../../common/stylus/mixin.styl"
  .cartWrap
    position: fixed
    bottom: 0
    left: 0
    width: 100%
    height: 50px
    z-index :11
  .foot
    height: 50px
    background: #141d27
    width: 100%
    position: relative;
    z-index: 2;
    .price
      position: absolute
      left: 80px
      bottom: 20%
      height: 60%
      display: inline-flex
      line-height: 30px
      .right
        padding-left: 12px
        font-size: 16px
        color: rgba(255, 255, 255, 0.4)
      .left
        padding-right: 12px
        font-size: 16px
        color: rgba(255, 255, 255, 0.4)
        font-weight: 700
        border-right: 1px solid rgba(255, 255, 255, 0.1)
    .cart
      position: absolute
      bottom: 0
      left: 11px
      width: 58px
      height: 58px
      border-radius: 100%
      background: #141d27
      padding-top: 7px
      &:after
        content: ''
        display: block
        clear: both
        width: 44px;
        height: 44px;
        border-radius: 100%
        background: rgba(255, 255, 255, 0.1)
        margin: auto
      & > div
        position: absolute
        z-index: 1
        left: 0
        top: 0
        width: 100%
        height: 100%
        text-align: center
        line-height: 58px
        font-size: 24px
        color: rgba(255, 255, 255, 0.4)
    .result
      width: 105px
      font-size: 12px
      color: rgba(255, 255, 255, 0.4)
      font-weight: 700
      line-height: 48px
      height: 50px
      text-align: center
      background: rgba(255, 255, 255, 0.1)
      float: right
  .bg
    position :fixed
    left :0
    top: 0
    width: 100%
    height: 100%
    background :rgba(7,17,27,0.6)
    display :none
  .cartFood
    position :fixed
    left :0
    bottom: 0
    width: 100%
    height: 50%
    background :rgba(255,255,255,1)
    z-index :1
    display :none
    .cartTit
      bg-global()
      height: 40px
      vertical-align: middle
      border-bottom :1px solid rgba(7,17,27,0.1)
      padding :0 18px
      f-28()
      line-height: 40px
      .clear
        float: right
        display: inline-block
        line-height: 40px
        font-size :12px
        color :rgb(0,160, 220)
    .cartList
      padding :0 18px
      .item
        border-bottom :1px solid rgba(7,17,27,0.1)
        display:flex
</style>
