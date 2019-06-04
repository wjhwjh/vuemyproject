<template>
  <div class="head">
    <!--优惠个数-->
    <div class="headNum" @click="popShow">
      <span>5个</span><i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--背景-->
    <div class="bg"><img src="./header.jpg" alt=""></div>
    <!--中间内容-->
    <div class="headerContent">
      <div class="left">
        <img src="./header.jpg" alt="">
      </div>
      <div class="desc">
        <h2 class="title"><span>粥品香坊(大运村)</span></h2>
        <div class="sendStyle">蜂鸟转送/ <span>38分钟送达</span></div>
        <p class="descText">在线支付满28减5，满50减10</p>
      </div>
    </div>
    <!--公告-->
    <div class="headNotice" @click="popShow">
      <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融和现代制作工艺</p>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--弹窗-->
    <div class="headPop" v-show="popFlag">
      <h2>粥品香坊（大运村）</h2>
      <ul class="evaluate">
        <li></li>
      </ul>
      <h3><span></span>优惠信息<span></span></h3>
      <ul class="discount">
        <li>在线支付满28减5，满50减10</li>
        <li>单人精彩赛</li>
        <li>清肺雪梨汤8折抢购</li>
        <li>特价饮品八折抢购</li>
        <li>单人特色套餐</li>
      </ul>
      <h3><span></span>商家公告<span></span></h3>
      <p class="sellerDetail">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深的消费者青睐，发展至今成为粥类引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </p>

      <div class="closePop icon-close" @click="popHide"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data (){
     return {
      popFlag:false
     }
    },
    methods: {
      popShow(){
        this.popFlag = !this.popFlag
      },
      popHide(){
        this.popFlag = !this.popFlag
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //引用公共的后缀为styl的样式文件，图片的兼容
   @import "../../common/stylus/mixin.styl";
  .head
    position: relative
    overflow: hidden
    color: #ffffff
    background: rgba(7, 17, 27, 0.5)
    padding-bottom: 28px
    //公告提示
    .headNotice
      position: absolute
      padding: 0 12px
      height: 28px
      background: rgba(7, 17, 27, 0.2)
      z-index: 2
      width: 100%
      left: 0
      bottom: 0
      i
        position: absolute;
        font-size: 10px;
        right: 8px;
        top: 50%;
        margin-top: -5px;
      p
        width: 100%
        display: inline
        float: left
        text-align: center
        line-height: 28px
        font-size: 10px
        font-weight: 200
        text-overflow ellipsis
        white-space: nowrap
        overflow: hidden
        padding: 0 14px 0 26px
        position: relative
        cursor: pointer
        &:before
          content: ''
          display: inline-block
          clear: both
          width: 22px
          height: 12px
          position: absolute
          left: 0
          top: 50%
          margin-top: -5px
          bg-image('bulletin') // brand看作一个参数
          background-size: 100%
          background-repeat: no-repeat
    // 优惠个数
    .headNum
      position: absolute
      width: 43px
      height: 24px
      z-index: 2
      border-radius: 24px
      background: rgba(0, 0, 0, 0.2)
      text-align: center
      line-height: 24px
      font-size: 10px
      font-weight: 200
      right: 12px
      bottom 40px
      cursor: pointer
      span
        padding-left: 4px
        display: inline-block
      i
        font-size: 10px
        margin-left: 2px
    // 弹窗
    .headPop
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(7, 17, 27, 0.8)
      z-index: 99
      color: #fff
      padding: 64px 36px 0
      .closePop
        position: absolute
        font-size :32px
        bottom :32px
        left :50%
        margin-left:-16px
        color :rgba(255,255,255,0.5)
      .sellerDetail
        font-size: 14px
        font-weight: 200
        line-height: 2
        padding: 24px
        text-align: justify
      h2
        font-size: 16px
        font-weight: 700
        text-align: center
      .evaluate
        margin: auto
        overflow: hidden
        width: 100%
        padding: 16px 0 28px
      h3
        font-size: 14px
        font-weight: 700
        margin-bottom: 12px
        text-align: center
        position: relative
        overflow: hidden
        span
          border-1px(rgba(255, 255, 255, 0.2))
          position: absolute
          display: inline-block
          width: 112px
          top: 50%
        span:nth-child(1)
          left: 0
        span:nth-child(2)
          right: 0
      .discount // 优惠
        width: 100%
        margin: auto
        padding: 0 12px 28px 12px
        li
          padding: 12px 0 12px 24px
          font-size: 14px
          font-weight: 200
          position: relative
          &:before
            content: ''
            display: block
            clear: both
            width: 16px
            height: 16px
            background-size: 100%
            background-repeat: no-repeat
            position: absolute
            top: 50%
            left: 0
            margin-top: -8px
        li:nth-child(1)
          &:before
            bg-image(decrease_2)
        li:nth-child(2)
          &:before
            bg-image(discount_1)
        li:nth-child(3)
          &:before
            bg-image(discount_1)
        li:nth-child(4)
          &:before
            bg-image(special_1)
        li:nth-child(5)
          &:before
            bg-image(special_1)
    // 中间内容
    .headerContent
      padding: 24px 12px 18px 24px
      font-size: 0
      position: relative
      overflow: hidden
      .desc
        float: left
        height: 64px
        padding-left: 16px
        color: #fff
        .descText
          font-size: 12px
          font-weight: 200
          line-height: 0.99
          &:before
            content: ''
            display: inline-block
            clear: both
            width: 12px
            height: 12px
            float: left
            margin-right: 4px
            bg-image('decrease_1') // brand看作一个参数
            background-size: 100%
            background-repeat: no-repeat
        .sendStyle
          font-size: 12px
          padding: 8px 0 10px
          font-weight: 200
          line-height: 1
        .title
          font-size: 16px
          font-weight: bold
          line-height: 18px
          &:before
            content: ''
            display: inline-block
            clear: both
            width: 30px
            height: 18px
            float: left
            margin-right: 6px
            bg-image('brand') // brand看作一个参数
            background-size: 100%
            background-repeat: no-repeat
      .left
        width: 64px
        height: 64px
        float: left
        img
          width: 100%
          display: block
          border-radius: 4px
    // 背景
    .bg
      position: absolute;
      width: 100%
      height: 100%
      z-index: -1
      top: 0
      left: 0
      img
        width: 100%
        height: 100%
        display: block
        filter: blur(10px);

</style>
