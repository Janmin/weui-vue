<template>
  <div class="page toast">
    <div class="page__hd">
      <h1 class="page_title">Toast</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-button type="default" @click="showToast">点击弹出Toast</wv-button>
      <wv-button type="default" @click="showLoadingToast">点击弹出Loading Toast</wv-button>
    </div>
    <wv-toast v-show="toastShow">
      完成
    </wv-toast>
    <wv-toast type="loading" v-show="loadingToastShow">
      数据加载中
    </wv-toast>
  </div>
</template>

<script>
  export default {
    name: 'toast',
    data() {
      return {
        toastShow: false,
        loadingToastShow: false
      };
    },
    methods: {
      showToast() {
        var _this = this
        _this.toastShow = true;
        setTimeout(() => {
          _this.toastShow = false;
        }, 2000)
      },
      showLoadingToast() {
        var _this = this
        _this.loadingToastShow = true;
        setTimeout(() => {
          _this.loadingToastShow = false;
        }, 3000)
      },
    }
  }
</script>
<style scoped>
  .page__bd {
    padding: 0 15px;
  }
</style>