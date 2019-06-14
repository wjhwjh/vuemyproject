<template>
  <div class="cartWrap">
    <div class="foot">
      <!--购物车-->
      <div class="cart" :class="{'cartSelect': totalPrice}" @click="cartShow">
        <div class="icon-shopping_cart icon"></div>
        <div class="cartNum" v-show="totalPrice">{{totalCount}}</div>
      </div>

      <!--总价和配送费-->
      <div class="price">
        <div class="left" :class="{'highlight': totalPrice}">
          ￥{{totalPrice}}
        </div>
        <div class="right">
          另需配送费￥{{deliveryPrice}}元
        </div>
      </div>
      <!--去结算按钮-->
      <!--结算按钮直接使用总价和最低配送价的表达式控制样式，不需要另外定义一个变量-->
      <div class="result" :class="{totalR: totalPrice>=minPrice}">
        {{totalResult}}
      </div>
    </div>

    <!--商品列表-->
    <div class="bg" v-show="cartPopFlag" @click="cartHidden"></div>
    <div class="cartFood" v-show="cartPopFlag">
      <div class="cartTit">
        购物车 <span class="clear">清空</span>
      </div>
      <ul class="cartList">
        <li class="item">
          <h3 class="footTit">莲子核桃黑米粥</h3>
          <div class="btnBox">
            <span class="price">￥10</span>
            <span class="leftBtn icon-remove_circle_outline"></span>
            <span class="goodNum">1</span>
            <span class="rightBtn icon-add_circle"></span>
          </div>
        </li>
        <li class="item">
          <h3 class="footTit">莲子核桃黑米粥</h3>
          <div class="btnBox">
            <span class="price">￥10</span>
            <span class="leftBtn icon-remove_circle_outline"></span>
            <span class="goodNum">1</span>
            <span class="rightBtn icon-add_circle"></span>
          </div>
        </li>
        <li class="item">
          <h3 class="footTit">莲子核桃黑米粥</h3>
          <div class="btnBox">
            <span class="price">￥10</span>
            <span class="leftBtn icon-remove_circle_outline"></span>
            <span class="goodNum">1</span>
            <span class="rightBtn icon-add_circle"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //  totalPrice: 10,
        // totalFlag: false,
        cartPopFlag: false
      }
    },
    // props接收父组件传递的变量数据，这里是整数，并设置初始默认值
    props: {
      // 父组件传递的所选择的商品
      selectedFood: {
        type: Array,
        default: () => {
          return [
            {
              price: 10,
              count: 1
            }
          ]
        }
      },
      deliveryPrice: {
        type: Number,
        default: 3
      },
      minPrice: {
        type: Number,
        default: 20
      }
    },
    // 用于计算，
    computed: {
      // 计算总价格
      totalPrice () {
        let total = 0
        this.selectedFood.forEach((item) => {
          console.log(item)
          total += item.price * item.count
        })
        return total
      },

      // 计算商品总件数
      totalCount(){
        let allCount = 0
        this.selectedFood.forEach( item => {
          allCount += item.count
        })
        return allCount
      },

      // 结算按钮计算
      totalResult () {
        /*
        * 当小于最低配送价时，显示差价
        * 当大于或是等于最低配送价时，显示‘去结算’
        * 默认是显示是--- 最低配送价格
        * */
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}起送`
        } else if (this.totalPrice < this.minPrice) {
          let price = this.minPrice - this.totalPrice
          return `还差￥${price}起送`
        } else {
          return `去结算`
        }
      },
      fn: v => {
        //console.log(this);
        // console.log(v);
        return v.totalPrice + 2
      }

    },
    // methods方法处理
    methods: {
      // 显示所选商品弹层
      cartShow () {
        //console.log(this);
        if (this.totalPrice > 0) {
          this.cartPopFlag = true

        }
      },
      // 关闭所选商品弹层
      cartHidden () {
        this.cartPopFlag = false
      }
    }

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
    z-index: 11
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
          font-size: 12px
          color: rgba(255, 255, 255, 0.4)
        .left
          padding-right: 12px
          font-size: 16px
          color: rgba(255, 255, 255, 0.4)
          font-weight: 700
          border-right: 1px solid rgba(255, 255, 255, 0.1)
          &.highlight
           color :#fff
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
        .icon
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
        &.cartSelect .icon
          color: #fff
        &.cartSelect:after
          background: #0db6fc
        .cartNum
          position: absolute
          right: 0
          top: 0
          width: 24px
          height: 16px
          border-radius: 16px
          background: #f01414
          text-align: center
          line-height: 16px
          font-size: 9px
          color: #fff
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .result
        width: 105px
        font-size: 14px
        color: rgba(255, 255, 255, 0.4)
        font-weight: 700
        line-height: 48px
        height: 50px
        text-align: center
        background: rgba(255, 255, 255, 0.1)
        float: right
        &.totalR
          background: #42b983
          color: #fff
    .bg
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
      background: rgba(7, 17, 27, 0.6)
      display: block
    // 已选择的商品
    .cartFood
      position: fixed
      left: 0
      bottom: 0
      width: 100%
      height: auto
      background: rgba(255, 255, 255, 1)
      z-index: 1
      display: block
      padding-bottom: 58px
      .cartTit
        bg-global()
        height: 40px
        vertical-align: middle
        border-bottom: 1px solid rgba(7, 17, 27, 0.1)
        padding: 0 18px
        f-28()
        line-height: 40px
        .clear
          float: right
          display: inline-block
          line-height: 40px
          font-size: 12px
          color: rgb(0, 160, 220)
      .cartList
        padding: 0 18px
        .item
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          display: flex
          justify-content: space-between
          padding: 12px 0
          &:last-child
            border-bottom: 0
          .footTit
            f-28()
            line-height: 24px
          .btnBox
            position: relative
            display: flex
            .leftBtn, .rightBtn
              font-size: 24px
              line-height: 24px
            .leftBtn
              color: rgb(0, 160, 220)
            .rightBtn
              color: rgb(0, 160, 220)
            .goodNum
              font-size: 10px
              color: rgb(147, 153, 159)
              line-height: 24px
              width: 24px
              text-align: center
            .price
              font-size: 10px
              color: rgb(240, 20, 20)
              line-height: 24px
              margin-right: 12px
              font-weight: bold

</style>
