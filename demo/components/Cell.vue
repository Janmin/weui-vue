<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Button</h1>
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
          <wv-radio-cell id="x11" name="radio1" value="One" label="cell standard">
          </wv-radio-cell>
          <wv-radio-cell id="x12" name="radio1" value="Two" label="cell standard">
          </wv-radio-cell>
        </wv-cells>
        <wv-cells-title>复选列表项</wv-cells-title>
        <wv-cells type="checkbox">
          <wv-checkbox-cell id="s11" name="checkbox1" value="One" label="standard is dealt for u."></wv-checkbox-cell>
          <wv-checkbox-cell id="s12" name="checkbox1" value="Two" label="standard is dealicient for u."></wv-checkbox-cell>
        </wv-cells>
        <wv-cells-title>开关</wv-cells-title>
        <wv-cells type="form">
          <wv-switch-cell name="switch" label="标题文字"></wv-switch-cell>
        </wv-cells>
        <wv-cells-title>表单</wv-cells-title>
        <wv-cells type="form">
          <wv-input-cell type="text" label="qq" placeholder="请输入qq号"></wv-input-cell>
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
                <wv-uploader-file imageUrl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"></wv-uploader-file>
                <wv-uploader-file imageUrl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"></wv-uploader-file>
                <wv-uploader-file imageUrl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"></wv-uploader-file>
                <wv-uploader-file imageUrl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"
                  has-status>
                  <!-- <icon slot="status" name="warn"></icon> -->
                </wv-uploader-file>
                <wv-uploader-file imageUrl="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg"
                  has-status>
                  <span slot="status">50%</span>
                </wv-uploader-file>
              </wv-uploader-files>
            </wv-uploader>
          </wv-cell>
        </wv-cells>
        <wv-cells-title>文本域</wv-cells-title>
        <wv-cells type="form">
          <wv-input-cell type="textarea" placeholder="请输入评论" :maxlength="200" :rows="rows" :value.sync="value" name="textarea"></wv-input-cell>
        </wv-cells>
        <wv-toptips v-show="toptipsCount > 0">错误提醒</wv-toptips>
        <wv-cells-title>表单报错{{cardValue}}</wv-cells-title>
        <wv-cells type="form">
          <wv-input-cell type="number" label="卡号" placeholder="请输入卡号" :value.sync="cardValue" :warn="true"></wv-input-cell>
          <wv-input-cell type="date" label="日期" :value.sync="dateValue"></wv-input-cell>
          <wv-input-cell type="datetime-local" label="时间" :value.sync="datetimeValue"></wv-input-cell>
        </wv-cells>
        <wv-cells-title>选择</wv-cells-title>
        <wv-cells type="split">
          <wv-select-cell :before="true" :options="areaCodeOptions" :selected="0">
            <wv-cell-input slot="body" type="text" placeholder="请输入号码" :value.sync="phoneValue">
            </wv-cell-input>
          </wv-select-cell>
        </wv-cells>
        <wv-cells-title>选择</wv-cells-title>
        <wv-cells type="split">
          <wv-select-cell :after="true" :options="nationOptions" :selected.sync="mySelect">
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
        imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=266057472,3867980612&fm=27&gp=0.jpg',
        vcode: 'http://pic.zijian92.cn/vcode.jpg',
        rows: 3,
        value: '123',
        toptipsCount: 3,
        cardValue: '',
        dateValue: '',
        datetimeValue: '',
        phoneValue: '',
        areaCodeOptions: {
          0: '+86',
          1: '+65',
          2: '+66'
        },
        nationOptions: {
          0: '安道尔',
          1: '中国',
          2: '法国'
        },
        mySelect: 0
      }
    },
    methods: {},
    components: {}
  }
</script>