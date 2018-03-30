<template>
  <div class="">
    <input type="text" :value="value" style="display:none;">
    <div class="weui-mask" :class="{'weui_fade_toggle': isShow}" :style="{opacity: isShow ? '1':'0',display: isShow ? 'block' : 'none'}"
      @click="hideActionSheet"></div>
    <div class="weui-actionsheet" :class="{'weui-actionsheet_toggle': isShow}">
      <div class="weui-actionsheet__title" v-if="title">
        <p class="weui-actionsheet__title-text">{{title}}</p>
      </div>
      <div class="weui-actionsheet__menu">
        <div class="weui-actionsheet__cell" v-for="(value, key) in menus" @click="callEvent('wv-menu-click', key)">
          {{value}}
        </div>
      </div>
      <div class="weui-actionsheet__action">
        <div class="weui-actionsheet__cell" v-for="(value, key) in actions" @click="callEvent('wv-action-click', key)">
          {{value}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'wv-action-sheet',
    data() {
      return {
        isShow: Boolean
      }
    },
    props: {
      /**
       * 双向绑定的数据，用于控制是否显示Actionsheet
       */
      value: {
        type: Boolean,
        required: true,
        twoWay: true
      },
      // 标题
      title: {
        type: String,
        required: false,
        default: String
      },
      /**
       * 菜单键值对
       */
      menus: {
        type: Object,
        required: false,
        default: {}
      },
      /**
       * 操作项键值对
       */
      actions: {
        type: Object,
        required: false,
        default: {}
      }
    },
    watch: {
      value(val) {
        var _this = this
        _this.isShow = val
      },
      isShow(val) {
        this.$emit('input', val)
      }
    },
    mounted() {
      if (this.value) {
        this.isShow = true
      }
    },
    methods: {
      callEvent(event, message) {
        var _this = this
        _this.$emit(event, message)
        if (event === 'wv-action-click') {
          _this.hideActionSheet()
        }
      },
      hideActionSheet() {
        var _this = this
        _this.isShow = false
      }
    }
  }
</script>