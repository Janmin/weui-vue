<template>
  <label :for="id" class="weui-cell weui-check__label">
    <wv-cell-header>
      <input type="checkbox" :name="name" class="weui-check" :id="id" :value="value">
      <span class="weui-icon-checked"></span>
    </wv-cell-header>
    <wv-cell-body>{{label}}</wv-cell-body>
  </label>
</template>

<script>
  // import CellHeader from './CellHeader.vue';
  // import CellBody from './CellBody.vue';

  export default {
    name: 'wv-checkbox-cell',
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
        type: String,
        required: false
      },

      /**
       * 显示的文本内容
       */
      label: {
        type: String,
        required: true
      }
    },

    // components: {
    //   CellHeader,
    //   CellBody
    // }
  }
</script>