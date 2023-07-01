<template>
    <div id ="header_background" class="w-full background_set ">
        <div class="w-1/2 h-9-5 content-left-padding float-left">
            <div class="text-25xl Pretendard-Bold text-white float-left" >버스 시간표</div>
            <div id="homeButton" class="float-left h-9-5 ml-1" onclick = "location.href='/'"></div>
            <div class="clear-both"></div>
        </div>
        <div class="w-1/2 float-right content-right-padding">
            <router-view name="timeButton"></router-view>
            <router-view name = "lineButton"></router-view>
            <div class="clear-both"></div>
        </div>
        <div class="clear-both"></div>        
    </div>
    <div id="scheduleNotice">
        <div class="w-max mx-auto">
            <div id="noticeIcon" class="float-left"></div>
            <div class="float-left">마지막 업데이트: 2023-02-28</div>
            <div class="clear-both"></div>
        </div>
    </div>

        
</template>

<script>
export default {
name: 'BusInfoHeader',
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
}
}
</script>

<style scoped>
.text-25xl{
    font-size: 1.75em;
    line-height:2.2rem;
}
.h-9-5{
    height:2.125rem;
}
 .background_set{
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
}
#header_background{
    background-image:url(@/assets/ybus_style_resource/ybus_img/schedule/blue_1.png);
    padding-bottom: 33.669%;
}
.content-left-padding{
    padding-top: 10%;
    padding-left: 5%;
}
.content-right-padding{
    padding-top: 10%;
    padding-right: 5%;
}
#homeButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/ButtonHome_White.png);
}
#busStopLineButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/busStopLineIcon.png);
    width:47.5%;
}
#scheduleButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/scheduleButtonIcon.png);
    margin-left:5%;
    width:47.5%;

}
#scheduleNotice{
    font-family: 'Pretendard-Medium';
    width: 100%;
    background: #585858;
    padding-top: 1%;
    padding-bottom: 1%;
    color: white;
    font-size: 0.75em;
    text-align: center;
}
#noticeIcon{
    content: url(@/assets/ybus_style_resource/ybus_img/schedule/noticeIcon.png);
    height:1.125rem;
    margin-right:0.2rem;
}
</style>