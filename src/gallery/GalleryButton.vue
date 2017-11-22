<template>
  <div class="weui-gallery__opr">
    <a class="weui-gallery__del" @click="clickHandler($event)">
      <i class="weui-icon-delete weui-icon_gallery-delete"></i>
    </a>
  </div>
</template>
<script>
  export default {
    name: 'wv-gallery-button',
    methods: {
      clickHandler($event) {
        this.$emit('click', $event)
      }
    }
  }
</script>