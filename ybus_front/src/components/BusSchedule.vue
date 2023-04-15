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
        <div class="boxShadow boxRound">
            <div class="grayBack">
                <div class="w-2/12 text-center float-left Pretendard-Bold">08</div>
                <div class="w-10/12 float-left text-xs px-1 py-3 timeBorderGray">
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">20</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">30</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">35</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">40</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">45</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">50</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">55</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="clear-both"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="whiteBack">
                <div class="w-2/12 text-center float-left Pretendard-Bold">09</div>
                <div class="w-10/12 float-left text-xs px-1 py-3 timeBorderGray">
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">15</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">20</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">30</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">35</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">40</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">45</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">50</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="w-1/4 float-left px-1">
                        <div class="w-max mx-auto text-gray-color">55</div>
                        <div class="timeBack ">시내순환</div>
                    </div>
                    <div class="clear-both"></div>
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
}
.select_size{
    width: max-content;
    padding: 0 4%;
}
.vertical-center{
    top: 50%;
    transform: translateY(-50%);
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
}
.timeBorderGray{
    border-left: 3px solid #b4b4b4;
}
</style>