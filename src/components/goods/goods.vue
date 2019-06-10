<template>
  <div class="good">
    <!--左边-->
    <div class="menu-wrap">
      <ul class="menu">
        <li class="item" v-for="item in goodData">
           <div class="cont">
              <span class="icon"  v-if="item.type > 0" :class="classMap[item.type]"> </span>{{ item.name }}
           </div>
        </li>
      </ul>
    </div>

    <!--右边-->
    <div class="good-wrap">
        <ul class="good-list">
          <li class="good-item" v-for="goods in goodData">
            <h2 class="good-title">{{goods.name}}</h2>
            <ul class="item-list">
              <li class="item" v-for="item in goods.foods">
                 <div class="img">
                   <img :src= "item.image"  alt="">

                 </div>
                 <div class="desc">

                 </div>
              </li>
            </ul>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
  let erro_KEY = 0;
  export default {
    data () {
      return {
        goodData: [],
        icon: 'icon',
        classMap: []
      }
    },
    created () {
     this.classMap = ['decrease' , 'discount', 'guarantee', 'invoice', 'special'];

      this.$ajax.get('/goods')
        .then((res) => {
           console.log(res.data)
           let resData = res.data;
           if(resData.errno === erro_KEY){
             this.goodData = resData.data
             console.log(this.goodData)
           }
        })
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixin.styl";
  .good
    position: absolute
    top:174px
    bottom: 50px
    left: 0
    width: 100%
    // height: 100%
    overflow :hidden
    display: flex
    .menu-wrap
      flex :0 0 80px
      width: 80px
      background :#f3f5f7
      .menu
        width: 100%
        padding :0 12px
        .item
          display :table
          height: 54px
          font-size: 12px
          color :rgb(7,17,27)
          font-weight:200
          line-height:14px
          border-1px(rgba(7,17,27,0.1))
          .cont
            display :table-cell
            vertical-align: middle
            line-height :14px
            .icon
              width: 14px;
              height: 14px;
              display: inline-block
              background-size: 100%
              background-repeat: no-repeat
              margin-right: 4px
              vertical-align :middle
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
      flex :1
      .good-list
        padding: 0
        .good-item
          width: 100%
          .good-title
            font-size :16px
          .item-list
            width :100%
          .item
            display: flex
            .img
              width :120px
              &>img
                width: 100%
                height :auto

            .desc
              flex :1

</style>
