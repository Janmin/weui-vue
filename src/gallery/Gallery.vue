<template>
  <div class="weui-gallery" style="display: block">
    <span class="weui-gallery__img" :style="image"></span>
    <slot v-if="hasButton"></slot>
  </div>
</template>
<script>
  export default {
    name: 'wv-gallery',
    props: {
      url: {
        type: String,
        required: true
      },
      hasButton: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    data() {
      return {
        image: 'background-image: url(' + this.url + ')'
      }
    },
    methods: {
      clickHandler($event) {
        this.$emit('click', $event)
      }
    }
  }
</script>