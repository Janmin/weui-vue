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
      value(val) {
        this.myValue = val
      },
      myValue(val) {
        this.$emit("update:value", val)
      }
    },
    props: {
      value: {
        type: String,
        required: false,
        twoWay: true
      },
      type: {
        type: String,
        required: false
      }
    }
  }
</script>