<template>
  <div>
    <wv-grids>
      <wv-grid :to="to" :imageUrl="imageUrl" label="1"/>
      <wv-grid :to="to" :imageUrl="imageUrl" label="2"/>
      <wv-grid :to="to" :imageUrl="imageUrl" label="2"/>
      <wv-grid :to="to" :imageUrl="imageUrl" label="1"/>
      <wv-grid :to="to" :imageUrl="imageUrl" label="2"/>
      <wv-grid :to="to" :imageUrl="imageUrl" label="2"/>
    </wv-grids>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        to: '',
        imageUrl: 'http://img.qq745.com/uploads/allimg/170516/14-1F516152034-52.png'
      }
    }
  }
</script>
<style>
</style>