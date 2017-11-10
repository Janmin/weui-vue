<template>
  <div :class="{'weui-navbar__item': true, 'weui-bar__item_on': isSelected}" @click="selectItem">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'wv-navbar-item',
    props: {
      theKey: {
        type: null,
        required: true
      },
      isSelected: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    methods: {
      selectItem() {
        this.$emit('weui-item-select', this.theKey);
      }
    }
  }
</script>