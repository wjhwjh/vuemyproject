<template>
  <div class="good">
    <!--左边-->
    <div class="menu-wrap" ref="menuWrap">
      <ul class="menu">
        <li class="item" v-for="item in goodData">
          <div class="cont">
            <span class="icon" v-if="item.type > 0" :class="classMap[item.type]"> </span>{{ item.name }}
          </div>
        </li>
      </ul>
    </div>

    <!--右边-->
    <div class="good-wrap" ref="foodWrap">
      <ul class="good-list">
        <li class="good-item" v-for="goods in goodData">
          <h2 class="good-title">{{goods.name}}</h2>
          <ul class="item-list">
            <li class="item" v-for="item in goods.foods">
              <div class="img">
                <img :src="item.image" alt="">
              </div>
              <div class="desc">
                 <h3 class="foodTit">{{item.name}}</h3>
                 <p class="foodDesc">{{item.description}} </p>
                 <p class="foodResult">月售{{item.sellCount}}份 好评率{{item.rating}}%</p>
                 <p class="foodPrice"><i class="nowPriceI">￥</i><span class="nowPrice">{{item.price}}</span><span v-show="item.oldPrice" class="normalPrice">￥{{item.oldPrice}}</span></p>
              </div>


              <div class="btnBox">
                <span class="leftBtn icon-remove_circle_outline"></span>
                <span class="goodNum">1</span>
                <span class="rightBtn icon-add_circle"></span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  let ERR_OK = 0
  export default {
    data () {
      return {
        goodData: [],
        icon: 'icon',
        classMap: []
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']

      this.$ajax.get('/goods')
        .then((res) => {
          //console.log(res.data)
          let resData = res.data
          if (resData.errno === ERR_OK) {
            this.goodData = resData.data

            this.$nextTick(() => {
              this._initScroll()
            })
          }
        })
    },
    methods: {
      _initScroll () {
        console.log(this.$refs.menuWrap)
        this.menuScroll = new BScroll(this.$refs.menuWrap, {})
        this.foodScroll = new BScroll(this.$refs.foodWrap, {})
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .good
    position: absolute
    top: 174px
    bottom: 50px
    left: 0
    width: 100%
    // height: 100%
    overflow: hidden
    display: flex
    .menu-wrap
      flex: 0 0 80px
      width: 80px
      background: #f3f5f7
      .menu
        width: 100%
        padding: 0 12px
        .item
          display: table
          height: 54px
          font-size: 12px
          color: rgb(7, 17, 27)
          font-weight: 200
          line-height: 14px
          border-1px(rgba(7, 17, 27, 0.1))
          &:first-child
            border-no()
          .cont
            display: table-cell
            vertical-align: middle
            line-height: 14px
            .icon
              width: 14px;
              height: 14px;
              display: inline-block
              background-size: 100%
              background-repeat: no-repeat
              margin-right: 4px
              vertical-align: middle
              &.decrease
                bg-image(decrease_1)
              &.discount
                bg-image(discount_1)
              &.guarantee
                bg-image(guarantee_1)
              &.invoice
                bg-image(invoice_1)
              &.special
                bg-image(special_1)
    .good-wrap
      flex: 1
      .good-list
        padding: 0
        .good-item
          width: 100%
          .good-title
            font-size: 12px
            color :rgb(147,153,159)
            background: #f3f5f7
            padding-left: 14px
            border-left :2px solid #d9dde1
            height: 26px
            line-height: 26px
            margin-bottom: 13px
          .item-list
            width: 100%
            padding:0 13px
          .item
            display: flex
            margin-bottom: 13px
            padding-bottom: 13px
            border-bottom :1px solid rgba(7, 17, 27, 0.1)
            position: relative
            &:last-child
              border-bottom :none
              margin-bottom: 0
            .img
              width: 57px
              border-radius :4px
              & > img
                width: 100%
                height: auto
            .desc
              flex: 1
              padding-left: 10px
              .foodTit
                font-size :14px
                color :rgb(7,17,27)
                padding-bottom: 8px
              .foodDesc
                font-size :10px
                color :rgb(147,153,159)
                padding-bottom: 8px
              .foodResult
                font-size :10px
                color :rgb(147,153,159)
                padding-bottom: 8px
              .foodPrice
                font-size :14px
                color :rgb(240,20,20)
                font-weight: bold
                .nowPriceI
                  font-weight:normal
                  font-size :10px
                .normalPrice
                  font-size :10px
                  color :rgb(147,153,159)
                  padding-left: 8px
                  text-decoration :line-through



            .btnBox
              position: absolute
              right: 0
              bottom: 5px
              display :flex;
              align-items :stretch
              .leftBtn, .rightBtn
                font-size :24px
                line-height :24px
              .leftBtn
                color :rgb(0,160,220)
              .rightBtn
                 color :rgb(0,160,220)
              .goodNum
                font-size :10px
                color :rgb(147, 153, 159)
                line-height :24px
                width: 24px
                text-align :center







</style>
