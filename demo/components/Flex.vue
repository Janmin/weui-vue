<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">{{name}}</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div>
      <wv-flex>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
      </wv-flex>
      <wv-flex>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
      </wv-flex>
      <wv-flex>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
      </wv-flex>
      <wv-flex>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
      </wv-flex>
      <wv-flex>
        <div>
          <div class="placeholder">weui-vue</div>
        </div>
        <wv-flex-item>
          <div class="placeholder">weui-vue</div>
        </wv-flex-item>
        <div>
          <div class="placeholder">weui-vue</div>
        </div>
      </wv-flex>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'flex',
    data() {
      return {
        name: 'Flex'
      }
    }
  }
</script>
<style>
  .placeholder {
    margin: 5px;
    padding: 0 10px;
    background-color: #ebebeb;
    height: 2.3em;
    line-height: 2.3em;
    text-align: center;
    color: #cfcfcf;
  }
</style>