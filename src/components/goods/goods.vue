<template>
  <div class="good">
    <div class="menu-wrap">
      <ul class="menu">
        <li class="item" v-for="item in goodData">
           <div class="cont">
              <span class="icon" v-if="item.type === 2">11</span>{{ item.name }}
           </div>
        </li>
      </ul>
    </div>
    <div class="good-wrap">

    </div>
  </div>
</template>

<script>
  let erro_KEY = 0;
  export default {
    data () {
      return {
        goodData: []
      }
    },
    mounted () {
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

<style scoped lang="stylus" rel="stylesheet/stylus">
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
    .good-wrap
      flex :1
</style>
