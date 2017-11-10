<template>
  <router-link :to="to" class="weui-cell weui-cell_access">
    <wv-cell-header>
      <slot name="header"></slot>
    </wv-cell-header>
    <wv-cell-body>
      <slot name="body"></slot>
    </wv-cell-body>
    <wv-cell-footer>
      <slot name="footer"></slot>
    </wv-cell-footer>
  </router-link>
</template>

<script>
  // import CellHeader from './CellHeader.vue';
  // import CellBody from './CellBody.vue';
  // import CellFooter from './CellFooter.vue';

  export default {
    name: 'wv-link-cell',
    data() {
      return {}
    },
    props: {
      /**
       * 跳转链接，若设置则此列表项可点击跳转
       */
      to: {
        type: String,
        required: false
      }
    },
    // components: {
    //   CellHeader,
    //   CellBody,
    //   CellFooter
    // },
    mounted() {}
  };
</script>