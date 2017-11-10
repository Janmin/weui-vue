<template>
  <div class="page msg_success">
    <div class="weui-msg">
      <div class="weui-msg__icon-area">
        <i class="weui-icon-success weui-icon_msg"></i>
      </div>
      <div class="weui-msg__text-area">
        <h2 class="weui-msg__title">{{title}}</h2>
        <p class="weui-msg__desc">
          <slot name="content"></slot>
        </p>
      </div>
      <div class="weui-msg__opr-area">
        <p class="weui-btn-area">
          <slot name="operation"></slot>
        </p>
      </div>
      <div class="weui-msg__extra-area">
        <slot name="extra"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wv-message',
    props: {
      /**
       * 消息图标名称
       * 若设置，则会在最上方显示大图标
       */
      icon: {
        type: String,
        required: false
      },

      /**
       * 消息标题
       */
      title: {
        type: String,
        required: false
      }
    }
  }
</script>