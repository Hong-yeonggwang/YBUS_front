<template>
  <div class="mt-16 mx-4">
    <div class = "text-25xl Pretendard-Bold float-left">자유게시판</div>
    <div id="homeButton" class="float-left h-9-5 ml-1" onclick = "location.href='/'"></div>
    <router-view name ="header"></router-view>
    <div class = "clear-both"></div>
  </div>
</template>

<script>
export default {
name: 'BoardHeader',
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