import ButtonArea from './button/ButtonArea.vue'
import Button from './button/Button.vue'

import CellsTitle from './cells/CellsTitle.vue'
import CellsTips from './cells/CellsTips.vue'
import Cells from './cells/Cells.vue'
import Cell from './cells/Cell.vue'
import LinkCell from './cells/LinkCell.vue'
import RadioCell from './cells/RadioCell.vue'

import CheckboxCell from './cells/CheckboxCell.vue'
import SwitchCell from './cells/SwitchCell.vue'
import InputCell from './cells/InputCell.vue'
import SelectCell from './cells/SelectCell.vue'
import CellHeader from './cells/CellHeader.vue'
import CellBody from './cells/CellBody.vue'
import CellFooter from './cells/CellFooter.vue'

import CellInput from './cells/CellInput.vue'
import CellTextarea from './cells/CellTextarea.vue'
import CellSelect from './cells/CellSelect.vue'

import Toptips from './tips/Toptips.vue'

import Toast from './toast/Toast.vue'

import Dialog from './dialog/Dialog.vue'

import Progress from './progress/Progress.vue'

import Message from './message/Message.vue'

import Article from './article/Article.vue'

import Actionsheet from './actionsheet/ActionSheet.vue'

import Icon from './icon/Icon.vue'

import Grids from './grids/Grids.vue'
import Grid from './grids/Grid.vue'

import Uploader from './uploader/Uploader.vue'
import UploaderFiles from './uploader/UploaderFiles.vue'
import UploaderFile from './uploader/UploaderFile.vue'

import Tab from './bar/Tab.vue'
import Navbar from './bar/Navbar.vue'
import NavbarItem from './bar/NavbarItem.vue'
import Tabbar from './bar/Tabbar.vue'
import TabbarItem from './bar/TabbarItem.vue'

import Panel from './panel/Panel.vue'
import PanelHeader from './panel/PanelHeader.vue'
import PanelBody from './panel/PanelBody.vue'
import PanelFooter from './panel/PanelFooter.vue'

import MediaBox from './media/MediaBox.vue'
import MediaHeader from './media/MediaHeader.vue'
import MediaBody from './media/MediaBody.vue'
import MediaAppmsgThumb from './media/MediaAppmsgThumb.vue'
import MediaTitle from './media/MediaTitle.vue'
import MediaDescription from './Media/MediaDescription.vue'
import MediaInfo from './media/MediaInfo.vue'
import MediaInfoMeta from './media/MediaInfoMeta.vue'

import SearchBar from './search-bar/SearchBar.vue'

import Flex from './flex/Flex.vue'
import FlexItem from './flex/FlexItem.vue'

import Gallery from './gallery/Gallery.vue'
import GalleryButton from './gallery/GalleryButton.vue'

import Footer from './footer/Footer.vue'

import Badge from './badge/Badge.vue'

const components = [
  ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cells,
  Cell,
  LinkCell,
  RadioCell,
  CheckboxCell,
  SwitchCell,
  InputCell,
  SelectCell,
  CellHeader,
  CellBody,
  CellFooter,
  CellInput,
  CellTextarea,
  CellSelect,
  Toptips,
  Toast,
  Dialog,
  Progress,
  Message,
  Article,
  Actionsheet,
  Icon,
  Grids,
  Grid,
  Uploader,
  UploaderFiles,
  UploaderFile,
  Tab,
  Navbar,
  NavbarItem,
  Tabbar,
  TabbarItem,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaHeader,
  MediaBody,
  MediaAppmsgThumb,
  MediaTitle,
  MediaDescription,
  MediaInfo,
  MediaInfoMeta,
  SearchBar,
  Flex,
  FlexItem,
  Gallery,
  GalleryButton,
  Footer,
  Badge
]

const install = function (Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ButtonArea,
  Button,
  CellsTitle,
  CellsTips,
  Cells,
  Cell,
  LinkCell,
  RadioCell,
  CheckboxCell,
  SwitchCell,
  InputCell,
  SelectCell,
  CellHeader,
  CellBody,
  CellFooter,
  CellInput,
  CellTextarea,
  CellSelect,
  Toptips,
  Toast,
  Dialog,
  Progress,
  Message,
  Article,
  Actionsheet,
  Icon,
  Grids,
  Grid,
  Uploader,
  UploaderFiles,
  UploaderFile,
  Tab,
  Navbar,
  NavbarItem,
  Tabbar,
  TabbarItem,
  Panel,
  PanelHeader,
  PanelBody,
  PanelFooter,
  MediaBox,
  MediaHeader,
  MediaBody,
  MediaAppmsgThumb,
  MediaTitle,
  MediaDescription,
  MediaInfo,
  MediaInfoMeta,
  SearchBar,
  Flex,
  FlexItem,
  Gallery,
  GalleryButton,
  Footer,
  Badge
}
