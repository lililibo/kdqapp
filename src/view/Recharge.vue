<template>
  <div>
    <div class="lbtext1">充值：<span class="bold">{{summoney}}</span></div>
    <div class="lbmain1">
      <div @click="one" :class="[summoney == '100' ? 'lbtext3' : 'lbtext2']">100</div>
      <div @click="two" :class="[summoney == '200' ? 'lbtext3' : 'lbtext2']">200</div>
      <div @click="five" :class="[summoney == '500' ? 'lbtext3' : 'lbtext2']">500</div>
      <div @click="ten" :class="[summoney == '1000' ? 'lbtext3' : 'lbtext2']">1000</div>
    </div>
    <div class="lbmain2">
      <span>其他：</span>
      <input v-model="summoney" class="lbinp" type="number" />
    </div>
    <van-button @click="recharge" class="lbbtn1" type="default">充值</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return{
      summoney:'100',
    }
  },
  methods:{
    recharge() {
      this.$toast('1')
    },
    one() {
      this.summoney = '100'
    },
    two() {
      this.summoney = '200'
    },
    five() {
      this.summoney = '500'
    },
    ten() {
      this.summoney = '1000'
    },
  }
}
</script>

<style scoped>
.lbtext1{
  line-height: 50px;
  margin-left: 10px;
}
.lbmain1{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.lbtext2{
  width: 162px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  color: #5695e5;
  margin-top: 25px;
  border: 2px solid #5695e5;
  border-radius: 6px;
}
.lbtext3{
  background-color: #e0001b;
  color: #fff;
  line-height: 80px;
  text-align: center;
  margin-top: 25px;
  border-radius: 6px;
  width: 162px;
  height: 80px;
}
.lbbtn1{
  background: #e0001b;
  width: 250px;
  margin-left: 65px;
  margin-top: 40px;
  color: #fff;
  border-radius: 6px;
}
.bold{
  color: #333;
  font-weight: bold;
  font-size: 18px;
}
.lbmain2{
  margin-top: 25px;
  margin-left: 10px;
}
.lbinp{
  color: #5695e5;
  border: 2px solid #5695e5;
  border-radius: 6px;
}
</style>
