<template>
  <div style="height: 100%;">
    <wv-tab>
      <wv-navbar :items="items" :selected.sync="selected">
      </wv-navbar>
      <div class="weui-tab__panel tab-panel" v-show="show_0">
        <p style="text-align:center;">1</p>
      </div>
      <div class="weui-tab__panel tab-panel" v-show="show_1">
        <p style="text-align:center;">2</p>
      </div>
      <div class="weui-tab__panel tab-panel" v-show="show_2">
        <p style="text-align:center;">3</p>
      </div>
    </wv-tab>
  </div>
</template>
<script>
  export default {
    name: 'navbar',
    data() {
      return {
        items: ['选项一', '选项二', '选项三'],
        selected: 1
      }
    },
    computed: {
      show_0() {
        var _this = this
        if (_this.selected === 0) {
          return true
        } else {
          return false
        }
      },
      show_1() {
        var _this = this
        if (_this.selected === 1) {
          return true
        } else {
          return false
        }
      },
      show_2() {
        var _this = this
        if (_this.selected === 2) {
          return true
        } else {
          return false
        }
      },
    }
  }
</script>
<style>
  .tab-panel {
    padding-top: 50px;
    padding-bottom: 0;
  }
</style>