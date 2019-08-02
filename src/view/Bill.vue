<template>
  <div>
    <div class="lbmain1">
      <div>
        <div class="lbtext1">领取了~~半夏琉璃的红包</div>
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
    return{

    }
  }
}
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
