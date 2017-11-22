<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Cell</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="">
      <div class="bd">
        <wv-cells-title>带说明的列表项</wv-cells-title>
        <wv-cells>
          <wv-cell>
            <span slot="body">标题文字</span>
            <span slot="footer">说明文字</span>
          </wv-cell>
        </wv-cells>
        <wv-cells-title>带图标、说明的列表项</wv-cells-title>
        <wv-cells type="split">
          <wv-cell>
            <img slot="header" :src="imageUrl" alt="" style="width:20px;margin-right:5px;display:block">
            <span slot="body">标题文字</span>
            <span slot="footer">说明文字</span>
          </wv-cell>
          <wv-cell>
            <img slot="header" :src="imageUrl" alt="" style="width:20px;margin-right:5px;display:block">
            <span slot="body">标题文字</span>
            <span slot="footer">说明文字</span>
          </wv-cell>
        </wv-cells>
        <wv-cells-title>带跳转的列表项</wv-cells-title>
        <wv-cells type="access">
          <wv-link-cell to="javascript:;">
            <span slot="body">cell standard</span>
            <span slot="footer"></span>
          </wv-link-cell>
          <wv-link-cell to="javascript:;">
            <span slot="body">cell standard</span>
            <span slot="footer"></span>
          </wv-link-cell>
        </wv-cells>
        <wv-cells-title>带说明、跳转的列表项</wv-cells-title>
        <wv-cells type="access">
          <wv-link-cell to="javascript:;">
            <span slot="body">cell standard</span>
            <span slot="footer">说明文字</span>
          </wv-link-cell>
          <wv-link-cell to="javascript:;">
            <span slot="body">cell standard</span>
            <span slot="footer">说明文字</span>
          </wv-link-cell>
        </wv-cells>
        <wv-cells-title>带图标、说明、跳转的列表项</wv-cells-title>
        <wv-cells type="access">
          <wv-link-cell to="javascript:;">
            <img slot="header" :src="imageUrl" alt="" style="width:20px;margin-right:5px;display:block">
            <span slot="body">cell standard</span>
            <span slot="footer">说明文字</span>
          </wv-link-cell>
          <wv-link-cell to="javascript:;">
            <img slot="header" :src="imageUrl" alt="" style="width:20px;margin-right:5px;display:block">
            <span slot="body">cell standard</span>
            <span slot="footer">说明文字</span>
          </wv-link-cell>
        </wv-cells>
        <wv-cells-title>单选列表项</wv-cells-title>
        <wv-cells type="radio">
          <wv-radio-cell :ids="radioParams.ids" :values="radioParams.values" :labels="radioParams.labels" name="radio" v-model="RadioPicked"
          />
        </wv-cells>
        <wv-cells-title>复选列表项</wv-cells-title>
        <wv-cells type="checkbox">
          <wv-checkbox-cell id="checkbox1" name="checkbox" label="复选项目1" v-model="checkboxPicked_1"></wv-checkbox-cell>
          <wv-checkbox-cell id="checkbox2" name="checkbox" label="复选项目2" v-model="checkboxPicked_2"></wv-checkbox-cell>
        </wv-cells>
        <wv-cells-title>开关</wv-cells-title>
        <wv-cells type="form">
          <wv-switch-cell label="标题文字" v-model="switchValue"></wv-switch-cell>
        </wv-cells>
        <wv-cells-title>表单</wv-cells-title>
        <wv-cells type="form">
          <wv-input-cell type="number" label="qq" placeholder="请输入qq号" v-model="inputQqValue" />
          <wv-input-cell type="text" label="验证码" placeholder="请输入验证码" :vcode="vcode"></wv-input-cell>
          <wv-input-cell type="number" label="银行卡" placeholder="请输入银行卡号"></wv-input-cell>
          <wv-input-cell type="text" label="验证码" placeholder="请输入验证码" :vcode="vcode" :warn="true"></wv-input-cell>
        </wv-cells>
        <wv-cells-tips>底部说明文字底部说明文字</wv-cells-tips>
        <wv-button-area>
          <wv-button type="primary">确定</wv-button>
        </wv-button-area>
        <wv-cells-title>上传</wv-cells-title>
        <wv-cells type="form">
          <wv-cell>
            <wv-uploader slot="body" :count="3" :maxlength="5">
              <span slot="title">图片上传</span>
              <wv-uploader-files slot="uploader-files">
                <wv-uploader-file :imageUrl="imageUrl"></wv-uploader-file>
                <wv-uploader-file :imageUrl="imageUrl"></wv-uploader-file>
                <wv-uploader-file :imageUrl="imageUrl"></wv-uploader-file>
                <wv-uploader-file :imageUrl="imageUrl" has-status>
                  <wv-icon slot="status" name="warn"></wv-icon>
                </wv-uploader-file>
                <wv-uploader-file :imageUrl="imageUrl" has-status>
                  <span slot="status">50%</span>
                </wv-uploader-file>
              </wv-uploader-files>
            </wv-uploader>
          </wv-cell>
        </wv-cells>
        <wv-cells-title>文本域</wv-cells-title>
        <wv-cells type="form">
          <wv-input-cell type="textarea" placeholder="请输入评论" :maxlength="200" :rows="textareaRows" name="textarea" v-model="textareaValue"></wv-input-cell>
        </wv-cells>
        <wv-toptips v-show="toptipsCount > 0">错误提醒</wv-toptips>
        <wv-cells-title>表单报错</wv-cells-title>
        <wv-cells type="form">
          <wv-input-cell type="number" label="卡号" placeholder="请输入卡号" v-model="inputCardValue" :warn="true"></wv-input-cell>
        </wv-cells>
        <wv-cells-title>选择</wv-cells-title>
        <wv-cells type="split">
          <wv-select-cell :before="true" :options="areaCodeOptions" v-model="areaSelected">
            <wv-cell-input slot="body" type="text" placeholder="请输入号码" v-model="inputPhoneValue">
            </wv-cell-input>
          </wv-select-cell>
        </wv-cells>
        <wv-cells-title>选择</wv-cells-title>
        <wv-cells type="split">
          <wv-select-cell :after="true" :options="nationCodeOptions" v-model="nationCodeSelect">
            <label class="weui-label" slot="header">国家/地区</label>
          </wv-select-cell>
        </wv-cells>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imageUrl: 'http://img.buzhizhe.cn/o_1bvbmvj9q1tegirmu619eh1506a.png',
        vcode: 'http://pic.zijian92.cn/vcode.jpg',
        textareaRows: 3,
        textareaValue: '文本域',
        toptipsCount: 3,
        inputCardValue: '',
        inputDateValue: '',
        inputDatetimeValue: '',
        inputPhoneValue: '',
        areaCodeOptions: {
          0: '+86',
          1: '+65',
          2: '+66'
        },
        nationCodeOptions: {
          0: '安道尔',
          1: '中国',
          2: '法国'
        },
        nationCodeSelect: 0,
        checkboxPicked_1: true,
        checkboxPicked_2: false,
        RadioPicked: 'one',
        radioParams: {
          ids: [1, 2],
          values: ['one', 'two'],
          labels: ['one', 'two']
        },
        switchValue: true,
        inputQqValue: '457217740',
        areaSelected: 0
      }
    },
    methods: {},
    components: {}
  }
</script>