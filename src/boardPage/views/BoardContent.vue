<template>
  <BoardSerch></BoardSerch>
  <div>
    <router-link to="/board/view/1">
      <div class="mt-4 mx-4 px-4 rounded-t-xl boxShadow bg-white">
        <div class="pt-1.5">
          <div class="tagGreen">#104</div>
        </div>
        <div class="h-5">
          <div class="float-left text-subjcet subject-color">subject</div>
          <div class="float-right shareLogo h-full">Logo</div>
          <div class="clear-both"></div>
        </div>
        <div class="h-1/5 text-sm fontGray">
            <div class="float-left">2022-04-06 10:30 |</div>
            <div class="float-left">조회수 0</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-1/5 text-sm py-4">역북지구랑 노랭이 시간표 업데이트 해주세요</div>
      </div>
      <div class="mx-4 boxRound rounded-b-xl backgroundGray boxShadow ">
        <div class="px-4 py-3 h-1/5">
          <div class="float-left">
            <div class="newLogo h-full float-left"></div>
            <div class="float-left text-subjcet mx-1" style="line-height:1.2rem;">메롱</div>
            <div class="clear-both"></div>
          </div>
          <div class="float-right">
            <div class="commentLogo h-full float-left"></div>
            <die class="float-left text-subjcet mx-1">count</die>
            <div class="clear-both"></div>
          </div>
          <div class="clear-both"></div>
        </div>
      </div>
    </router-link>  
  </div>
 
  
  
</template>

<script>
import BoardSerch from './BoardSerch.vue';
export default {
name: 'BoardContent',
components: {
    BoardSerch,
},
props: {
  msg: String
//     아직은 프롭스 설정할게 없음.
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
.text-subjcet{
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
.newLogo{
  content:url(@/assets/ybus_style_resource/ybus_img/freeBoard/new.png);
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
.subject-color{
  color:#0B254A;
}

</style>