<template>
  <div class="head">
  <!--优惠个数-->
    <div class="headNum">

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
          <div>蜂鸟转送/ <span>38分钟送达</span></div>
          <p>在线支付满28减5，满50减10</p>
      </div>
    </div>
    <!--公告-->
    <div class="headNotice">
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
  @import "../../common/stylus/mixin.styl";
  .head
    position: relative
    overflow: hidden
    color: #ffffff
    background: rgba(7, 17, 27, 0.5)
    padding-bottom: 56px
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
      .desc
        float: left
        height: 64px
        padding-left:16px
        .title
          font-size:16px
          color: #fff
          font-weight: bold
          &:before
           content: ''
           display: inline-block
           clear :both
           width: 30px
           height: 18px
           float: left
           margin-right: 6px
           bg-image('brand')
           background-size :100%
           background-repeat :no-repeat

      .left
        width: 64px
        height: 64px
        float: left
        img
          width: 100%
          display: block
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
