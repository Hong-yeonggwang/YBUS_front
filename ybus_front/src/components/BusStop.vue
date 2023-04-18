<template>
    <div class="mainContainer my-3">
        <select class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option>월-목</option>
        </select>
        <select class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold mx-2">
            <option>통학버스</option>
        </select>
        <div class="clear-both"></div>
    </div>
    <div class="mainContainer boxShadow boxRound bg-white">
        <div class="boxShadow boxRound overflow-hidden">
            <div class="grayBack">
                <div class="w-full h-12 items-center flex justify-between">
                    <div>
                        <div class="Pretendard-Bold text-sm mr-4 float-left">강남</div>
                        <div class="h-5 openButton float-left"></div>
                        <div class="clear-both"></div>
                    </div>
                    <div>
                        <div class="float-right priceBox text-xs">요금:3000원</div>
                    </div>
                </div>
                <div class="addedBox">
                    <div class="addedBox-stop py-3">
                        <div class="Pretendard-Bold text-xs mr-4 w-1/3">강남역 8번 출구 삼성본사 앞</div>
                        <div class="w-2/3">
                            <div class="busScheduleBox float-left">
                                <div class="w-max mx-auto text-xs text-gray-color">08:00</div>
                                <div class="timeBack text-xs text-gray-color">등교</div>
                            </div>
                            <div class="busScheduleBox float-left">
                                <div class="w-max mx-auto text-xs text-gray-color">08:00</div>
                                <div class="timeBack text-xs text-gray-color">등교</div>
                            </div>
                            <div class="busScheduleBox float-left">
                                <div class="w-max mx-auto text-xs text-gray-color">08:00</div>
                                <div class="timeBack text-xs text-gray-color">등교</div>
                            </div>
                            <div class="busScheduleBox float-left">
                                <div class="w-max mx-auto text-xs text-gray-color">08:00</div>
                                <div class="timeBack text-xs text-gray-color">등교</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="whiteBack">
                <div class="w-full h-12 items-center flex justify-between">
                    <div>
                        <div class="Pretendard-Bold text-sm mr-4 float-left">강남</div>
                        <div class="h-5 openButton float-left"></div>
                        <div class="clear-both"></div>
                    </div>
                    <div>
                        <div class="float-right priceBox text-xs">요금:3000원</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'BusStop',
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
.mainContainer{
    width:90%;
    margin:0 auto;
    padding: 5.125% 4.613%;
}
.select_size{
    width: max-content;
    padding: 0 4%;
}
.grayBack{
    width: 100%;
    background-color: #fafafc;
    
    padding:0 5%;
}
.whiteBack{
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    padding:0 5%;
}
.text-gray-color{
    color:#b4b4b4;
}
.openButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/colse.png);
}
.priceBox{
    background-color: #142637;
    width: max-content;
    color: white;
    border-radius: 1rem;
    padding: 0.1rem 0.5rem;
    text-align: center;
}
.addedBox{
    display: block;
}
.addedBox-stop{
    align-items: center;
    display: flex;
    height: 100%;
    border-top: 1px solid #b4b4b4;
}
.timeBack{
    background-color: #b4b4b4;
    width: 100%;
    color: white;
    border-radius: 1rem;
    padding: 0 0.25rem;
    text-align: center;
    max-width: 60px;
    margin: 0 auto;
    margin-bottom: 8%;
}
.busScheduleBox{
    width:22%;
    margin:0 1.5%;
}
</style>