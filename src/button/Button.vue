<template>
  <button class="weui-btn" :class="[typeClass, disabledClass, mini ? 'weui-btn_mini' : '']" @click="clickHandler($event)">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'wv-button',
    props: {
      type: {
        type: String,
        default: 'primary',
        required: false
      },
      disabled: {
        type: Boolean,
        default: false,
        required: false
      },
      mini: {
        type: Boolean,
        default: false,
        required: false
      },
      plain: {
        type: Boolean,
        default: false,
        required: false
      }
    },
    methods: {
      clickHandler($event) {
        if (!this.disabled) {
          this.$emit('click', $event)
        }
      }
    },
    computed: {
      typeClass() {
        if (this.plain) {
          return `weui-btn_plain-${this.type}`
        } else {
          return `weui-btn_${this.type}`
        }
      },
      disabledClass() {
        if (this.plain && this.disabled) {
          return 'weui-btn_plain-disabled'
        } else if (this.disabled) {
          return 'weui-btn_disabled'
        }
      }
    }
  }
</script>