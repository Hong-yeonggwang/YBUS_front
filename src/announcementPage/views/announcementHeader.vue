<template>
  <div class="mt-16 mx-4">
    <div class = "text-25xl Pretendard-Bold float-left">공지사항</div>
    <div id="homeButton" class="float-left h-9-5 ml-1" onclick = "location.href='/'"></div>
    <div class="noticeButton float-right Pretendard-SemiBold flex">
      <div class="yiuLogo py-2 pr-2"></div>
      셔틀 공지사항
    </div>
    <div class = "clear-both"></div>
  </div>
</template>

<script>
export default {
name: 'announcementHeader',
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
#homeButton{
    content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/home_btn_navy.png);
}
.yiuLogo{
    content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/yiuLogo.png);
}
.noticeButton{
  font-size : 0.8rem;
  height:2.2rem;
  border: solid 1px #142637;
  line-height:2rem;
  border-radius: 1.5rem;
  width:fit-content;
  padding: 0 0.7rem;
  background-color:#142637;
  color:white;
  text-align: center;
}

</style>