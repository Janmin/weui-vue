<template>
  <div class="weui-search-bar" :class="{'weui-search-bar_focusing': isFocusing || !!value}">
    <form class="weui-search-bar__form" @submit="submit">
      <div class="weui-search-bar__box">
        <i class="weui-icon-search"></i>
        <input type="search" class="weui-search-bar__input" id="searchInput" :placeholder="placeholder" required v-model="myValue"
          @focus="isFocusing = true" @blur="isFocusing = false">
        <a href="javascript:" class="weui-icon-clear" id="searchClear" @click="clearInput"></a>
      </div>
      <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);"
        @click="isFocusing = true">
        <i class="weui-icon-search"></i>
        <span v-if="!!placeholder">{{placeholder}}</span>
      </label>
    </form>
    <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel" v-if="!!cancelText && isFocusing" @click="cancelInput">{{cancelText}}</a>
  </div>
</template>

<script>
  export default {
    name: 'wv-search-bar',
    props: {
      placeholder: {
        type: String,
        required: false
      },
      cancelText: {
        type: String,
        required: false
      },
      value: {
        type: String,
        required: true,
        twoWay: true
      }
    },
    data() {
      return {
        isFocusing: false,
        myValue: this.value
      }
    },
    methods: {
      clearInput() {
        this.myValue = ''
      },
      cancelInput() {
        this.myValue = ''
        this.isFocusing = false
      },
      submit(event) {
        this.$emit('wv-search-bar-submit', this.myValue)
      }
    }
  }
</script>