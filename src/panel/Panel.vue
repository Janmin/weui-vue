<template>
  <div class="weui-panel" :class="{'weui-panel_access': access}">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'wv-panel',
    props: {
      /**
       * 底部部分是否包含“查看更多”样式
       */
      access: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>