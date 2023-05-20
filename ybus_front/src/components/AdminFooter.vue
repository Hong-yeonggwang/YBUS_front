<template>
<div class="w-full h-15 bg-slate-600 text-white">
  <div class="logo w-full "><img :src="require('@/assets/ybus_style_resource/ybus_img/mainpage/YBUS_footer.png')"></div>
  <div class="info w-full ">
    <div class="w-full">The UNIV BUS::YBUS made by YBUS Team    2022 All right (C) reserved.</div>
    <div class="maillogo"></div>
    <div class="kakaologo"></div>
  </div>
</div>

</template>
  
  <script>
  export default {
    name: 'AdminFooter',
    props: {
      msg: String
    //     아직은 프롭스 설정할게 없음.
    }
  }
  </script>

  <style>

    .kakaologo{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/kakao.png);
    }
    .maillogo{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/gmail_logo.png);
    }

  </style>