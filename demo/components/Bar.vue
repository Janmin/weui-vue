<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Bar</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="page__bd">
      <wv-button type="default" @click.native="toNavbar">Navbar</wv-button>
      <wv-button type="default" @click.native="toTabbar">Tabbar</wv-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'bar',
    methods: {
      toNavbar() {
        this.$router.push({ path: '/navbar' })
      },
      toTabbar() {
        this.$router.push({ path: '/tabbar' })
      }
    }
  }
</script>