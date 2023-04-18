<template>
    <div class="w-full text-center">
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold select-border-color select-text-color">정류장 거리뷰</div>
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold unselect-border-color unselect-text-color">정류장 지도</div>
        <div class="clear-both"></div>
    </div>        
    <div class="w-11/12 mx-auto p-5">
        <div class="bg-white boxShadow boxRound py-3 px-4 w-full">
            <div class="backButton h-8 float-left"></div>
            <div class="float-left Pretendard-Bold text-custom">인일 요양병원 옆 대박집</div>
            <div class="clear-both"></div>
        </div>
        <div class="w-full boxShadow boxRound my-5"></div>
    </div>
</template>

<script>
export default {
name: 'BusStopInfo',
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
}
}
</script>

<style scoped>
.background_set{
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
}
.boxShadow{
      box-shadow: 0px 0px 15px #0F296B1F;
    }
.boxRound{
    border-radius: 12px;
}
.lineName-padding{
    padding:2% 0;
}
.select-border-color{
    border-color: #00264D;
}
.select-text-color{
    color: #00264D;
}
.unselect-border-color{
    border-color: #B4B4B4;
}
.unselect-text-color{
    color: #B4B4B4;
}
.backButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/back_but.png);
}
.h-18{
    height:5.5rem;
}
.pointBoder{
    border-bottom: #C1C1C1 solid 1px;
}
.busNumber{
    color: #00264D;
    width: max-content;
    padding-left:10%;
}
.busREfreshTime{
    color: #B4B4B4;
    width: max-content;
    padding-left:10%;

}
.line-color{
    background-color:#00264D;
}
.border-color{
    border-color:#00264D;
}
.pointText{
    text-align:center;
    font-size:0.75rem;
    line-height:1rem;
}
.padding-5{
    padding:5% 0;
}
.vertical-center{
    top: 50%;
    transform: translateY(-50%);
}
.busStopContent{

}
.text-custom{
    line-height:2rem;
    font-size:1rem;
}
</style>