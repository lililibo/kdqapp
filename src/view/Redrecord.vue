<template>
  <div>
    <van-tabs sticky @click="area" title-active-color="#de443b">
      <van-tab v-for="item in jdlist" :key="item.index" :title="item.name"></van-tab>
    </van-tabs>
    <!--  点击我收到的 -->
    <div v-show="showget" class="lbmain1">
      <div>
        <div class="lbtext1">领取了~~半夏琉璃的红包</div>
        <div class="lbtext3">2019-07-31 09:50:30</div>
      </div>
      <div>100</div>
    </div>
    <!-- 点击我发出的 -->
    <div v-show="!showget" class="lbmain1">
      <div>
        <div class="lbtext1">领取了SUPER☞达令的红包</div>
        <div class="lbtext3">2019-07-31 09:50:30</div>
      </div>
      <div>100</div>
    </div>
    <div class="lbtext2">暂无记录</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jdlist: [
        { index: 1, name: "我收到的" },
        { index: 2, name: "我发出的" }
      ],
      showget:true
    };
  },
  methods: {
    //点击不同专区
    area(index, title) {
      this.showget = !this.showget
      this.$toast(title);
    },
  }
};
</script>

<style scoped>
.lbmain1{
  display: flex;
  border-bottom: 1px solid #eee;
  justify-content: space-between;
  height: 50px;
  padding: 6px 20px 6px 20px;
  box-sizing: border-box;
}
.lbtext1{
  width: 300px;
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.lbtext2{
  text-align: center;
  color: #999;
  line-height: 150px;
  font-size: 20px;
}
.lbtext3{
  font-size: 12px;
}

</style>