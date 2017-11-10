<template>
  <div style="height: 100%;">
    <wv-tab>
      <wv-tabbar>
        <wv-tabbar-item :imageUrl="imageUrl" to="" :isOn="isOn">
          菜单一
        </wv-tabbar-item>
        <wv-tabbar-item :imageUrl="imageUrl" to="">
          菜单二
        </wv-tabbar-item>
        <wv-tabbar-item :imageUrl="imageUrl" to="" badge="5">
          菜单三
        </wv-tabbar-item>
        <wv-tabbar-item :imageUrl="imageUrl" to="">
          菜单四
        </wv-tabbar-item>
      </wv-tabbar>
    </wv-tab>
  </div>
</template>
<script>
  export default {
    name: 'tabbar',
    data() {
      return {
        imageUrl: 'http://pic.zijian92.cn/icon_tabbar.png',
        isOn: true
      }
    }
  }
</script>
<style>
</style>