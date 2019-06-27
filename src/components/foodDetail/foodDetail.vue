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
          <p class="price"><span class="nowPrice">￥</span>{{foodDetailData.price}}<span class="oldPrice" v-if="foodDetailData.oldPrice">￥{{foodDetailData.oldPrice}}</span></p>
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
           <food-rating></food-rating>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
 import foodRating from './foodRating'

 let ERRO_OK=0

  export default {
    data () {
      return {}
    },
    props: {
      foodDetailData: {
        type: Object
      },
      seller: {
        type: Object
      }
    },
    created(){
      this.$ajax.get('/ratings').then((res)=>{
        let dataObj = res.data
        if(dataObj.errno === ERRO_OK){
           console.log(dataObj.data)
        }
      })
    },
    mounted () {
      console.log(this.seller)
    },
    methods: {},
    computed: {},
    components:{
      foodRating
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
      height: 800px
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
          .tit
            f-28()
            font-weight: bold
            line-height: 14px
          .result
            font-size: 12px
            color: rgb(147, 153, 159)
            padding :8px 0 18px
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
          background :#fff
          border-top: 1px solid rgba(7, 17, 27, 0.1)
          border-bottom: 1px solid rgba(7, 17, 27, 0.1)
          padding: 18px
          .tit
            f-28()
            padding-bottom :6px
          .text
            font-size: 12px
            color: rgb(77, 85, 93)
            line-height: 24px
        .ratingDiv
          background :#fff
          border-top: 1px solid rgba(7, 17, 27, 0.1)
          margin-top: 16px
          padding :18px 0
</style>
