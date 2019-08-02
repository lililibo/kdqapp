<template>
  <div>
    <div class="lbtext1">提现：<span class="bold">{{summoney}}</span></div>
    
      <span class="lbtext2">￥</span>
      <input v-model="summoney" class="lbinp" type="number" >
    
    <div class="lbtext3">账户余额100，最高可提现0</div>
    <van-button @click="withdrawal" class="lbbtn2" type="default">提现</van-button>
    <div class="lbtext4">
      <span style="color:#308dea">提现说明：</span>
      会员提现金额50起，提现至银行账号(手续费5/笔)，1-3个工作日到账。</div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      summoney:'',
    }
  },
  methods:{
    withdrawal() {
      this.$toast('2')
    }
  }
}
</script>

<style scoped>
.lbbtn2{
  background: #308dea;
  width: 250px;
  color: #fff;
  margin-left: 65px;
  margin-top: 40px;
  border-radius: 6px;
}
.lbtext1{
  color: #000;
  line-height: 50px;
  margin-left: 10px;
}
.bold{
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
.lbtext2{
  font-size: 20px;
  color: #000;
  margin-left: 10px;
}
.lbtext3{
  margin-left: 10px;
  line-height: 50px;
}
.lbtext4{
  margin-left: 10px;
  margin-top: 40px;
  margin: 40px 10px 0 10px;
}
.lbinp{
  border: none;
}
</style>
