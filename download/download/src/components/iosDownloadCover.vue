<template>
  <div class="iosDownloadCover-wrap">
    <!--遮罩层-->
    <div class="iosDownloadCover-box">
      <!--顶部icon部分  one-->
      <div class="iosDownloadCover-radius">1</div>
      <span class="iosDownloadCover-clickText">点击右上角的<ul class="iosDownloadCover-clickIcon">
        <li></li>
        <li></li>
        <li></li>
      </ul>按钮<img src="../assets/arrowIcon.png" alt="" class="iosDownloadCover-arrowIcon"></span>
      <!--顶部icon部分 two-->
      <div class="iosDownloadCover-radius-T">2</div>
      <span class="iosDownloadCover-clickText-T">选择<div class="iosDownloadCover-clickIcon-T"><img src="../assets/safariIcon.png" alt="" class="iosDownloadCover-broIcon"><span class="iosDownloadCover-openText">在Safari中打开</span></div></span>
    </div>
    <!--按钮部分-->
    <div class="iosDownloadCover-btn"><img src="../assets/appleIcon.png" alt="" class="iosDownloadCover-iosIcon"><span class="iosDownloadCover-btn-text">{{anddBtnMsg}}</span></div>

  </div>
</template>
<script>
  export default{
    data(){
      return{
        anddBtnMsg:'iPhone版下载'
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
  /*遮罩层*/
  .iosDownloadCover-box{
    width:7.5rem;
    height:13.32rem;
    max-height:13.32rem;
    background-color:black;
    background:rgba(0,0,0,0.5);
    position:absolute;
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

  /*顶部部分*/
  .iosDownloadCover-radius{
    width:0.3rem;
    height:0.3rem;
    background-color:#f84f5c;
    text-align:center;
    line-height:0.3rem;
    border-radius:50%;
    color:#fff;
    font-family:"黑体";
    margin-left:3.23rem;
    margin-top:0.4rem;
    display:inline-block;
    font-size:0.24rem;
  }
  .iosDownloadCover-clickText{
    font-size:0.3rem;
    color:#fff;
    margin-top:0.4rem;
  }
  /*顶部中间自定义icon*/
  .iosDownloadCover-clickIcon{
    display:inline-block;
    width:0.5rem;
    height:0.26rem;
    border-radius:0.06rem;
    background:#333;
    -webkit-box-shadow: 0px 2px 2px #000;
    -moz-box-shadow: 0px 2px 2px #000;
    box-shadow: 0px 2px 2px #000;
    margin-left:0.06rem;
    margin-right:0.06rem;
  }
  /*顶部箭头icon*/
  .iosDownloadCover-arrowIcon{
    width:0.6rem;
    height:0.7rem;
    margin-left:0.04rem;
  }
  /*自定义icon内的小圆*/
  .iosDownloadCover-clickIcon li{
    width:0.08rem;
    height:0.08rem;
    background-color:#fff;
    float:left;
    margin-left:0.07rem;
    border-radius:100rem;
    margin-top:0.09rem;
  }

  /*顶部第二部分*/
  .iosDownloadCover-radius-T{
    width:0.3rem;
    height:0.3rem;
    background-color:#f84f5c;
    text-align:center;
    line-height:0.3rem;
    border-radius:50%;
    color:#fff;
    font-family:"黑体";
    margin-left:2.86rem;
    margin-top:0.1rem;
    display:inline-block;
    font-size:0.24rem;
  }

  .iosDownloadCover-clickText-T{
    font-size:0.3rem;
    color:#fff;
    margin-top:0.4rem;
  }
  .iosDownloadCover-clickIcon-T{
    width:2.7rem;
    height:0.4rem;
    border-radius:0.06rem;
    background:#333;
    -webkit-box-shadow: 0px 2px 2px #000;
    -moz-box-shadow: 0px 2px 2px #000;
    box-shadow: 0px 2px 2px #000;
    display:inline-block;
    margin-left:0.12rem;

  }
  .iosDownloadCover-broIcon{
    width:0.3rem;
    height:0.3rem;
    margin-left:0.2rem;
    margin-top:-0.04rem;
  }
  .iosDownloadCover-openText{
    font-size:0.28rem;
    margin-left:0.06rem;
    line-height:0.2rem;
  }
</style>
