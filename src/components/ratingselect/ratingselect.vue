<template>
    <div class="rateSelectWrap">
      <ul class="ratingMenu">
        <li class="item item1" >{{des.all}} <span>({{ratings.length}})</span> </li>
        <li class="item item2" >{{des.positive}} <span>({{positives.length}})</span> </li>
        <li class="item item3" >{{des.negative}} <span>({{negatives.length}})</span> </li>
      </ul>
      <div class="tip selected">
        <span class="icon-check_circle"></span><span>只看有内容的评价</span>
      </div>

      <div>
        {{ratings}}
      </div>

    </div>
</template>

<script>
 const POSITIVE = 0
 const NEGATIVE = 1
// const ALL = 2

  export default {
    data(){
      return {
      }
    },
    props: {
      ratings: {
       type: Array,
       default(){
        return []
       }
      },
      des: {
       type: Object,
       default(){
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
       }
      }
    },
    created(){

    },
    methods:{
    },
    computed:{
     positives(){
     console.log(this.ratings.length);
      return this.ratings.filter((item)=> {
         return item.rateType === POSITIVE
      })
     },
     negatives(){
       return this.ratings.filter((item)=> {
         return item.rateType === NEGATIVE
       })
     }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rateSelectWrap
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
</style>
