import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/', component: () => import('./view/Login.vue')
    },
    {
      path: '/redrecord', component: () => import('./view/Redrecord.vue'),meta: { title: '红包记录' }
    },
    {
      path: '/couponrecord', component: () => import('./view/Couponrecord.vue'),meta: { title: '卡券记录' }
    },
    {
      path: '/personset', component: () => import('./view/Personset.vue'),meta: { title: '个人设置' }
    },
    {
      path: '/balance',
      component: () => import('./view/Balance.vue'),
      meta: { title: '我的余额' },
    },
    {
      path: '/recharge', component: () => import('./view/Recharge.vue'), meta: { title: '充值' }
    },
    {
      path: '/withdrawal', component: () => import('./view/Withdrawal.vue'), meta: { title: '提现' }
    },
    {
      path: '/bill', component: () => import('./view/Bill.vue'), meta: { title: '账单' }
    },
    {
      path: '/coupon', component: () => import('./view/Coupon.vue'), meta: { title: '我的优惠券' }
    },
    {
      path: '/pay', component: () => import('./view/Pay.vue'), meta: { title: '我的优惠券' }
    },
    {
      path: '/confirmpay', component: () => import('./view/Confirmpay.vue'), meta: { title: '去买单' }
    },
    {
      path: '/team', component: () => import('./view/Team.vue'), meta: { title: '我的团队' }
    },
  ]
})