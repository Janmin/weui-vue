<template>
  <div>
    <wv-search-bar :placeholder="placeholder" cancelText="取消" @wv-search-bar-submit="event" value="">
    </wv-search-bar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        placeholder: '搜索'
      }
    },
    methods: {
      event(params) {
        console.log(params)
      }
    }
  }
</script>
<style>
</style>