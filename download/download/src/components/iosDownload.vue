<template>
  <div class="iosDownloadCover-wrap">
    <!--按钮部分-->
    <div class="iosDownloadCover-btn" @click="downIos"><img src="../assets/appleIcon.png" alt="" class="iosDownloadCover-iosIcon"><span class="iosDownloadCover-btn-text">{{anddBtnMsg}}</span></div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        anddBtnMsg:'iPhone版下载'
      }
    },
    methods:{
      downIos(){
          window.location.href = "https://itunes.apple.com/cn/app/ool/id1268908629?mt=8";
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
<style>
  .iosDownloadCover-wrap{
    width:7.5rem;
    height:13.32rem;

    /*max-width: 10.24rem;*/
    max-height:13.32rem;
    background:url('../../src/assets/bgg.png') no-repeat left top;
    background-size:100%;

    display:flex;
    align-items:center;
    margin:0 auto;
    position:relative;
  }

  /*下载按钮*/
  .iosDownloadCover-btn{
    width:5.2rem;
    height:1rem;
    background-color:#292929;
    border-radius:0.5rem;
    line-height:1rem;
    margin:0 auto;
    margin-bottom:-6rem;
  }
  /*下载按钮图标*/
  .iosDownloadCover-iosIcon{
    margin-left:0.9rem;
    margin-top:-0.2rem;
    width:0.55rem;

  }
  /*下载按钮文字部分*/
  .iosDownloadCover-btn-text{
    color:#fff;
    font-size:0.36rem;
    margin-left:18px;
  }
</style>
