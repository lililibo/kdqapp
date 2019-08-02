<template>
  <div class="suoyou">
    <div @click="tobill" class="last">账单</div>
    <img class="img" src="https://api.fn112.com/image/money.png" >
    <div class="lbtext1">我的余额</div>
    <div class="lbtext2">100</div>
    <div class="lbtext3">余额可消费，可提现</div>
    <div class="lbtext4">充值赠送：0</div>
    <van-button @click="recharge" class="lbbtn1" type="default">充值</van-button>
    <van-button @click="withdrawal" class="lbbtn2" type="default">提现</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    recharge() {
      this.$router.push("/recharge")
    },
    withdrawal() {
      this.$router.push("/withdrawal")
    },
    tobill() {
      this.$router.push("/bill")
    }
  }
}
</script>

<style scoped>
.lbbtn1{
  background: #e0001b;
  width: 250px;
  margin-left: 65px;
  margin-top: 40px;
  color: #fff;
  border-radius: 6px;
}
.lbbtn2{
  background: #308dea;
  width: 250px;
  color: #fff;
  margin-left: 65px;
  margin-top: 20px;
  border-radius: 6px;
}
.img{
  margin-left: 140px;
}
.lbtext1{
  text-align: center;
  margin-top: 14px;
  font-size: 18px;
  color: #333;
}
.lbtext2{
  text-align: center;
  margin-top: 14px;
  font-size: 26px;
  font-weight: bold;
}
.lbtext3{
  text-align: center;
  margin-top: 14px;
  font-size: 16px;
  color: #999;
}
.lbtext4{
  text-align: center;
  margin-top: 14px;
  font-size: 18px;
  color: #666;
}
.last{
  text-align: right;
  font-size: 18px;
  color: #666;
  margin-right: 10px;
  line-height: 50px;
}
</style>
