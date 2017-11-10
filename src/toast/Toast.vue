<template>
  <div style="display: none;">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <template v-if="type == 'loading'">
        <i class="weui-loading weui-icon_toast"></i>
      </template>
      <template v-else>
        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
      </template>
      <p class="weui-toast__content">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wv-toast',
    props: {
      /**
       * toast类型
       * icon: 包含图标的提示框（默认）
       * loading: 包含loading动画的提示框
       */
      type: {
        type: String,
        required: false,
        default: 'icon'
      }
    }
  }
</script>