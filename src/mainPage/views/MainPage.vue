<template>
  <div class = "max-w-2xl m-2 my-14 px-3">
    <div class = "h-9 w-full">
      <img :src="require(`@/assets/ybus_style_resource/ybus_img/mainpage/YBUS_logo.png`)" class = "h-full float-left"/>
    </div>
    <div class = "my-5 h-9 w-full rounded-3xl bg-white boxShadow">
      <div id="noticeRed" class="float-left"></div>
      <div class="text-sm my-2 float-left Pretendard-SemiBold">공지사항</div>
      <div class="cleat-both"></div>
    </div>
    <div class = "w-full h104 text-white">
      <div id = "wether-background" class = "background_set top_container_right boxRound">
        <div class="m-4">
          <div class="text-uni Pretendard-Bold">용인대학교</div>
          <div id = "nowdate" class="Pretendard-Medium mt-0.5">2023년 4월 6일</div>
          <div class="h-9">
            <div id="weather" class="float-left h-9"></div>
            <div class="float-left text-3xl Pretendard-Bold">30°</div>
            <div class="ml-1 mt-1 float-left text-sm Pretendard-Bold">안개</div>
          </div>
        </div>
      </div>
      <div class = "top_container_left">
        <div id = "top-background" class = "mb-3 h46 background_set boxRound" onclick="location.href='https:/www.naver.com'">
          <div id = "publicBus" class = "float-left"></div>
          <div class="public-text float-left Pretendard-Bold">대중교통</div>
          <div class="clear-both"></div>
        </div>
        <div id = "bottom-background" class = "h46 background_set boxRound" onclick="location.href='businfo/schedule'">
          <div id = "schedule" class = "float-left"></div>
          <div class="public-text float-left Pretendard-Bold">버스 시간표</div>
          <div class="clear-both"></div>
        </div>
      </div>
      <div class="clear-both"></div>      
    </div> 
    <div class="mb-3 mt-6 text-xl Pretendard-Bold">실시간 위치</div>
    <div class="w-full">
      <div id = "blue-background" class="background_set boxRound busBox boxShadow" onclick="location.href='businfo/busline/1'">
        <div class="busText text-sm Pretendard-Bold">시내버스</div>
      </div>
      <div id = "yellow-background" class="background_set boxRound busBox busBoxMargin boxShadow" onclick="location.href='businfo/busline/2'">
        <div class="busText text-sm Pretendard-Bold">노랑버스</div>
      </div>
      <div id = "red-background" class="background_set boxRound busBox boxShadow" onclick="location.href='businfo/schoolebusstop'">
        <div class="busText text-sm Pretendard-Bold">통학버스</div>
      </div>
      <div class ="clear-both"></div>
    </div>
    <div class="mt-10 mb-3 text-xl Pretendard-Bold">더보기</div>
    <div class="addBox boxRound boxShadow">
      <div class="addMenu float-left">
        <div id="food" class="addMenuLogo"></div>
        <div class="text-xs m-auto text-center Pretendard-SemiBold">식단표</div>
      </div>
      <div class="addMenu float-left" onclick="location.href='https:/www.yongin.ac.kr/cmn/sym/mnu/mpm/101080200/htmlMenuView.do'">
        <div id="notice" class="addMenuLogo"></div>
        <div class="text-xs m-auto text-center Pretendard-SemiBold">용인대공지</div>
      </div>
      <div class="addMenu float-left" onclick="location.href='https:/total.yongin.ac.kr/login.do'">
        <div id="infoSys" class="addMenuLogo"></div>
        <div class="text-xs m-auto text-center Pretendard-SemiBold" style="letter-spacing:-1.3px">종합정보시스템</div>
      </div>
      <div class="addMenu float-left" onclick="location.href='/board'">
        <div id="free" class="addMenuLogo"></div>
        <div class="text-xs m-auto text-center Pretendard-SemiBold">자유게시판</div>
      </div>
      <router-link to="/team">
        <div class="addMenu float-left">
          <div id="team" class="addMenuLogo"></div>
          <div class="text-xs m-auto text-center Pretendard-SemiBold">YBUS팀</div>
        </div>
      </router-link>
      <div class="clear-left"></div>
    </div>
    <div id = "adver" class="w-full my-5 boxRound boxShadow"></div>


    <div class="mb-3 mt-10 text-xl Pretendard-Bold">YBUS 이용 팁</div>
    <div class="h-28">
      <div id="tip" class="tipBox background_set boxRound boxShadow float-left">
        <div class="text-xs py-3 Pretendard-Medium">YBUS 이용 팁</div>
        <div class="textTip Pretendard-Bold">
          YBUS를<br>
          앱처럼<br>
          사용하고싶다면?
        </div>
      </div>
      <div id="google" class="background_set boxRound boxShadow float-left h-full bg-white"></div>
      <div class="clear-both"></div>
    </div>
    <div class="w-10 h-10"></div>
  </div>
    
    
