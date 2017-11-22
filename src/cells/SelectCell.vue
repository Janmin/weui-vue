<template>
  <div class="weui-cell weui-cell_select" :class="{'weui-cell_select-before': before, 'weui-cell_select-after': after}">
    <wv-cell-header v-if="before || after">
      <wv-cell-select :options="options" :selected.sync="mySelected" v-if="before"></wv-cell-select>
      <slot name="header" v-else></slot>
    </wv-cell-header>
    <wv-cell-body>
      <slot name="body" v-if="before"></slot>
      <wv-cell-select :options="options" :selected.sync="mySelected" v-else></wv-cell-select>
    </wv-cell-body>
  </div>
</template>

<script>
  export default {
    name: 'wv-select-cell',
    data() {
      return {
        mySelected: this.value
      }
    },
    props: {
      /**
       * 选项数组
       * 支持纯字符串格式和包含value、text字段的对象格式
       * 若为纯字符串，则该项的value和text均为该字符串
       */
      options: {
        type: Object,
        required: true
      },

      /**
       * 选中项数据绑定，会用于select的v-model
       */
      value: {
        type: null,
        required: false
      },

      /**
       * 是否为前置选择框，具体请参见下方示例
       */
      before: {
        type: Boolean,
        required: false,
        default: false
      },

      /**
       * 是否为后置选择框，具体请参见下方示例
       */
      after: {
        type: Boolean,
        required: false,
        default: false
      }
    },
    watch: {
      mySelected(val) {
        this.$emit("input", val)
      }
    }
  }

</script>