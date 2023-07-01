<template>
  <div class="my-6">
    <div class="mt-4 mx-4 py-6 px-4 rounded-t-xl boxShadow bg-white">
    <div class="h-7">
      <div class="float-left text-xl subject-color Pretendard-Bold">subject</div>
      <div class="float-right py-1.5 shareLogo h-full"></div>
      <div class="clear-both"></div>
    </div>
    <div class="h-1/5 mt-1 pb-4 text-sm fontGray border-b">
        <div class="float-left">2022-04-06 10:30 |</div>
        <div class="float-left">조회수 0</div>
        <div class="clear-both"></div>
    </div>
    <div class="h-1/5 text-sm py-4">역북지구랑 노랭이 시간표 업데이트 해주세요</div>
    <div class="float-right mb-2">
    </div>
    <div class="clear-both border-custom"></div>
    
    </div>
    <div class="mx-4 py-5 px-6 boxRound rounded-b-xl backgroundGray boxShadow flex justify-between text-sm Pretendard-Bold">
      <div class="float-left flex items-center">
        <div class="preLogo h-4 pr-0.5"></div>
        <div>이전글</div>
      </div>
      <div class="float-left flex items-center">
        <div class="listLogo h-4 pr-0.5"></div>
        <div>목록으로</div>
      </div>
      <div class="float-left flex items-center">
        <div>다음글</div>
        <div class="nextLogo h-4 pl-0.5"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'anoView',


data(){
return {
    name: 0,

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
        
        var aa = $('#asdf');
        console.log(aa);

    }
}
}
</script>

<style scoped>
.backgroundGray{
  background-color:#fafafc;
}
.fontGray{
  color:#b4b4b4;
}
.text-subject{
  font-size: 1em;
  line-height:1rem;
}
.h-9-5{
  height:2.125rem;
}
.boxShadow{
    box-shadow:5px 10px 30px #e0e0e0;
}
.background_set{
  background-size: 100% 100%;
  background-position: center center;
  background-repeat: no-repeat;
}
.tagGreen{
    background:url(@/assets/ybus_style_resource/ybus_img/freeBoard/backGreen.png);
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
    border-radius: 15px;
    width:fit-content;
    padding:0 0.5rem;
    margin:0.5rem 0;
    text-align: center;
    clear:both;
    font-size:0.75rem;
    line-height:0.875rem;
}
.shareLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/postShare.png);
}
.listLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/list_icon.png);
}
.preLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/back_but.png);
}
.nextLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/next_but.png);
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
.border-custom{
  border: 1px solid #F3F3F3;
}
.subject-color{
  color:#0B254A;
}


</style>