<template>
  <div class="weui-progress">
    <div class="weui-progress__bar">
      <div class="weui-progress__inner-bar js_progress" :style="{width: progress + '%'}"></div>
    </div>
    <a v-if="hasCancelButton" href="javascript:;" class="weui-progress__opr" @click="callEvent('wv-progress-cancel')">
      <i class="weui-icon-cancel"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'wv-progress',
    props: {
      /**
       * 进度，最小为0，最大为100
       */
      progress: {
        type: Number,
        required: true,
        validator(value) {
          return value >= 0 && value <= 100;
        },
        default: 0
      },
      /**
       * 是否包含取消按钮，若有，则点击时会出发weui-progress-cancel事件
       */
      hasCancelButton: {
        type: Boolean,
        required: false,
        default: true
      }
    },
    methods: {
      callEvent(event) {
        this.$emit(event)
      }
    }
  }
</script>