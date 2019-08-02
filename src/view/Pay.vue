<template>
  <div>
    <div class="body cbody">
      <div class="form cform">
        <div class="form-top">
          <div class="form-top-1">婕宇娜美容</div>
          <div class="form-top-2">芦荟胶补水洗脸特价48</div>
          <div @click="toconfirmpay" class="form-top-3">去买单</div>
          <div class="form-top-4">有效期 2019-07-31至2019-08-30</div>
        </div>
        <div class="form-center">
          <div class="from-center-item">
            <label>使用说明：</label>
            <div class="text">加微309166967</div>
          </div>
          <div class="from-center-item">
            <label>店铺名称：</label>
            <div class="text">婕宇娜美容</div>
          </div>
          <div class="from-center-item">
            <label>联系电话：</label>
            <div class="text">13544072550</div>
          </div>
          <div class="from-center-item">
            <label>地址：</label>
            <div class="mapbody">
              <img
                class="mapIcon"
                src="https://api.fn112.com/Files/ad_url/190731091831191_9995_tmp_563dc78cbd3c736a1ebbdfa4f87c11a192b4c07967dfda64.jpg"
              />
              <div class="maptxt">海云轩(深圳市宝安区宝安大道1168</div>
            </div>
          </div>
          <div class="from-center-item">
            <label>温馨提示：</label>
            <div class="text">本券使用有效性最终解释权归发券商家所有，平台对此券使用效果不承担责任。</div>
          </div>
          <div class="from-center-item ad">
            <label></label>
            <div class="adtxt">深层清洁，补水，皮肤毛孔超透气</div>
            <img
              class="adimg"
              src="https://api.fn112.com/Files/ad_url/190731091831191_9995_tmp_563dc78cbd3c736a1ebbdfa4f87c11a192b4c07967dfda64.jpg"
            />
          </div>
        </div>
      </div>
      <div class="logo">
        <img
          src="https://api.fn112.com/Files/ad_url/190731091831191_9995_tmp_563dc78cbd3c736a1ebbdfa4f87c11a192b4c07967dfda64.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
    toconfirmpay() {
      this.$router.push("/confirmpay");
    }
  }
};
</script>

<style scoped>
.cbody {
  position: relative;
  padding: 20px 10px 10px 10px;
  background-color: #e0001b;
}

.cform {
  background-color: #fff;
  border-radius: 6px;
}

.form-top {
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
}

.form-top-1 {
  font-size: 20px;
  margin-top: 60px;
}

.form-top-2 {
  margin-top: 20px;
  font-size: 30px;
}

.form-top-3 {
  margin-top: 25px;
  font-size: 20px;
  background-color: #e0001b;
  color: #fff;
  border-radius: 6px;
  width: 150px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.form-top-4 {
  margin-top: 15px;
  font-size: 14px;
  color: #666;
}

.form-center {
  margin-top: 15px;
}

.from-center-item {
  margin: 5px;
  padding: 5px;
}

.from-center-item label {
  font-size: 17px;
  color: #333;
}

.from-center-item .text {
  display: block;
  font-size: 15px;
  color: #333;
  padding-left: 25px;
  padding-top: 10px;
}

.logo {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  position: absolute;
  left: 138px;
  top: 24px;
  background-color: #eee;
}

.logo img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid #eee;
}

.mapbody {
  display: flex;
}

.mapIcon {
  width: 24px;
  height: 28px;
  margin-left: 5px;
}

.maptxt {
  display: block;
  font-size: 15px;
  color: #333;
  padding-top: 10px;
  flex: 1;
}
.ad {
  padding: 0;
}
.adtxt {
  display: block;
  font-size: 16px;
  color: #333;
  padding-left: 25px;
  padding-top: 10px;
  padding-bottom: 5px;
}

.adimg {
  width: 345px;
}
</style>
