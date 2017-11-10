<template>
  <div class="weui-panel__ft">
    <router-link :to="to" class="weui-cell weui-cell_access weui-cell_link">
      <div class="weui-cell__bd">
        <slot></slot>
      </div>
      <span class="weui-cell__ft"></span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'wv-panel-footer',
    props: {
      /**
       * 底部跳转链接
       */
      link: {
        type: String,
        required: false
      },

      /**
       * vue-router使用的跳转链接
       */
      to: {
        type: null,
        required: false
      }
    }
  }
</script>