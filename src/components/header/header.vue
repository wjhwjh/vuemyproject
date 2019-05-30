<template>
  <div class="head">
    <!--优惠个数-->
    <div class="headNum">
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
    <div class="headNotice">
      <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融和现代制作工艺</p>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!--弹窗-->
    <!-- <div class="headPop">
     </div>-->
  </div>
</template>

<script>
  export default {}
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
      padding :0 12px
      height :28px
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
        white-space :nowrap
        overflow :hidden
        padding :0 14px 0 26px
        position: relative
        cursor :pointer
        &:before
          content: ''
          display: inline-block
          clear: both
          width: 22px
          height: 12px
          position: absolute
          left :0
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
      cursor :pointer
      span
        padding-left :4px
        display: inline-block
      i
        font-size :10px
        margin-left: 2px
    // 弹窗
    .headPop
      position: fixed
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: rgba(0, 0, 0, 0.5)
      z-index: 99
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