</template>
  
  <script>
  export default {
    name: 'MainPage',
    props: {
      msg: String
    //     아직은 프롭스 설정할게 없음.
    },
    mounted(){
      this.getData();
    },
    methods: {
    getData() {
      this.axios
        .get("/bus/schedule?busline=1")
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          console.log("항상 마지막에 실행");
        });
    },
  },
  }
  </script>

  <style scoped>
    .boxShadow{
      box-shadow: 0px 0px 15px #0F296B1F;
    }
    .boxRound{
      border-radius: 12px;
    }
    .h104{
      height:6.5rem;
    }
    .h46{
      height:2.875rem;
    }
    .background_set{
      background-size: 100% 100%;
      background-position: center center;
      background-repeat: no-repeat;
    }
    #wether-background{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/weatherBackground_1.png);
    }
    #top-background{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/menu_top_1.png);
    }
    #bottom-background{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/menu_bottom_1.png);
    }
    #blue-background{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/blueBus_1.png);
    }
    #yellow-background{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/yellowBus_1.png);
    }
    #red-background{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/redBus_1.png);
    }
    .top_container_right{
      width: 48.3%;
      height: 100%;
      margin-right: 1.7%;
      float: left; 
    }
    .top_container_left{
      width: 48.3%;
      height: 100%;
      margin-left: 1.7%;
      float: left; 
    }
    .busBox{
      width:31.04%;
      float:left;
    }
    .busBoxMargin{
      margin:0 3.4%;
    }
    .busText{
      padding-top: 82.28%;
      padding-bottom: 4.55%;
      text-align: center;
      letter-spacing: -0.35px;
      font-family: "Pretendard-Bold";
      color: #142637;
    }
    .addBox{
      width: 100%;
      background-color: #ffffff;
      padding:6.21% 2.3%;
    }
    .addMenu{
      width: 20%;
    }
    .addMenuLogo{
      margin: auto;
      height:1.5rem;
      margin-bottom:1rem;
    }
    #food{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/another_icon_food.png);
    }
    #notice{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/container_notice.png);
    }
    #free{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/sns.png);
    }
    #infoSys{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/totalService.png);
    }
    #team{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/YBUSteam.png);
    }
    #adver{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/banner.png);
    }
    #tip{
      background-image:url(@/assets/ybus_style_resource/ybus_img/mainpage/tipBackgoround.png);
    }
    #noticeRed{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/header_notice.png);
      height:1.5rem;
      margin:0.375rem 0.5rem;
    }
    #weather{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/11d.png);
    }
    #publicBus{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/findway.png);
      height:1.7rem;
      margin:0.5875rem 0;
      margin-left:1.3rem;
    }
    #schedule{
      content:url(@/assets/ybus_style_resource/ybus_img/mainpage/bus_schedule.png);
      height:1.7rem;
      margin:0.5875rem 0;
      margin-left:1.3rem;
    }
    #google{
      width: 48.3%;
      float: left;
    }
    .tipBox{
      width: 48.3%;
      height: 100%;
      margin-right: 3.4%;
      padding-left: 5.08%;
    }
    .textTip{
      font-size:0.85rem;
      line-height:1.2rem;
    }
    .text-uni{
      font-size:1.2rem;
      line-height: 1.25rem;
    }
    #nowdate{
      font-size:0.75rem;
      line-height:1rem;
    }
    .public-text{
      font-size: 1rem;
      line-height: 1.75rem; 
      margin: 0.5875rem 0;
      height:1.7rem;
      margin-left:0.5rem;
    }
  </style>