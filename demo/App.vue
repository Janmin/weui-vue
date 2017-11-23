<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    background-color: rgb(248, 248, 248);
    height: 100%;
  }

  .page {
    z-index: 1;
    background-color: rgb(248, 248, 248);
  }

  .page_title {
    text-align: center;
    font-size: 34px;
    color: #59bfa6;
    font-weight: 400;
    margin: 0 15%;
  }

  .page_desc {
    text-align: center;
    color: #888;
    font-size: 14px;
  }

  .page__hd {
    padding: 2em 0;
  }

  .page__bd {
    padding: 0 15px;
  }
</style>