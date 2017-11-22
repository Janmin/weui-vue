<template>
  <label :for="id" class="weui-cell weui-check__label">
    <wv-cell-header>
      <input type="checkbox" :name="name" class="weui-check" :id="id" v-model="myValue">
      <span class="weui-icon-checked"></span>
    </wv-cell-header>
    <wv-cell-body>{{label}}</wv-cell-body>
  </label>
</template>

<script>
  export default {
    name: 'wv-checkbox-cell',
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
      /**
       * checkbox input的id
       */
      id: {
        type: String,
        required: false
      },

      /**
       * checkbox input的name
       */
      name: {
        type: String,
        required: false
      },

      /**
       * checkbox input的value
       */
      value: {
        type: null,
        required: false
      },

      /**
       * 显示的文本内容
       */
      label: {
        type: String,
        required: true
      }
    }
  }
</script>