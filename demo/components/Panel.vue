<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page_title">Panel</h1>
      <p class="page_desc">基于WeUI设计的Vue.js组件库</p>
    </div>
    <div class="">
      <wv-panel :access="true">
        <wv-panel-header>图文组合列表</wv-panel-header>
        <wv-panel-body>
          <wv-media-box type="appmsg">
            <wv-media-header>
              <h1>H1</h1>
            </wv-media-header>
            <wv-media-body>
              <wv-media-title>标题一</wv-media-title>
              <wv-media-description>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</wv-media-description>
            </wv-media-body>
          </wv-media-box>
          <wv-media-box type="appmsg" link="javascript:;">
            <wv-media-header>
              <wv-media-appmsg-thumb src="http://pic.zijian92.cn/icon_tabbar.png"></wv-media-appmsg-thumb>
            </wv-media-header>
            <wv-media-body>
              <wv-media-title>标题二</wv-media-title>
              <wv-media-description>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</wv-media-description>
            </wv-media-body>
          </wv-media-box>
        </wv-panel-body>
        <wv-panel-footer to="">查看更多</wv-panel-footer>
      </wv-panel>
      <wv-panel access>
        <wv-panel-header>文字组合列表</wv-panel-header>
        <wv-panel-body>
          <wv-media-box type="text">
            <wv-media-body>
              <wv-media-title>标题一</wv-media-title>
              <wv-media-description>
                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
              </wv-media-description>
            </wv-media-body>
          </wv-media-box>
          <wv-media-box type="text">
            <wv-media-body>
              <wv-media-title>标题二</wv-media-title>
              <wv-media-description>
                由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。
              </wv-media-description>
            </wv-media-body>
          </wv-media-box>
        </wv-panel-body>
        <wv-panel-footer to="">查看更多</wv-panel-footer>
      </wv-panel>
      <wv-panel>
        <wv-panel-header>小图文组合列表</wv-panel-header>
        <wv-panel-body>
          <wv-media-box type="small-appmsg">
            <wv-media-body>
              <wv-cells type="access">
                <wv-link-cell to="">
                  <img slot="header" src="http://pic.zijian92.cn/icon_tabbar.png" style="width:20px;margin-right:5px;display:block">
                  <p slot="body">文字标题</p>
                  <span slot="footer"></span>
                </wv-link-cell>
                <wv-link-cell to="">
                  <img slot="header" src="http://pic.zijian92.cn/icon_tabbar.png" style="width:20px;margin-right:5px;display:block">
                  <p slot="body">文字标题</p>
                  <span slot="footer"></span>
                </wv-link-cell>
              </wv-cells>
            </wv-media-body>
          </wv-media-box>
        </wv-panel-body>
      </wv-panel>
      <wv-panel>
        <wv-panel-header>文字列表附来源</wv-panel-header>
        <wv-panel-body>
          <wv-media-box type="text">
            <wv-media-body>
              <wv-media-title>标题一</wv-media-title>
              <wv-media-description>由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</wv-media-description>
              <wv-media-info>
                <wv-media-info-meta>文字来源</wv-media-info-meta>
                <wv-media-info-meta>时间</wv-media-info-meta>
                <wv-media-info-meta extra>其他信息</wv-media-info-meta>
              </wv-media-info>
            </wv-media-body>
          </wv-media-box>
        </wv-panel-body>
      </wv-panel>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>