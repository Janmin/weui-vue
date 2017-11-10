<template>
  <router-link :to="to" class="weui-grid">
    <div class="weui-grid__icon" v-if="imageUrl">
      <img :src="imageUrl" alt="">
    </div>
    <p class="weui-grid__label" v-if="label">{{label}}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'wv-grid',
    props: {
      /**
       * vue-router使用的跳转链接
       * 若使用vue-router，推荐使用router-link而非link
       * 会添加在v-link属性中
       */
      to: {
        type: null,
        required: false
      },

      /**
       * 图标地址
       */
      imageUrl: {
        type: String,
        required: false
      },

      /**
       * 标签，显示在图标下方
       */
      label: {
        type: null,
        required: false
      }
    }
  }
</script>