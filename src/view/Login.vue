<template>
  <div>
    <div class="btn" @click="back">登录</div>
    <div class="btn" @click="gettoken">获取token</div>
    <div>token{{token.token}}</div>
    <div class="btn" @click="refresh">刷新token</div>
      <div>刷新的token{{refreshToken}}</div>
    <div class="btn" @click="close">关闭页面</div>
    
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
    
  },
  methods: {
    back() {
      this.$router.push("/mycode");
    },
    gettoken() {
      if(window.isAndroid){
        this.token =  window.android.getToken()
      }else{
        
      window.setupWebViewJavascriptBridge(bridge=> {
      bridge.callHandler(
        "getToken",
        { titile: 1111 },
        responseData =>{
          this.token = responseData;
        }
      )
    })
      }
      
    },
    close() {
      window.setupWebViewJavascriptBridge(bridge =>{
      bridge.callHandler(
        "closeWebPage"
      )
    })
    },
    refresh() {
      window.setupWebViewJavascriptBridge(bridge =>{
      bridge.callHandler(
        "refreshToken",
        { titile: 1111 },
        responseData=> {
          this.refreshToken = JSON.stringify(responseData);
        }
      )
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
