<template>
  <div>
    <div @click="topay" class="lbmain">
      <img class="img" src="https://api.fn112.com/Files/cardsetbg_img/190731091638631_7961_tmp_d083ca0274b6302b128c127f9e4929ba728c5a5a68b047af.jpg" >
      <div class="lbtext">
        <div>芦荟胶补水洗脸特价48</div>
        <div>加微309166967</div>
        <div>有效期：2019-07-31至2019-08-30</div>
      </div>
    </div>
    <div class="lbtext2">暂无记录</div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  methods:{
    topay() {
      this.$router.push("/pay");
    }
  }
}
</script>

<style scoped>
.lbmain{
  display: flex;
  margin-bottom: 15px;
  height: 100px;
  background-color: #fec;
  padding: 4px;
  box-sizing: border-box;
}
.img{
  width: 90px;
  height: 90px;
}
.lbtext2{
  text-align: center;
  color: #999;
  line-height: 150px;
  font-size: 20px;
}
.lbtext{
  width: 260px;
  overflow: hidden;
}
</style>
