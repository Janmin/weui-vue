import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ActionSheet from '@/components/ActionSheet'
import Button from '@/components/Button'
import Cell from '@/components/Cell'
import Toast from '@/components/Toast'
import Dialog from '@/components/Dialog'
import Progress from '@/components/Progress'
import Message from '@/components/Message'
import Article from '@/components/Article'
import Icon from '@/components/Icon'
import Panel from '@/components/Panel'
import Girds from '@/components/Girds'
import Tabbar from '@/components/Tabbar'
import Navbar from '@/components/Navbar'
import SearchBar from '@/components/SearchBar'
import Bar from '@/components/Bar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/action-sheet',
      name: 'ActionSheet',
      component: ActionSheet
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/cell',
      name: 'Cell',
      component: Cell
    },
    {
      path: '/toast',
      name: 'Toast',
      component: Toast
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    },
    {
      path: '/progress',
      name: 'Progress',
      component: Progress
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },
    {
      path: '/icon',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/panel',
      name: 'Panel',
      component: Panel
    },
    {
      path: '/girds',
      name: 'Girds',
      component: Girds
    },
    {
      path: '/tabbar',
      name: 'Tabbar',
      component: Tabbar
    },
    {
      path: '/navbar',
      name: 'Navbar',
      component: Navbar
    },
    {
      path: '/search',
      name: 'SearchBar',
      component: SearchBar
    },
    {
      path: '/bar',
      name: 'Bar',
      component: Bar
    }
  ]
})
