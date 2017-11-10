<template>
  <select class="weui-select" v-model="mySelected">
    <option v-for="(option, key) in options" :value="key">{{option}}</option>
  </select>
</template>

<script>
  export default {
    name: 'wv-cell-select',
    data() {
      return {
        mySelected: this.selected
      }
    },
    props: {
      selected: {
        type: null,
        required: true
      },
      options: {
        type: Object,
        required: true
      }
    },
    watch: {
      mySelected(val) {
        this.$emit("update:selected", val)
      }
    },
    computed: {}
  }
</script>