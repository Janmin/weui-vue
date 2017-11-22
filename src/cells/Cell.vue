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
  export default {
    name: 'wv-cell'
  }
</script>