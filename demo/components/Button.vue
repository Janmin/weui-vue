<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Button</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-button type="primary">按钮</wv-button>
      <wv-button type="primary" disabled="true">按钮</wv-button>
      <wv-button type="warn">按钮</wv-button>
      <wv-button type="warn" disabled="true">按钮</wv-button>
      <wv-button type="default">按钮</wv-button>
      <wv-button type="default" disabled="true">按钮</wv-button>
      <wv-button-area>
        <wv-button type="primary">按钮</wv-button>
        <wv-button type="primary" disabled="true">按钮</wv-button>
        <wv-button type="warn">按钮</wv-button>
        <wv-button type="warn" disabled="true">按钮</wv-button>
        <wv-button type="default">按钮</wv-button>
        <wv-button type="default" disabled="true">按钮</wv-button>
      </wv-button-area>
    </div>
  </div>
</template>

<script>
  export default {
    name: "button",
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style scoped>
  .page__bd {
    padding: 0 15px;
  }
</style>