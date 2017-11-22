<template>
  <div class="weui-cell weui-cell_switch">
    <wv-cell-body>{{label}}</wv-cell-body>
    <wv-cell-footer>
      <input type="checkbox" :id="id" :name="name" class="weui-switch" v-model="myValue">
    </wv-cell-footer>
  </div>
</template>

<script>
  export default {
    name: 'wv-switch-cell',
    data() {
      return {
        myValue: this.value
      }
    },
    watch: {
      myValue(val) {
        this.$emit('input', val)
      }
    },
    props: {
      id: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: true
      },
      value: {
        type: Boolean,
        required: false,
        default: false
      }
    }
  }
</script>