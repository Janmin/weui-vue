<template>
  <div class="weui-cell">
    <wv-cell-header>
      <slot name="header"></slot>
    </wv-cell-header>
    <wv-cell-body>
      <slot name="body"></slot>
    </wv-cell-body>
    <wv-cell-footer>
      <slot name="footer"></slot>
    </wv-cell-footer>
  </div>
</template>

<script>
  // import CellHeader from './CellHeader.vue'
  // import CellBody from './CellBody.vue'
  // import CellFooter from './CellFooter.vue'

  export default {
    name: 'wv-cell',
    // components: {
    //   CellHeader,
    //   CellBody,
    //   CellFooter
    // }
  };
</script>