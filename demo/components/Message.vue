<template>
  <div class="page">
    <wv-message icon="success" title="操作成功">
      <span slot="content">内容详情，可根据实际需要安排</span>
      <wv-button-area slot="operation">
        <wv-button type="primary">确定</wv-button>
        <wv-button type="default">取消</wv-button>
      </wv-button-area>
      <a href slot="extra">查看详情</a>
    </wv-message>
  </div>
</template>

<script>
  export default {
  }
</script>