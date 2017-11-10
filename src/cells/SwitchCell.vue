<template>
  <div class="weui-cell weui-cell_switch">
    <wv-cell-body>{{label}}</wv-cell-body>
    <wv-cell-footer>
      <input type="checkbox" :id="id" :name="name" class="weui-switch">
    </wv-cell-footer>
  </div>
</template>

<script>
  export default {
    name: 'wv-switch-cell',
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
    //   CellBody,
    //   CellFooter
    // }
  }
</script>