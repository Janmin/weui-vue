<template>
  <li class="weui-media-box__info__meta" :class="{'weui-media-box__info__meta_extra': extra}">
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: 'wv-media-info-meta',
    props: {
      /**
       * 是否为extra的标识，若是，则文字左方会有竖线隔离符
       */
      extra: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>