<template>

<div class="w-full footerBackgroundColor text-white">
  <div class="logo" onclick = "location.href='admin'"></div>
  <div class="text-xs Pretendard-SemiBold">이전 버전으로</div>
  <div class="info">
    <div class="float-left Pretendard-Medium">The UNIV BUS::YBUS made by YBUS Team<br>
    2022 All right (C) reserved.</div>
    <div class="float-right maillogo"></div>
    <div class="float-right kakaologo"></div>
    <div class="clear-both"></div>
  </div>
</div>
    
</template>
  
  <script>
  export default {
    name: 'MainFooter',
    props: {
      msg: String
    //     아직은 프롭스 설정할게 없음.
    }
  }
  </script>

  <style scoped>
    .footerBackgroundColor{
      background-color: #71727B ;  
      padding: 0 5%;
      
    }
    .logo{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/YBUS_footer.png);
      padding: 7.2% 0;
      width: 23.2%;
    }
    .kakaologo{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/kakao.png);
      width: 10%;
      margin-right: 2.5%;
    }
    .maillogo{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/gmail_logo.png);
      width:10%;
    }
    .info{
      width: 100%;
      padding-top: 12.8px;
      padding-bottom: 25.6px;
      font-family: "Pretendard-Medium";
      font-size: 0.75rem;
      letter-spacing: -0.5px;
    }
  </style>