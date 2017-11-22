<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Progress</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-progress :progress="0" :hasCancelButton="hasCancelButton"></wv-progress>
      <br>
      <wv-progress :progress="50" :hasCancelButton="hasNoCancelButton"></wv-progress>
      <br>
      <wv-progress :progress="80" :hasCancelButton="hasCancelButton" @wv-progress-cancel="test"></wv-progress>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hasCancelButton: true,
        hasNoCancelButton: false
      }
    },
    methods: {
      test() {
        console.log('dfsfg')
      }
    }
  }
</script>