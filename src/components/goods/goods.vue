<template>
  <div class="good">
    <!--左边-->
    <div class="menu-wrap" ref="menuWrap">
      <ul class="menu">
        <li class="item" v-for="(item, index) in goodData" :class="{'current' : getIndex === index}"
            @click="selectMenu(index, $event)" :key="index">
          <div class="cont">
            <span class="icon" v-if="item.type > 0" :class="classMap[item.type]"> </span>{{ item.name }}
          </div>
        </li>
      </ul>
    </div>

    <!--右边-->
    <div class="good-wrap" ref="foodWrap">
      <ul class="good-list">
        <li class="good-item food-list-hook" v-for="(goods, index) in goodData" :key="index">
          <h2 class="good-title">{{goods.name}}</h2>
          <ul class="item-list">
            <li class="item" v-for="(item, index) in goods.foods" :key="index" @click="selectedFood(item)">
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
              <div class="controlWrap">
                <control-cart :food="item"></control-cart>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!--购物车-->
    <shop-cart ref="shopcartwrap" :selected-food="selectedFoods" :minPrice="seller.minPrice"
               :deliveryPrice="seller.deliveryPrice"></shop-cart>

    <!--商品详情-->
    <transition name="fade">
      <food-detail v-if="detailFlag" :foodDetailData="foodDetailData" :seller="seller" v-on:goBack="goBack"></food-detail>
    </transition>
  </div>
</template>

<script>
  import shopcart from '../shopcart/shopcart'
  import controlcart from '../controlcart/controlcart'
  import foodDetail from '../foodDetail/foodDetail'

  import connect from '../connect/connect'
  import BScroll from 'better-scroll'

  //console.log(controlcart)

  let ERR_OK = 0
  export default {
    data () {
      return {
        goodData: [],
        scrollHeightArr: [],
        scrollY: 0,
        num: 0,
        foodDetailData:{},
        detailFlag:false
      }
    },
    components: {
      'shopCart': shopcart,
      'controlCart': controlcart,
      'foodDetail': foodDetail
    },
    props: {
      seller: {
        type: Object
      }
    },
    created () {
      this.classMap = ['decrease', 'discount', 'guarantee', 'invoice', 'special']
      this.$ajax.get('/goods')
        .then((res) => {
           console.log(res.data)
          let resData = res.data
          if (resData.errno === ERR_OK) {
            this.goodData = resData.data
            // console.log(this.goodData)
            this.$nextTick(() => {
              this._initScroll()
              this._calculateHeight()
            })
          }
        })
    },
    mounted () {
      // 接收由子组件$emit触发的事件，注意写在created这个方法里
      // 箭头函数中的this指向定义时的上下文环境
      connect.$on('cartAdd', (target) => {
        // this.$refs.shopcartwrap.drop(target)

        // 使用nextTick这个接口是未来体验效果更好一些
        this.$nextTick(() => {
          this.$refs.shopcartwrap.drop(target)
        })
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
      },
      // 统计数量有变化的商品，传递给子组件-- 计算属性，这里对数据进行了处理
      // 有则直接用，没有则创造出来，然后直接用
      selectedFoods () {
        let food = []
        this.goodData.forEach((goods) => {
          goods.foods.forEach(item => {
            if (!!item.count) {
              food.push(item)
            }
          })
        })
        return food
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
          probeType: 3, // 当food部分滚动的时候，可以检测到滚动的位置
          click: true
        })
        // 通过on可以监听当前滚动的位置
        this.foodScroll.on('scroll', pos => {
          this.scrollY = Math.abs(Math.round(pos.y))
          // console.log(this.scrollY);
        })

      },

      // 把每一个模块的区间存放在数组中
      _calculateHeight () {
        let elLi = this.$refs.foodWrap.getElementsByClassName('foodDetail-list-hook')
        //console.log(elLi[0].clientWidth);
        let height = 0
        this.scrollHeightArr.push(height)
        // clientHeight
        for (let i = 0, len = elLi.length; i < len; i++) {
          height += elLi[i].clientHeight
          this.scrollHeightArr.push(height)
        }

      },

      // 左边菜单映射
      selectMenu (index, event) {
        if (!event._constructed) {
          return
        }
        // 获取右边商品列表
        let foodList = this.$refs.foodWrap.getElementsByClassName('foodDetail-list-hook')

        // 获取与点击索引值相同的商品模块
        let el = foodList[index]

        // 直接使用，跳转到对应的模块，简直太方便了
        this.foodScroll.scrollToElement(el, 300)
      },
      // 选中商品查看详情
      selectedFood(food, event){
        this.foodDetailData = food
        this.detailFlag = true
      },
      goBack(res){
        //console.log(res);
        this.detailFlag = false
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
    .fade-enter
      left :100%
    .fade-enter-active, .fade-leave-active
      transition:all 0.4s
    .fade-enter-to, .fade-leave
      left :0
    .fade-leave-to
      left :100%
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

            .controlWrap
              position: absolute
              right: 0
              bottom: 5px
              display: flex;


</style>
