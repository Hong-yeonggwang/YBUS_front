<template>
  <div class="boxShadow boxRound mt-4 mx-4 py-3 px-5 bg-white">
    <div class="Pretendard-Bold navyColor">공지사항</div>
  </div>      
  <div class="boxShadow boxRound mt-4 mx-4 p-4 bg-white">
    <div class="h-7 py-1 backgroundGray boxRound flex items-center">
      <div class="float-left searchLogo h-4/5 ml-3"></div>
      <input class="h-full ml-2 float-left flex w-10/12 Pretendard-Medium text-sm" style = "background-color: transparent;" type="text" placeholder="키워드를 검색해 보세요.">
      <div class="clear-both"></div>
    </div>
    <div class="border-b">
      <div class="float-right mt-2 mb-1">총 2개</div>
      <div class="clear-both"></div>
    </div>
    <router-link :to="{name: 'view', params: {noticeSeq: noticeSeq}}">
      <div class="my-3 pb-3 border-b">
      <div class="navyColor text-base Pretendard-Bold">subject</div>
      <div class="grayColot text-xs Pretendard-Medium">
        <div class="float-left">2020-03-04 |</div>
        <div class="float-left">조회수 0</div>
        <div class="clear-both"></div>
      </div>
    </div>
    </router-link>
  </div>      
</template>

<script>
export default {
name: 'anoContent',
data(){
return {
    noticeSeq: 121,
}
},
created(){
},
mounted(){
},
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
},
methods:{
}
}
</script>

<style scoped>
.backgroundGray{
  background-color:#fafafc;
}
.text-25xl{
  font-size: 1.75em;
  line-height:2.2rem;
}
.h-9-5{
  height:2.125rem;
}
.boxShadow{
    box-shadow: 0px 0px 15px #0F296B1F;
}
.boxRound{
    border-radius: 12px;
}
.background_set{
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
#homeButton{
    content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/home_btn_navy.png);
}
.searchLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/search_icon.png);
}
.noticeLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/searchNotice.png);
}
.navyColor{
  color:#00264D;
}
.grayColot{
  color:#B4B4B4;
}
</style>