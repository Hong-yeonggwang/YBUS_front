<template>
    <div class="w-11/12 mx-auto my-6 boxShadow boxRound bg-white">
        <div class="h-14 mx-5 items-center flex justify-between">
            <div class="Pretendard-Bold text-sm mr-4">강남</div>
            <div class="h-5 openButton"></div>
        </div>
        <div class="grayBack mx-auto text-xs Pretendard-Bold block">
            <div class="stopName">asdsa</div>
            <div class="stopName">안일요양병원</div>
            <div class="stopName">안일요양병원</div>
            <div class="stopName">안일요양병원</div>
        </div>
        <div class="h-14 mx-5 items-center flex justify-between">
            <div class="Pretendard-Bold text-sm mr-4">강남</div>
            <div class="h-5 openButton"></div>
        </div>
    </div>
</template>

<script>
export default {
name: 'SchoolBusStop',
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
}
}
</script>

<style scoped>
.boxShadow{
    box-shadow: 0px 0px 15px #0F296B1F;
}
.boxRound{
    border-radius: 12px;
}
.grayBack{
    width: 90%;
    background-color: #fafafc;
    margin: 0 5%;
}
.openButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/colse.png);
}
.stopName{
    border-bottom: 1px solid #b4b4b4;
    padding: 4.5% 0;
    margin: 0 5%;
}
</style>