<template>
  <div class="foodDetail">
    <div class="foodContent">
      <!--头部-->
      <div class="headImg">
        <div class="img"><img :src="foodDetailData.image" class="img" alt=""></div>
      </div>
      <!--内容部分-->
      <div class="cont">
        <div class="top">

          <h2 class="tit">{{foodDetailData.name}}</h2>
          <div class="result">月售{{foodDetailData.sellCount}}份, 好评率{{foodDetailData.rating}}%</div>

          <p class="price">
            <span class="nowPrice">￥</span>{{foodDetailData.price}}
            <span class="oldPrice" v-if="foodDetailData.oldPrice">￥{{foodDetailData.oldPrice}}</span>
          </p>

          <div class="buy" @click="buy" v-if="foodDetailData.count===0 || !foodDetailData.count">加入购物车</div>

          <div class="controlCartBox">
            <controlcart :food="foodDetailData"></controlcart>
          </div>
        </div>

        <div class="desc">
          <h2 class="tit">
            {{seller.name}}
          </h2>
          <p class="text">
            {{seller.bulletin}}
          </p>
        </div>
        <div class="ratingDiv">
          <h2 class="tit">商品评价</h2>
          <ratingselect :ratings="ratingData.ratings" :des = "des"></ratingselect>
          <ul class="ratingList clearFix">
            <li class="ratingItem">
              <div class="ratingTop">
                <div class="time">2016-07-07 12:34</div>
                <div class="user">
                  <p class="tel">13681472640</p>
                  <p class="person"><img src="./header.jpg" alt=""></p>
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
      </div>
    </div>
  </div>
</template>

<script>
  import ratingselect from '../ratingselect/ratingselect'
  import controlcart from '../controlcart/controlcart'
  import connectcart from '../controlcart/connectcart'

  let ERRO_OK = 0

  export default {
    data () {
      return {
        ratingData: [],
        des: {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    },
    props: {
      foodDetailData: {
        type: Object
      },
      seller: {
        type: Object
      }
    },
    created () {
      this.$ajax.get('/ratings').then((res) => {
        let dataObj = res.data
        if (dataObj.errno === ERRO_OK) {
          // console.log(dataObj.data)
          this.ratingData = dataObj.data
          // console.log(this.ratingData)
        }
      })
    },
    mounted () {
      // 父组件向子组件传递参数
      this.$on('cartAdd', (target) => {
        this.$nextTick(() => {
          this.$refs.shopcartwrap.drop(target)
        })
      })
     //  console.log(this.foodDetailData.ratings)

    },
    methods: {
      buy () {
        this.$set(this.foodDetailData, 'count', 1)
      }
    },
    computed: {},
    components: {
      ratingselect,
      controlcart
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl"
  .foodDetail
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 10
    background: #f3f5f7
    overflow-y: auto
    .foodContent
      /*height: 800px*/
      .headImg
        width: 100%
        padding-top: 100%
        background: #000
        position: relative
        .img
          position: absolute
          top: 0
          left: 0
          width: 100%
          height: auto
          z-index: 1
      .cont
        .top
          background: #fff
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          margin-bottom: 16px
          padding: 18px
          position: relative
          .buy
            width: 74px
            height: 24px
            border-radius: 12px
            text-align: center
            line-height: 24px
            color: #fff
            font-size: 10px
            background: rgb(0, 160, 220)
            position: absolute
            right: 18px
            bottom: 18px
            z-index: 2
          .controlCartBox
            position: absolute
            right: 18px
            bottom: 18px
            z-index: 1
          .tit
            f-28()
            font-weight: bold
            line-height: 14px
          .result
            font-size: 12px
            color: rgb(147, 153, 159)
            padding: 8px 0 18px
          .price
            font-size: 24px
            color: rgb(240, 20, 20)
            line-height: 24px
            font-weight: bold
            .nowPrice
              font-size: 16px
              font-weight: normal
            .oldPrice
              font-size: 20px
              color: rgb(147, 153, 159)
              line-height: 20px
              text-decoration: line-through;
              padding-left: 10px
        .desc
          background: #fff
          border-top: 1px solid rgba(7, 17, 27, 0.1)
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          padding: 18px
          .tit
            f-28()
            padding-bottom: 6px
          .text
            font-size: 12px
            color: rgb(77, 85, 93)
            line-height: 24px
        .ratingDiv
          background: #fff
          border-top: 1px solid rgba(7, 17, 27, 0.1)
          margin-top: 16px
          padding: 18px
          .tit
            font-size: 14px
            color: #07111b
            padding-bottom: 12px
          .ratingList
            width: 100%
            padding-bottom: 60px;
          .ratingItem
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            padding: 16px 0
            .ratingTop
              font-size: 12px
              color: rgb(147, 152, 159)
              display: flex
              padding-bottom: 6px
              .time
                flex: 1
              .user
                flex: 1
                text-align: right;
                .tel
                  font-size: 10px
                  color: rgb(147, 153, 159)
                  line-height: 12px
                  padding-right: 6px
                  display: inline-block
                .person
                  width: 12px
                  height: 12px
                  display: inline-block
                  & > img
                    width: 100%
                    height: 100%
                    border-radius: 100%
            .ratingText
              font-size: 12px
              color: rgb(7, 17, 27)
              line-height: 16px


</style>
