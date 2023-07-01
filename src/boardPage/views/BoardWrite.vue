<template>
  <div class="mx-4 mt-8 boxShadow rounded-xl bg-white p-6">
    <select class="backgroundGray my-1 w-full rounded-md h-8 px-4 text-sm">
      <option>카테고리 선택</option>
    </select>
    <input class="backgroundGray my-2 w-full rounded-md h-8 px-4 text-sm" type="text" placeholder="글 제목">
    <input class="backgroundGray my-2 w-full rounded-md h-40 px-4 text-sm" type="text" placeholder="글 내용">
    <label for="img" class="relative w-content px-4 bottom-16 right-4 float-right bg-white rounded-xl p-2 boxShadow flex items-center">
      <div class="cameraLogo float-left pr-1"></div>
      <div class="float-left text-sm">첨부</div>
      <div class="clear-both"></div>
    </label>
    <input class="hidden" type="file" id="img" name="imgFile">
  </div>
  <div class="mx-6 text-xs mt-8">
    <div class="navyColor Pretendard-Bold mb-2">자유게시판 이용수칙</div>
    <div class="fontGray Pretendard-Medium">-셔틀버스 노선 외 지역 통학노선을 서로 공유하는 페이지입니다.</div>
    <div class="fontGray Pretendard-Medium">-같은 지역의 학우들을 위해 바쁘시더라더 알고 있는 최강 루트를 공유해주시면 감사하겠습니다.</div>
    <div class="navyColor Pretendard-Bold my-2">규칙 위반 사항</div>
    <div class="fontGray Pretendard-Medium">-홍보 및 판매 관련 행위 금지</div>
    <div class="fontGray Pretendard-Medium">-타인의 권리를 침해하거나 불쾌감을 주는 행위 금지</div>
    <div class="fontGray Pretendard-Medium">-욕설, 비하, 차별 ,혐오, 폭력 관련 내용을 포함하는 게시물 작성금지</div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'BoardWrite',


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
.cameraLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/addImgBtn.png);
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
.navyColor{
  color:#0B254A;
}


</style>