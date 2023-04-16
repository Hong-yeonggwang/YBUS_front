<template>
    <div class="w-full text-center">
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold select-border-color select-text-color">시내 순환</div>
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold unselect-border-color unselect-text-color">역북 지구</div>
        <div class="clear-both"></div>
    </div>        
    <div class="w-4/5 mx-auto">
        <div class="startPoint h-18 pointBoder">
            <div class="w-1/4"></div>
            <div class="w-3/4">용인대학교</div>
        </div>
        <div class="nomalPoint h-18 pointBoder"></div>
        <div class="turnPoint h-18 pointBoder"></div>
        <div class="endPoint h-18 pointBoder"></div>
    </div>
</template>

<script>
export default {
name: 'BusStopLine',
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
}
}
</script>

<style>
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
#header_background{
    background-image:url(@/assets/ybus_style_resource/ybus_img/schedule/blue_1.png);
    padding-bottom: 33.669%;
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
.startPoint{

}
.nomalPoint{

}
.turnPoint{

}
.endPoint{

}
.h-18{
    height:5.5rem;
}
.pointBoder{
    border-bottom: #C1C1C1 solid 1px;
}
</style>