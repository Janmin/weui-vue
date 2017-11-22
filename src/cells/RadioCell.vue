<template>
  <div>
    <label v-for="item in params" :for="item.id" class="weui-cell weui-check__label">
      <wv-cell-body>{{item.label}}</wv-cell-body>
      <wv-cell-footer>
        <input type="radio" :name="name" class="weui-check" :id="item.id" :value="item.value" v-model="picked">
        <span class="weui-icon-checked"></span>
      </wv-cell-footer>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'wv-radio-cell',
    props: {
      ids: {
        type: Array,
        required: true
      },
      name: {
        type: null,
        required: true
      },
      values: {
        type: Array,
        required: true
      },
      labels: {
        type: Array,
        required: false
      },
      value: {
        type: null,
        required: false
      }
    },
    data() {
      return {
        picked: this.value,
        params: []
      }
    },
    created() {
      var _this = this
      for (let index = 0; index < _this.values.length; index++) {
        _this.params.push({ id: _this.ids[index], value: _this.values[index], label:_this.labels[index] })
      }
    },
    watch: {
      picked(val) {
        this.$emit('input', val)
      }
    }
  }
</script>