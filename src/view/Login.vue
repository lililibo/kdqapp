<template>
  <div>
    <!-- <div class="btn" @click="back">登录</div> -->
    <div class="btn" @click="gettoken">获取token</div>
    <div>token{{token}}</div>
    <div class="btn" @click="refresh">刷新token<div>
      <div>刷新的token{{refreshToken}}</div>
    </div>关闭页面</div>
    
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "登录",
      token: "",
      refreshToken:'',
    };
  },
  mounted() {
    var that = this

    // setupWebViewJavascriptBridge(function(bridge) {
    //   bridge.callHandler(
    //     "getToken",
    //     { titile: 1111 },
    //     function responseCallback(responseData) {
    //       that.token = JSON.stringify(responseData);
    //     }
    //   );
    // });
  
    

  
    
  
        
  },
  methods: {
    back() {
      this.$router.push("/team");
    },
    gettoken() {
      connectAppShare('getToken',function responseCallback(responseData) {
      　　　　that.token = responseData

      　　})
    },
    refresh() {
      connectAppShare('refreshToken',function responseCallback(responseData) {
      　　　　that.refreshToken = responseData

      　　})
    }
  }
};
</script>

<style scoped>
.btn{
  height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  line-height: 50px;
}
</style>
