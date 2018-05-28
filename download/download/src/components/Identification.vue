<template>
  <div>
    <!--{{msg}}-->
  </div>
</template>
<script>
  export default{
      data(){
          return{

          }
      },
    mounted(){
      var _this = this;
      var ua = navigator.userAgent;
      var isIos = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
      var uas = window.navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1;
      if(isIos && uas.match(/MicroMessenger/i) == 'micromessenger'){
//        alert('Ios');
        _this.$router.push({path:'/iosDownloadCover'})
      }else if(isAndroid && uas.match(/MicroMessenger/i) == 'micromessenger'){
//        alert('Android');
        _this.$router.push({path:'/androidDownloadCover'})
      }else if(uas.match(/MicroMessenger/i) != 'micromessenger' && isIos){
        _this.$router.push({path:'/iosDownload'});
      }else if(uas.match(/MicroMessenger/i) != 'micromessenger' && isAndroid){
          _this.$router.push({path:'/androidDownload'});
      }else{
          alert("请使用移动设备打开该页面!!!");
      }
    }
  }
</script>
