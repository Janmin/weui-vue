<template>
  <div>
    <div class="page__hd">
      <div class="logo">
        <img src="http://pic.zijian92.cn/logo.png" style="width:88px;">
      </div>
      <h1 class="page_title">
      </h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="">
      <wv-grids>
        <wv-grid to="button" :imageUrl="imageUrl1" label="Button" />
        <wv-grid to="cell" :imageUrl="imageUrl2" label="Cell" />
        <wv-grid to="toast" :imageUrl="imageUrl3" label="Toast" />
        <wv-grid to="dialog" :imageUrl="imageUrl4" label="Dialog" />
        <wv-grid to="progress" :imageUrl="imageUrl5" label="Progress" />
        <wv-grid to="message" :imageUrl="imageUrl6" label="Msg Page" />
        <wv-grid to="article" :imageUrl="imageUrl7" label="Article Page" />
        <wv-grid to="action-sheet" :imageUrl="imageUrl8" label="ActionSheet" />
        <wv-grid to="icon" :imageUrl="imageUrl9" label="Icons" />
        <wv-grid to="panel" :imageUrl="imageUrl10" label="Panel" />
        <wv-grid to="bar" :imageUrl="imageUrl11" label="Tab" />
        <wv-grid to="search" :imageUrl="imageUrl12" label="SearchBar" />
      </wv-grids>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data() {
      return {
        to: '',
        imageUrl1: 'http://pic.zijian92.cn/icon_nav_button.png',
        imageUrl2: 'http://pic.zijian92.cn/icon_nav_cell.png',
        imageUrl3: 'http://pic.zijian92.cn/icon_nav_toast.png',
        imageUrl4: 'http://pic.zijian92.cn/icon_nav_dialog.png',
        imageUrl5: 'http://pic.zijian92.cn/icon_nav_progress.png',
        imageUrl6: 'http://pic.zijian92.cn/icon_nav_msg.png',
        imageUrl7: 'http://pic.zijian92.cn/icon_nav_article.png',
        imageUrl8: 'http://pic.zijian92.cn/icon_nav_actionSheet.png',
        imageUrl9: 'http://pic.zijian92.cn/icon_nav_icons.png',
        imageUrl10: 'http://pic.zijian92.cn/icon_nav_panel.png',
        imageUrl11: 'http://pic.zijian92.cn/icon_nav_tab.png',
        imageUrl12: 'http://pic.zijian92.cn/icon_nav_search_bar.png',
      }
    }
  }
</script>
<style scoped>
  .logo {
    text-align: center;
  }
</style>