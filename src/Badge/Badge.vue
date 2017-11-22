<template>
  <span class="weui-badge" :style="style">{{text}}</span>
</template>
<script>
  export default {
    name: 'wv-badge',
    props: {
      /* 位置
      right
      rightTop */
      position: {
        type: String,
        default: 'right',
        required: false
      },
      text: {
        type: null,
        required: false
      }
    },
    data() {
      return {
        style: ''
      }
    },
    created() {
      var _this = this
      switch (_this.position) {
        case 'right':
          _this.style = 'margin-left: 5px;'
          break
        case 'rightTop':
          _this.style = 'position: absolute;top: -.4em;right: -.4em;'
          break
        default:
          break
      }
    }
  }
</script>
<style>
</style>