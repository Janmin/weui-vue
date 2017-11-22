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
      progress: {
        type: Number,
        required: true,
        validator(value) {
          return value >= 0 && value <= 100;
        },
        default: 0
      },
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