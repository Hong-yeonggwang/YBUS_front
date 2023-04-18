<template>
    <div class="mainContainer my-3">
        <select class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option>월-목</option>
        </select>
        <select class="float-right boxShadow boxRound mx-2 select_size text-center h-7 Pretendard-Bold">
            <option>시내순환</option>
        </select>
        <select class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option>셔틀버스</option>
        </select>
        <div class="clear-both"></div>
    </div>
    <div class="mainContainer boxShadow boxRound bg-white py-6 px-4">
        <div class="boxShadow boxRound overflow-hidden">
            <div class="grayBack">
                <div class="w-2/12 text-center float-left Pretendard-Bold">08</div>
                    <div class="timeBorderGray w-10/12 float-left">
                        <div class="text-xs px-1 my-3 timeBorderNavy">
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="clear-both"></div>
                </div>
                    </div>
                <div class="clear-both"></div>
            </div>
            <div class="whiteBack">
                <div class="w-2/12 text-center float-left Pretendard-Bold">09</div>
                    <div class="timeBorderGray w-10/12 float-left">
                        <div class="text-xs px-1 my-3 ">
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="busScheduleBox float-left">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="clear-both"></div>
                </div>
                    </div>
                <div class="clear-both"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: 'BusSchedule',
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
    display: flex;
    align-items: center;
}
.whiteBack{
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
}
.text-gray-color{
    color:#b4b4b4;
}
.timeBorderNavy{
    border-left: 3px solid #142637;
    left:-3px;
    position: relative;
}
.timeBorderGray{
    border-left: 3px solid #b4b4b4;
}
.busScheduleBox{
    margin:0 1.5%;
    width:22%;
}
</style>