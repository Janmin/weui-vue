<template>
  <div class="">
    <div class="page__bd">
      <wv-button type="primary" @click="_click()">显示actionsheet</wv-button>
    </div>
    <wv-action-sheet v-model="actionsheetShow" :menus="actionSheetMenus" :actions="actionSheetActions" :title="title" @wv-menu-click="onEvent"></wv-action-sheet>
  </div>
</template>

<script>
  export default {
    name: "action-sheet",
    data() {
      return {
        title: '操作内容',
        actionsheetShow: true,
        actionSheetMenus: {
          menu1: '示例菜单',
          menu2: '示例菜单',
          menu3: '示例菜单',
          menu4: '示例菜单'
        },
        actionSheetActions: {
          action1: '取消'
        }
      }
    },
    methods: {
      onEvent(message) {
        console.log(message)
      },
      _click() {
        var _this = this
        _this.actionsheetShow = true
      }
    }
  }
</script>

<style>
</style>