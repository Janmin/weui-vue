<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">{{name}}</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <wv-footer>
      <p class="weui-footer__links">
        <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
        <a href="javascript:void(0);" class="weui-footer__link">底部链接</a>
      </p>
      <p class="weui-footer__text">Copyright © 2008-2016 wv.buzhizhe.cn</p>
    </wv-footer>
  </div>
</template>
<script>
  export default {
    name: 'footer',
    data() {
      return {
        name: 'Footer'
      }
    }
  }
</script>
<style>
</style>