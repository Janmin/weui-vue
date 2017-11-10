<template>
  <i :class="[nameClass, typeClass]"></i>
</template>

<script>
  export default {
    name: 'wv-icon',
    props: {
      /**
       * 图标名称，可能的取值有
       * success, success-circle, success-no-circle,
       * info, waiting, waiting-circle, circle,
       * warn, download, info-circle, cancel
       */
      name: {
        type: String,
        required: true
      },

      /**
       * 图标类型
       * default: 默认小图标（默认）
       * message: 用于消息页的大图标
       * safe: 轮廓为盾牌的大图标
       */
      type: {
        type: String,
        required: false,
        default: 'default'
      }
    },

    computed: {
      nameClass() {
        return `weui-icon${this.type === 'safe' ? '-safe' : ''}-${this.name}`
      },

      typeClass() {
        switch (this.type) {
          case 'message':
            return 'weui-icon_msg'
          case 'safe':
            return 'weui-icon_safe'
          default:
            return false;
        }
      }
    }
  }
</script>