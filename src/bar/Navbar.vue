<template>
  <div class="weui-navbar">
    <wv-navbar-item v-for="(item,index) in items" :key="index" :is-selected="index === mySelected" @weui-item-select="selectItem" :theKey="index">
      {{item}}
    </wv-navbar-item>
  </div>
</template>

<script>
  import NavbarItem from './NavbarItem.vue';

  export default {
    name: 'wv-navbar',
    data() {
      return {
        mySelected: this.selected
      }
    },
    props: {
      /**
       * Navbar的选项数组
       * 支持纯字符串格式和包含key、text字段的对象格式
       * 若为纯字符串，则该项的key为数组下标
       */
      items: {
        type: Array,
        required: true
      },

      /**
       * 选中项的key值
       */
      selected: {
        type: Number,
        required: true,
        twoWay: true
      }
    },

    computed: {
      translatedItems() {
        return this.items.map((item, key) => {
          if (typeof item === 'string') {
            return {
              key: key,
              text: item
            };
          } else {
            return item;
          }
        });
      }
    },

    methods: {
      selectItem(key) {
        var _this = this
        if (_this.mySelected !== key) {
          _this.mySelected = key
          this.$emit("update:selected", key)
        }
      }
    },
    components: {
      NavbarItem
    }
  }
</script>