<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Dialog</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-button type="default" @click.native="showDialog(1)">点击弹出Dialog样式一</wv-button>
      <wv-button type="default" @click.native="showDialog(2)">点击弹出Dialog样式二</wv-button>
    </div>
    <wv-dialog v-show="dialog1Show" type="confirm" title="弹窗标题" confirm-button="确认" cancel-button="取消" @wv-dialog-confirm="handleDialogAction(1)"
      @wv-dialog-cancel="handleDialogAction(1)">
      自定义弹窗内容
    </wv-dialog>
    <wv-dialog v-show="dialog2Show" type="alert" title="弹窗标题" @wv-dialog-confirm="handleDialogAction(2)">
      弹窗内容，告知当前页面信息等
    </wv-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        dialog1Show: false,
        dialog2Show: false
      }
    },
    methods: {
      showDialog(id) {
        var _this = this
        this[`dialog${id}Show`] = true
      },
      handleDialogAction(id) {
        this[`dialog${id}Show`] = false
      }
    }
  }
</script>
<style scoped>
  .page__bd {
    padding: 0 15px;
  }
</style>