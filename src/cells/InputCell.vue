<template>
  <div class="weui-cell" :class="{'weui-cell_vcode': vcode, 'weui-cell_warn': warn}">
    <wv-cell-header v-if="label">
      <label :for="id" class="weui-label">{{label}}</label>
    </wv-cell-header>
    <wv-cell-body>
      <wv-cell-textarea :type="type" :placeholder="placeholder" :id="id" :name="name" :rows="rows" :maxlength="maxlength" :value.sync="myValue"
        v-if="type === 'textarea'"></wv-cell-textarea>
      <wv-cell-input :type="type" :placeholder="placeholder" :id="id" :name="name" :maxlength="maxlength" v-else :value.sync="myValue"></wv-cell-input>
      <div class="weui-textarea-counter" v-if="type === 'textarea' && maxlength">
        <span>{{value.length}}/{{maxlength}}</span>
      </div>
    </wv-cell-body>
    <wv-cell-footer v-if="vcode || warn">
      <i class="weui-icon-warn" v-if="warn"></i>
      <img :src="vcode" v-if="vcode" class="weui-vcode-img">
    </wv-cell-footer>
  </div>
</template>

<script>
  // import CellHeader from './CellHeader.vue';
  // import CellBody from './CellBody.vue';
  // import CellFooter from './CellFooter.vue';
  // import CellInput from './CellInput.vue';
  // import CellTextarea from './CellTextarea.vue';

  export default {
    name: 'wv-input-cell',
    data() {
      return {
        myValue: this.value
      }
    },
    props: {
      /**
       * 输入框的类型
       * text: 单行输入框（默认）
       * textarea：文本域
       */
      type: {
        type: String,
        required: false,
        default: 'text'
      },

      /**
       * 输入框的id
       */
      id: {
        type: String,
        required: false
      },

      /**
       * 输入框的name
       */
      name: {
        type: String,
        required: false
      },

      /**
       * 输入框的placeholder
       */
      placeholder: {
        type: String,
        required: false
      },

      /**
       * 输入框的标签，会显示在最前方
       */
      label: {
        type: String,
        required: false
      },

      /**
       * 输入框的数据绑定，会作为input或textarea的v-model
       */
      value: {
        type: String,
        required: false
      },

      /**
       * 验证码的url，若设置则验证码会显示在最后
       */
      vcode: {
        type: String,
        required: false
      },

      /**
       * 是否为表单报错的列表项
       * 若为true则文字会标红，且会显示红色感叹号
       */
      warn: {
        type: Boolean,
        required: false,
        default: false
      },

      /**
       * type为textarea时的行数
       */
      rows: {
        type: Number,
        default: 3,
      },

      /**
       * 支持的最大输入长度
       * 若type为textarea且设定了maxlength，则会出现字数统计标签
       */
      maxlength: {
        type: Number,
        required: false
      }
    },
    computed: {
    },
    watch: {
      myValue(val) {
        this.$emit("update:value", val)
      }
    },
    // components: {
    //   CellHeader,
    //   CellBody,
    //   CellFooter,
    //   CellInput,
    //   CellTextarea
    // }
  }
</script>