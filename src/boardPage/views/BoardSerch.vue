<template>
  <div class="boxShadow boxRound mt-4 mx-4 p-4 bg-white">
    <div class="h-7 py-1 backgroundGray boxRound flex items-center">
      <div class="float-left searchLogo h-4/5 ml-3"></div>
      <input class="h-full ml-2 float-left flex w-10/12 Pretendard-Medium text-sm" style = "background-color: transparent;" type="text" placeholder="키워드를 검색해 보세요.">
      <div class="clear-both"></div>
    </div>
    <div class="h-7 py-1 mt-3 flex items-center">
      <div class="float-left noticeLogo h-4/5 ml-2"></div>
      <div class="h-full ml-1 text-sm float-left Pretendard-Medium">셔틀버스 관련 정보를 서로 공유하는 페이지입니다.</div>
      <div class="clear-both"></div>
    </div>
  </div>      
</template>

<script>
export default {
name: 'BoardSerch',
data(){
return {
    buttonFlag: 'no name',
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
    insertBusInfo(){
    }
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
.writeButton{
  font-size : 0.8rem;
  height:2.2rem;
  border: solid 1px #142637;
  line-height:2rem;
  border-radius: 1.5rem;
  width:fit-content;
  padding: 0 0.7rem;
  background-color:#142637;
  color:white;
}
.cancelButton{
  font-size : 0.8rem;
  height:2.2rem;
  border: solid 2px #142637;
  line-height:2rem;
  border-radius: 1.5rem;
  width:fit-content;
  padding: 0 0.7rem;
  background-color:#FFFFFF;
  color:#142637;
}

</style>