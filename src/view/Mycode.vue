<template>
  <div class="suoyou">
    <div class="lbtext1">雨依那么淅沥</div>
    <div class="lbtext2">推荐码：2901462</div>
    <img
      class="img"
      src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1564730833&di=d2a887c17b475370e6d9e315300ae609&src=http://b-ssl.duitang.com/uploads/item/201807/14/20180714211943_vlvpq.jpg"
    />
    <div>{{res}}</div>
    <div>{{token}}</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: "",
      res: ""
    };
  },
  mounted() {
    var that = this;
    if (isAndroid) {
      this.token = window.android.getToken();
    } else {
      setupWebViewJavascriptBridge(bridge => {
        bridge.callHandler("getToken", { titile: 1111 }, responseData => {
          this.token = responseData.token;
          console.log(this.token);
          axios
            .get("https://api.test.fn112.com/User/GetUserId", {
              header: {
                Authorization: "bearer" + this.token
              }
            })
            .then(function(res) {
              that.token = res;
            })
            .catch(function(err) {
              that.$toast(err.message)
            });
        });
      });
    }
  }
};
</script>

<style scoped>
.suoyou {
  overflow: hidden;
  background: url("https://api.fn112.com/image/tuiguang1.jpg") no-repeat fixed
    center;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  padding-top: 320px;
  position: relative;
}
.lbtext1 {
  text-align: center;
  color: #fff;
}
.lbtext2 {
  text-align: center;
  color: #fff;
}
.img {
  position: absolute;
  top: 387px;
  left: 147px;
  width: 0.85rem;
  height: 0.85rem;
}
</style>
