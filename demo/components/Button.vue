<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Button</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-button type="primary" @click="_click()">primary按钮</wv-button>
      <wv-button type="primary" disabled="disabled" @click="_click()">disabled&primary按钮</wv-button>
      <wv-button type="warn">warn按钮</wv-button>
      <wv-button type="warn" disabled="disabled">disabled&warn按钮</wv-button>
      <wv-button type="default">default按钮</wv-button>
      <wv-button type="default" disabled="disabled">disabled&default按钮</wv-button>
      <wv-button-area>
        <wv-button type="primary" :plain="plain">primary&plain按钮</wv-button>
        <wv-button type="primary" disabled="disabled" :plain="plain">primary&plain&plain按钮</wv-button>
        <wv-button type="default" :plain="plain">default&plain按钮</wv-button>
        <wv-button type="default" disabled="disabled" :plain="plain">default&plain&plain按钮</wv-button>
      </wv-button-area>
      <wv-button-area>
        <wv-button type="primary" @click="_click()" :mini="mini">mini按钮</wv-button>
        <wv-button type="warn" @click="_click()" :mini="mini">mini按钮</wv-button>
        <wv-button type="default" @click="_click()" :mini="mini">mini按钮</wv-button>
      </wv-button-area>
    </div>
  </div>
</template>

<script>
  export default {
    name: "button",
    data() {
      return {
        disabled: true,
        plain: true,
        mini: true
      }
    },
    methods: {
      _click() {
        console.log('weui-vue')
      }
    }
  }
</script>

<style scoped>
  .page__bd {
    padding: 0 15px;
  }
</style>