<template>
  <div class="ratingWrap">
    <h2 class="tit">商品评价</h2>
    <ul class="ratingMenu">
      <li class="item item1">全部</li>
      <li class="item item2">推荐</li>
      <li class="item item3">吐槽</li>
    </ul>

    <div class="tip selected">
      <span class="icon-check_circle"></span><span>只看有内容的评价</span>
    </div>

    <ul class="ratingList clearFix">
      <li class="ratingItem">
        <div class="ratingTop">
          <div class="time">2016-07-07 12:34</div>
          <div class="user">
            <p class="tel"></p>
            <p class="person"></p>
          </div>
        </div>

        <div class="ratingText">
          <span></span> 太少了不够一个人吃
        </div>
      </li>

      <li class="ratingItem">
        <div class="ratingTop">
          <div class="time">2016-07-07 12:34</div>
          <div class="user">
            <p class="tel">13681472560</p>
            <p class="person"></p>
          </div>
        </div>

        <div class="ratingText">
          <span></span> 太少了不够一个人吃
        </div>
      </li>
    </ul>


  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {},
    computed: {},
    mounted () {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .ratingWrap
    padding: 0 18px 58px;
    .tit
      font-size: 14px
      color: #07111b
      padding-bottom:12px
    .ratingMenu
      border-bottom:1px solid rgba(7,17,27,0.1)
      padding-bottom: 18px
      .item
        display:inline-block
        width: 60px
        height: 32px
        margin-right: 8px
        border-radius :2
        color :#fff
        line-height: 32px
        text-align :center
        font-size :12px
        &.item1
          background :rgb(0,160,220)
        &.item2
          background :rgba(0,160,220,0.2)
        &.item3
          background :rgba(77,85,93,0.2)
    .tip
      margin :0 -18px
      border-bottom:1px solid rgba(7,17,27,0.1)
      padding :12px 0 12px 18px
      font-size: 14px
      color: rgb(147,153,159)
      line-height: 24px
      display :flex
      align-items :center
      .icon-check_circle
        color: rgb(147,153,159)
        font-size: 24px
        margin-right: 4px
      &.selected .icon-check_circle
        color: rgb(3,166,3)


    .ratingList
      width: 100%
      .ratingItem
        border-bottom:1px solid rgba(7,17,27,0.1)
        padding :16px 0
        .ratingTop
          font-size: 12px
          color:rgb(147,152,159)
          display: flex
          padding-bottom: 6px
          .time
            flex :1
          .user
            flex :1
        .ratingText
          font-size: 12px
          color:rgb(7,17,27)
          line-height: 16px


</style>
