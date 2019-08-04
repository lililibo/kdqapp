import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import { Loading,PullRefresh,Toast,Col,Icon,Cell,CellGroup,Tab,Tabs,Field,Popup,DatetimePicker,RadioGroup, Radio,Button,Area,Picker } from 'vant'

Vue.use(Loading).use(PullRefresh).use(Toast).use(Col).use(Icon).use(Cell).use(CellGroup).use(Tab).use(Tabs).use(Field).use(Area).use(Popup).use(DatetimePicker).use(RadioGroup).use(Radio).use(Button).use(Picker)


Vue.config.productionTip = false
/* 路由发生变化设置仓库token */
router.beforeEach((to, from, next) => {
  let token
  if (window.isAndroid) {
    token = window.android.getToken();
    store.commit('settoken',token)
  } else {
    window.setupWebViewJavascriptBridge(bridge => {
      bridge.callHandler("getToken", responseData => {
        token = responseData.token;
        store.commit('settoken',token)
      });
    });
  }
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
