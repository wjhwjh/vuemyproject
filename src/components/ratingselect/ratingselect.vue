<template>
  <div class="rateSelectWrap">
    <ul class="ratingMenu">
      <li class="item item1" @click="select(2, $event)" :class="{act: active===2}">{{des.all}} <span>({{ratings.length}})</span>
      </li>
      <li class="item item2" @click="select(0, $event)" :class="{act: active===0}">{{des.positive}} <span>({{positives.length}})</span>
      </li>
      <li class="item item3" @click="select(1, $event)" :class="{act: active===1}">{{des.negative}} <span>({{negatives.length}})</span>
      </li>
    </ul>
    <div class="tip" @click="rateSelect" :class="{'selected':onlyContent}">
      <span class="icon-check_circle"></span><span>只看有内容的评价</span>
    </div>
  </div>
</template>

<script>
  import connect from '../connect/connect'

  const POSITIVE = 0
  const NEGATIVE = 1
  const ALL = 2

  export default {
    data () {
      return {
        active: ALL,
        onlyContent: false
      }
    },
    props: {
      ratings: {
        type: Array,
        default () {
          return []
        }
      },
      des: {
        type: Object,
        default () {
          return {
            all: '全部',
            positive: '满意',
            negative: '不满意'
          }
        }
      }
    },
    created () {
        // console.log(this.selectType)
    },
    methods: {
      select (type, event) {
        if (this.active === type) return
        this.active = type
        //console.log(this.selectType);
        connect.$emit('rate', type)
      },
      rateSelect(){
        this.onlyContent = !this.onlyContent
        connect.$emit('onlyContent', this.onlyContent)
      }
    },
    computed: {
      positives () {
       // console.log(this.ratings)
        return this.ratings.filter((item) => {
         // console.log(item.rateType)
          return item.rateType === POSITIVE
        })
      },
      negatives () {
        return this.ratings.filter((item) => {
          return item.rateType === NEGATIVE
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rateSelectWrap
    .ratingMenu
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      padding-bottom: 18px
      .item
        display: inline-block
        width: 60px
        height: 32px
        margin-right: 8px
        border-radius: 2
        color: #fff
        line-height: 32px
        text-align: center
        font-size: 12px
        &.item1
          background: rgb(0, 160, 220)
        &.item2
          background: rgba(0, 160, 220, 0.2)
        &.item3
          background: rgba(77, 85, 93, 0.2)
        &.act
          background: #42b983
    .tip
      margin: 0 -18px
      border-bottom: 1px solid rgba(7, 17, 27, 0.1)
      padding: 12px 0 12px 18px
      font-size: 14px
      color: rgb(147, 153, 159)
      line-height: 24px
      display: flex
      align-items: center
      .icon-check_circle
        color: rgb(147, 153, 159)
        font-size: 24px
        margin-right: 4px
      &.selected .icon-check_circle
        color: rgb(3, 166, 3)
</style>
