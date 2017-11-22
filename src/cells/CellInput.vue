<template>
  <input class="weui-input" :type="type" v-model="myValue">
</template>

<script>
  export default {
    name: 'wv-cell-input',
    data() {
      return {
        myValue: this.value
      }
    },
    watch: {
      myValue(val) {
        this.$emit("input", val)
      }
    },
    props: {
      value: {
        type: null,
        required: false
      },
      type: {
        type: String,
        required: false
      }
    }
  }
</script>