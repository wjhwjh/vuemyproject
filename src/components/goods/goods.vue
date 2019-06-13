<template>
  <div class="good">
    <!--左边-->
    <div class="menu-wrap" ref="menuWrap">
      <ul class="menu">
        <li class="item" v-for="(item, index) in goodData" :class="{'current' : getIndex === index}"
            @click="selectMenu(index, $event)">
          <div class="cont">
            <span class="icon" v-if="item.type > 0" :class="classMap[item.type]"> </span>{{ item.name }}
          </div>
        </li>
      </ul>
    </div>

    <!--右边-->
    <div class="good-wrap" ref="foodWrap">
      <ul class="good-list">
        <li class="good-item food-list-hook" v-for="goods in goodData">
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
                <p class="foodPrice"><i class="nowPriceI">￥</i><span class="nowPrice">{{item.price}}</span><span
                  v-show="item.oldPrice" class="normalPrice">￥{{item.oldPrice}}</span></p>
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


    <!--购物车-->
    <shop-cart :minPrice = "seller.minPrice" :deliveryPrice ="seller.deliveryPrice"></shop-cart>

  </div>
</template>

<script>
  import foot from '../shopcart/shopcart'
  import BScroll from 'better-scroll'

  let ERR_OK = 0
  export default {
    data () {
      return {
        goodData: [],
        scrollHeightArr: [],
        scrollY: 0
      }
    },
    components: {
      'shopCart': foot
    },
    props:{
      seller: {
        type:Object
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
              this._calculateHeight()
            })
          }
        })
    },
    // vue里实时的计算
    computed: {
      // 右侧商品滚动映射到左边菜单栏时的计算
      getIndex () {

        //console.log(this)
        let len = this.scrollHeightArr.length
        for (let i = 0; i < len; i++) {
          let height1 = this.scrollHeightArr[i]
          let height2 = this.scrollHeightArr[i + 1]
          if (!height2 || this.scrollY >= height1 && this.scrollY < height2) {
            return i
          }
        }
        return 0
      }
    },
    methods: {
      // 商品内容和左侧的菜单可以滚动
      _initScroll () {
        // console.log(this.$refs.menuWrap)
        this.menuScroll = new BScroll(this.$refs.menuWrap, {
          click: true  // 这里设置为true, 才可以给menu注册点击事件，否则滚动事件是阻止点击事件的
        })
        this.foodScroll = new BScroll(this.$refs.foodWrap, {
          probeType: 3 // 当food部分滚动的时候，可以检测到滚动的位置
        })
        // 通过on可以监听当前滚动的位置
        this.foodScroll.on('scroll', pos => {
          this.scrollY = Math.abs(Math.round(pos.y))
          // console.log(this.scrollY);
        })

      },

      // 把每一个模块的区间存放在数组中
      _calculateHeight () {
        let elLi = this.$refs.foodWrap.getElementsByClassName('food-list-hook')
        //console.log(elLi[0].clientWidth);
        let height = 0
        this.scrollHeightArr.push(height)
        // clientHeight
        for (let i = 0, len = elLi.length; i < len; i++) {
          height += elLi[i].clientHeight
          this.scrollHeightArr.push(height)
        }
        //console.log(this.scrollHeightArr)
      },

      // 左边菜单映射
      selectMenu (index, event) {
        //console.log(index)
        //console.log(event)
        if (!event._constructed) {
          return
        }
        // 获取右边商品列表
        let foodList = this.$refs.foodWrap.getElementsByClassName('food-list-hook')

        // 获取与点击索引值相同的商品模块
        let el = foodList[index]

        // 直接使用，跳转到对应的模块，简直太方便了
        this.foodScroll.scrollToElement(el, 300)

        console.log( this.seller.sellerD );

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
        .item
          padding: 0 12px
          display: table
          width: 100%;
          height: 54px
          font-size: 12px
          color: rgb(7, 17, 27)
          font-weight: 200
          line-height: 14px
          border-1px(rgba(7, 17, 27, 0.1))
          &.current
            background: #fff
            font-weight: bold
            margin-top: -1px
            border-no()
          &:after
            width: 56px
            left: 50%
            margin-left: -28px
            top: auto
            bottom: 0
          &:last-child
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
            color: rgb(147, 153, 159)
            background: #f3f5f7
            padding-left: 14px
            border-left: 2px solid #d9dde1
            height: 26px
            line-height: 26px
            margin-bottom: 13px
          .item-list
            width: 100%
            padding: 0 13px
          .item
            display: flex
            margin-bottom: 13px
            padding-bottom: 13px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            position: relative
            &:last-child
              border-bottom: none
              margin-bottom: 0
            .img
              width: 57px
              border-radius: 4px
              & > img
                width: 100%
                height: auto
            .desc
              flex: 1
              padding-left: 10px
              .foodTit
                font-size: 14px
                color: rgb(7, 17, 27)
                padding-bottom: 8px
              .foodDesc
                font-size: 10px
                color: rgb(147, 153, 159)
                padding-bottom: 8px
              .foodResult
                font-size: 10px
                color: rgb(147, 153, 159)
                padding-bottom: 8px
              .foodPrice
                font-size: 14px
                color: rgb(240, 20, 20)
                font-weight: bold
                .nowPriceI
                  font-weight: normal
                  font-size: 10px
                .normalPrice
                  font-size: 10px
                  color: rgb(147, 153, 159)
                  padding-left: 8px
                  text-decoration: line-through

            .btnBox
              position: absolute
              right: 0
              bottom: 5px
              display: flex;
              align-items: stretch
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


</style>
