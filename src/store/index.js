import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store(
  {
    state: {
      //放数据的
      token:'111',//全局token
    },
    getters: {
      // 计算属性接受一个参数state
    },
    mutations: {
      //唯一能修改state接收一个state一个传的参数
      refreshtoken (state,newtoken) {
        state.token = newtoken
      },
      settoken (state,token) {
        state.token = token
      }
    },
    actions:{
      // 可以多次mutations的东西
    },
  }
)
export default store;
