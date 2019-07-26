<template>
  <!--这里的滚动是使用浏览器自带的overflow-y：auto-->

  <div class="foodDetail">

      <div class="foodContent">
        <span class="goBack" @click="$emit('goBack')">返回</span>
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

          <!--评价部分-->
          <div class="ratingDiv">
            <h2 class="tit">商品评价</h2>
            <ratingselect :ratings="foodDetailData.ratings" :des="des" :selectTypeN="selectType"></ratingselect>

            <!--是否有评论，有并且长度为真才显示，否则是假-->
            <ul class="ratingList clearFix" v-show="foodDetailData.ratings && foodDetailData.ratings.length">
              <li class="ratingItem" v-show="needShow(item.rateType, item.text)" v-for="item in ratingData">
                <div class="ratingTop">
                  <div class="time"> {{item.rateTime}}</div>
                  <div class="user">
                    <p class="tel">{{item.username}}</p>
                    <p class="person"><img :src="item.avatar" alt=""></p>
                  </div>
                </div>

                <div class="ratingText">
                  <span></span> {{item.text}}
                </div>
              </li>
            </ul>
            <!--把评论放在当前页面了-->
            <div class="nothingRate" v-show="!foodDetailData.ratings || !foodDetailData.ratings.length">
              暂无评论哦~~
            </div>
          </div>
        </div>
      </div>

  </div>

</template>

<script>
  import ratingselect from '../ratingselect/ratingselect'
  import controlcart from '../controlcart/controlcart'
  import connect from '../connect/connect'

  let ERRO_OK = 0
  const ALL = 2
  export default {
    data () {
      return {
        des: {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        },
        selectType: ALL,
        onlyContent: false
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
      // console.log(this.selectType)
    },
    mounted () {
      // 接收子组件购物车的传递过来的参数
      this.$on('cartAdd', (target) => {
        this.$nextTick(() => {
          this.$refs.shopcartwrap.drop(target)
        })
      })

      // 接收子组件变量rate传递过来的参数, 评论类型参数
      connect.$on('rate', (msg) => {
        this.selectType = msg
      })

      //接收子组件传递过来的参数，控制是否显示全部评价，还是只显示有内容的评价
      // onlyContent默认是false,显示全部，true只显示有内容的评论
      connect.$on('onlyContent', (onlyContent) => {
        this.onlyContent = onlyContent
      })

    },
    methods: {
      buy () {
        this.$set(this.foodDetailData, 'count', 1)
      },
      // needShow方法要写在method里，因为要传参。 注意这个方法是用来控制v-show, v-show的值可以是一个参数
      //
      needShow (type, text) {
        // 先判断是否显示所有的评论，还是只显示有内容的评论
        if (this.onlyContent && !text) {  // 当this.onlyContent为true, text内容为空时评论不显示，也就是return false
          return false
        }

        // 如果上述this.onlyContent为true, text为true时，if不执行，这时展示的是有内容的评论， 则判断当前展示的是 全部评论、满意还是吐槽
        // 如果this.onlyContent为false时, 展示的是全部评论内容，有评论和没有评论的
        if (this.selectType === ALL) {
          return true
        } else {
          return type === this.selectType
        }

      },
      goBack(){

      }
    },
    computed: {
      // 筛选评论数据
      ratingData () {
        /* let rateArr = []
         if(!this.foodDetailData.ratings)return false

         console.log( this.selectType )

         if(this.onlyContent){
           rateArr = this.foodDetailData.ratings.filter(item => {
             if(item.text){
               console.log(item.text)
               return item
             }
           })

           console.log(rateArr);
         }

         switch (this.selectType) {
           case 2:
             rateArr = this.foodDetailData.ratings
             break;
           case 0:
             rateArr = this.foodDetailData.ratings.filter(item => {
               if(item.rateType === this.selectType){
                 return item
               }
             })
             break;
           case 1:
             rateArr = this.foodDetailData.ratings.filter(item => {
               if(item.rateType === this.selectType){
                 return item
               }
             })
             break;
         }
         return rateArr*/

        return this.foodDetailData.ratings
      }
    },
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
          padding-bottom: 100px;
          .nothingRate
            text-align: center
            font-size: 14px
            color: rgb(77, 85, 93)
            padding-top: 40px;
          .tit
            font-size: 14px
            color: #07111b
            padding-bottom: 12px
          .ratingList
            width: 100%
          /*padding-bottom: 60px;*/
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

      .goBack
        position: absolute
        top: 16px
        left: 24px
        z-index: 2
        color: #000
        font-weight: bold
</style>
