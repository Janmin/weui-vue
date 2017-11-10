<template>
  <img :src="src" :alt="alt" class="weui-media-box__thumb">
</template>

<script>
  export default {
    name: 'wv-media-appmsg-thumb',
    props: {
      /**
       * 应用于图片的src
       */
      src: {
        type: String,
        required: true
      },

      /**
       * 应用于图片的alt
       */
      alt: {
        type: String,
        required: false
      }
    }
  }
</script>