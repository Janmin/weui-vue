<template>
  <div class="weui-cell" :class="{'weui-cell_vcode': vcode, 'weui-cell_warn': warn}">
    <wv-cell-header v-if="label">
      <label :for="id" class="weui-label">{{label}}</label>
    </wv-cell-header>
    <wv-cell-body>
      <wv-cell-textarea :type="type" :placeholder="placeholder" :id="id" :name="name" :rows="rows" :maxlength="maxlength" v-model="myValue" v-if="type === 'textarea'"></wv-cell-textarea>
      <wv-cell-input :type="type" :placeholder="placeholder" :id="id" :name="name" :maxlength="maxlength" v-else v-model="myValue"></wv-cell-input>
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
  export default {
    name: 'wv-input-cell',
    data() {
      return {
        myValue: this.value
      }
    },
    props: {
      type: {
        type: String,
        required: false,
        default: 'text'
      },
      id: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      value: {
        type: String,
        required: false
      },
      vcode: {
        type: String,
        required: false
      },
      warn: {
        type: Boolean,
        required: false,
        default: false
      },
      rows: {
        type: Number,
        default: 3,
      },
      maxlength: {
        type: Number,
        required: false
      }
    },
    computed: {
    },
    watch: {
      myValue(val) {
        this.$emit("input", val)
      }
    }
  }
</script>