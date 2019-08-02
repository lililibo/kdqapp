import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { Loading,PullRefresh,Toast,Col,Icon,Cell,CellGroup,Tab,Tabs,Field,Popup,DatetimePicker,RadioGroup, Radio,Button,Area,Picker } from 'vant'

Vue.use(Loading).use(PullRefresh).use(Toast).use(Col).use(Icon).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(Field).use(Area).use(Popup).use(DatetimePicker).use(RadioGroup).use(Radio).use(Button).use(Picker)


Vue.config.productionTip = false
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
