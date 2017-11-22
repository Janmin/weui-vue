<template>
  <textarea class="weui-textarea" v-model="myValue"></textarea>
</template>

<script>
  export default {
    name: 'wv-cell-textarea',
    data() {
      return {
        myValue: this.value
      }
    },
    props: {
      value: {
        type: String,
        required: true,
        twoWay: true
      }
    },
    watch: {
      value(val) {
        this.myValue = val
      },
      myValue(val) {
        this.$emit("input", val)
      }
    },
    computed: {
    }
  }
</script>