<template>
  <div class="my-6">
    <div class="mt-4 mx-4 px-4 rounded-t-xl boxShadow bg-white">
    <div class="pt-1.5">
      <div class="tagGreen">#104</div>
    </div>
    <div class="h-5">
      <div class="float-left text-subject subject-color">subject</div>
      <div class="float-right shareLogo h-full">Logo</div>
      <div class="clear-both"></div>
    </div>
    <div class="h-1/5 text-sm fontGray">
        <div class="float-left">2022-04-06 10:30 |</div>
        <div class="float-left">조회수 0</div>
        <div class="clear-both"></div>
    </div>
    <div class="h-1/5 text-sm py-4">역북지구랑 노랭이 시간표 업데이트 해주세요</div>
    <div class="float-right mb-2">
        <div class="commentLogo h-full float-left"></div>
        <die class="float-left text-subject mx-1">count</die>
        <div class="clear-both"></div>
    </div>
    <div class="clear-both border-custom"></div>

    <div class="commentZone">
      <div class="text-subject m-2">
      <div class="Pretendard-Bold my-2">name</div>
      <div class="Pretendard-Medium fontGray my-2 text-sm">
        <div class="float-left">Comment</div>
        <div class="float-right">date</div>
        <div class="clear-both"></div>
      </div>
      </div>
      <div class="clear-both border-custom subject-color"></div>
    </div>
    
    </div>
    <div class="mx-4 py-3 boxRound rounded-b-xl backgroundGray boxShadow ">
      <div class="px-4 m-auto w-11/12 py-2 h-1/5 rounded-lg boxRound bg-white">
        <input type="text" placeholder="댓글을 입력하세요" class="float-left w-10/12">
        <div class="float-right sendLogo">loog</div>
        <div class="clear-both "></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'BoardView',


data(){
return {
    name: 'no name',
}
},
created(){

},
mounted(){
    this.name = this.$route.params.seq
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
.sendLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/sendBtn.png);
}
.commentLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/comment_icon.png);
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