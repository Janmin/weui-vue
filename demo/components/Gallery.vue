<template>
  <div class="page toast">
    <div class="page__hd">
      <h1 class="page_title">Toast</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-gallery :url="url" :hasButton="hasButton">
        <wv-gallery-button @click="_click"></wv-gallery-button>
      </wv-gallery>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data() {
      return {
        url: 'http://img.buzhizhe.cn/o_1bvelmanrfa810ku82sslqqq7a.jpg',
        hasButton: true
      }
    },
    methods: {
      _click() {
        console.log('删除照片')
      }
    }
  }
</script>
<style scoped>
  .page__bd {
    padding: 0 15px;
  }
</style>