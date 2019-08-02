<template>
  <div>
    <div class="last">共0人</div>
    <div class="lbmain">
      <div>2019.8.8-2019.7.7</div>
      <img class="img" src="https://api.fn112.com/image/userlogo/user_level1.png" />
      <div>雨依那么淅沥</div>
    </div>
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
.last{
  border-bottom: 4px solid #f6f6f6;
  text-align: right;
  font-size: 18px;
  color: #666;
  margin-right: 10px;
  line-height: 50px;
}
.lbmain{
  display: flex;
  height: 50px;
  justify-content: space-around;
  line-height: 50px;
  border-bottom: 1px solid #ccc;
}
.img{
  width: 25px;
  height: 25px;
  margin-top: 10px;
}
</style>
