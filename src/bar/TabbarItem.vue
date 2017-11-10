<template>
  <router-link :to="to" class="weui-tabbar__item" :class="{'weui-bar__item_on': isOn}">
    <span style="display: inline-block;position: relative;">
      <img :src="imageUrl" alt="" class="weui-tabbar__icon">
      <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;" v-if="badge">{{badge}}</span>
    </span>
    <p class="weui-tabbar__label">
      <slot></slot>
    </p>
  </router-link>
</template>

<script>
  export default {
    name: 'wv-tabbar-item',
    props: {
      /**
       * 跳转链接
       */
      to: {
        type: String,
        required: false
      },
      /**
       * 是否被选中的标识
       */
      isOn: {
        type: Boolean,
        required: false,
        default: false
      },
      badge: {
        type: String,
        required: false
      },
      imageUrl: {
        type: String,
        required: false
      }
    }
  }
</script>