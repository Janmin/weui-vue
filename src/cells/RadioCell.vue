<template>
  <label :for="id" class="weui-cell weui-check__label">
    <wv-cell-body>{{label}}</wv-cell-body>
    <wv-cell-footer>
      <input type="radio" :name="name" class="weui-check" :id="id" :value="value">
      <span class="weui-icon-checked"></span>
    </wv-cell-footer>
  </label>
</template>

<script>
  // import CellBody from './CellBody.vue';
  // import CellFooter from './CellFooter.vue';
  export default {
    name: 'wv-radio-cell',
    props: {
      /**
       * radio input的id
       */
      id: {
        type: String,
        required: false
      },

      /**
       * radio input的name
       */
      name: {
        type: String,
        required: false
      },

      /**
       * radio input的value
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
      },

      /**
       * 选中项的数据绑定，用于radio input的v-model
       */
      // picked: {
      //   type: String,
      //   required: true,
      //   twoWay: true
      // }
    },
    // components: {
    //   CellBody,
    //   CellFooter
    // }
  }
</script>