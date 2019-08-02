<template>
  <div>
    <div class="suoyou">
      <img class="lbimg1" src="/images/lbmorentou.png" />
      <div class="lbtext2">深圳市商聚投智有限公司</div>
      <!-- lb主要部分 -->
      <form>
        <div class="lbmain1">
          <span>消费总额:</span>
          <input class="lbinput" placeholder="请询问服务员后输入" type="number" />
        </div>
        <div class="lbmain2">
          <span>余额抵扣:</span>
          <input class="lbinput1" placeholder="当前可抵扣0.00" type="number" />
          <span class="lbtext1">全部</span>
        </div>
        <div @click.capture="showPicker = true" class="lbmain1">
          <span>抵用券/优惠券</span>
          <span>请选择</span>
          <van-popup v-model="showPicker" position="bottom">
            <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
            />
          </van-popup>
        </div>
        <div class="lbmain2">
          <span>实付金额</span>
          <span class="lbtext">￥0</span>
        </div>
        <van-button @click="confirm" class="lbbtn1" type="default">确认买单</van-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPicker:false,
      columns: ['优惠券一', '优惠券二', '优惠券三', '优惠券四', '优惠券五']
    }
  },
  methods:{
    //选择优惠券
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    //点击确认买单
    confirm() {

    }
  }
};
</script>

<style scoped>
.suoyou{
  background: #f2f6f9;
  padding-top: 5px;
}
.lbbtn1{
  background: #e0001b;
  width: 250px;
  margin-left: 65px;
  margin-top: 40px;
  color: #fff;
  border-radius: 6px;
}
.lbimg1{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 162px;
}
.lbtext2{
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
}
.lbmain1{
  height: 48px;
  line-height: 48px;
  background: #fff;
  border-bottom: 1px solid #e3e3e3;
  box-sizing: border-box;
  font-size: 16px;
  color: #666;
  padding: 0 20px 0 18px;
  display: flex;
  justify-content: space-between;
}
.lbinput{
  width: 150px;
  font-size: 16px;
  color: #999;
  border: none;
}
.lbimg{
  width: 22px;
  height: 12px;
}
.lbinput1{
  border: none;
  width: 115px;
  font-size: 16px;
  color: #999;
  margin-left: 110px;
}
.lbmain2{
  height: 48px;
  line-height: 48px;
  background: #fff;
  box-sizing: border-box;
  font-size: 16px;
  color: #666;
  padding: 0 20px 0 18px;
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
}
.lbtext{
  color: #e0001b;
  font-size: 20px;
}




.lbtext1{
  color: #e0001b;
  font-size: 16px;
}
</style>
