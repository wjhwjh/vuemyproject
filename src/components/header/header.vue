<template>
  <div class="head">
    <div class="bg"><img src="./header.jpg" alt=""></div>
    <div class="headerContent">
      <div class="left">
        <img src="./header.jpg" alt="">
      </div>
      <div class="des">

      </div>
    </div>
    <div class="headNotice">

    </div>
    <div class="">

    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .head
    position: relative
    overflow: hidden
    color: #ffffff
    background: rgba(7, 17, 27, 0.5)
    padding-bottom: 56px
    .headerContent
      padding :24px 12px 18px 24px
      font-size :0
      .left
        width :64px
        height: 64px
        img
          width: 100%
          display: block
    .bg
      position: absolute;
      width: 100%
      height: 100%
      z-index: -1
      top: 0
      left: 0
      img
        width: 100%
        height:100%
        display: block
        filter:blur(10px);



</style>
