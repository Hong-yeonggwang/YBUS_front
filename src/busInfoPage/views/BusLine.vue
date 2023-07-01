<template>
    <div class="w-full text-center">
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold select-border-color select-text-color">시내 순환</div>
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold unselect-border-color unselect-text-color">역북 지구</div>
        <div class="clear-both"></div>
    </div>        
    <div class="w-11/12 mx-auto">
        <div v-for="item in busStop" :key="item.order">
            <!-- 처음 -->
            <div v-if ="item.order === 1" class="h-18 pointBoder">
                <div class="relative background_set float-left w-1/3 h-18">
                    <div class="w-8 h-18 float-right mr-6">
                        <div class="w-1 h-9 mx-auto"></div>
                        <div class="h-5 border-2 rounded-2xl border-color pointText">기점</div>
                        <div class="w-1 h-9 mx-auto line-color"></div>
                    </div>
                    <div v-bind:stop=item.seq class="clear-both"></div>
                </div>
                <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">{{ item.name }}</div>
                <div class="clear-both"></div>
            </div>
            <!-- 마지막 -->
            <div v-else-if ="item.order === busStop.length" class="h-18">
                <div class="relative background_set float-left w-1/3 h-18">
                    <div class="w-8 h-18 float-right mr-6">
                        <div class="w-1 h-9 mx-auto line-color"></div>
                        <div class="h-5 border-2 rounded-2xl border-color pointText">종점</div>
                        <div class="w-1 h-9 mx-auto"></div>
                    </div>
                    <div v-bind:stop=item.seq class="clear-both"></div>
                </div>
                <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">{{ item.name }}</div>
                <div class="clear-both"></div>
            </div>
            <!-- 평상 -->
            <div v-else>
                <!-- 회차 -->
                <div v-if="item.line === 'turn'" class="h-18 pointBoder">
                    <div class="relative background_set float-left w-1/3 h-18">
                        <div class="w-8 h-18 float-right mr-6">
                            <div class="w-1 h-9 mx-auto line-color"></div>
                            <div class="h-5 border-2 rounded-2xl border-color pointText">회차</div>
                            <div class="w-1 h-9 mx-auto line-color"></div>
                        </div>
                        <div v-bind:stop=item.seq class="clear-both"></div>
                    </div>
                    <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">{{ item.name }}</div>
                    <div class="clear-both"></div>
                </div>
                <!-- 미정차 -->
                <div v-else-if ="item.isstop === 'false'" class="h-18 pointBoder">
                    <div class="relative background_set float-left w-1/3 h-18">
                        <div class="w-8 h-18 float-right mr-6">
                            <div class="w-1 h-18 mx-auto line-color"></div>
                        </div>
                        <div v-bind:stop=item.seq class="clear-both"></div>
                    </div>
                    <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">{{ item.name }}</div>
                    <div class="clear-both"></div>
                </div>
                <!-- 평상 -->
                <div v-else class="h-18 pointBoder">
                    <div class="relative background_set float-left w-1/3 h-18">
                        <div class="w-8 h-18 float-right mr-6">
                            <div class="w-1 h-18 mx-auto line-color"></div>
                        </div>
                        <div id = "asd" v-bind:stop=item.seq class="clear-both"></div>
                    </div>
                    <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">{{ item.name }}</div>
                    <div class="clear-both"></div>
                </div>
            </div>
        </div>
    </div>
   
</template>

<script>
import $ from 'jquery'

export default {
name: 'BusSLine',

data(){
return {
    busSeq: -1,
    busStop:[
          { name: "용인대", order:1,line:"up",isstop:"true",seq:1},
          { name: "진입로", order:2 ,line:"up",isstop:"true",seq:2},
          { name: "명지대사거리", order:3 ,line:"up",isstop:"true",seq:3},
          { name: "중앙파출소", order:4 ,line:"up",isstop:"true",seq:4},
          { name: "용인터미널", order:5 ,line:"turn",isstop:"true",seq:5},
          { name: "명지대사거리(하행)", order:6 ,line:"down",isstop:"true",seq:6},
          { name: "진입로(미정차)", order:7 ,line:"down",isstop:"false",seq:7},
          { name: "용인대학교", order:8 ,line:"down",isstop:"true",seq:8},
        ],
    nowBusInfo:[
          { name: "123하 4567", time:[16,47,12],seq:1},
          { name: "098가 4567", time:[16,47,12],seq:2},
        ],
}
},
created(){

},
mounted(){
    this.insertBusInfo()
},
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
},
methods:{
    insertBusInfo(){
        
        for(var i = 0; i<this.nowBusInfo.length; i++){

            var $parentDiv = $('div[stop="'+this.nowBusInfo[i].seq+'"]');

            var $newDiv = $('<div>').addClass('vertical-center padding-5 absolute w-full busBakground background_set');
            var $busNumber = $('<div>').addClass('busNumber Pretendard-Bold text-xs').text(this.nowBusInfo[i].name);
            var $busRefreshTime = $('<div>').addClass('busREfreshTime Pretendard-Medium text-xs').text(this.nowBusInfo[i].time);

            $newDiv.append($busNumber);
            $newDiv.append($busRefreshTime);

            $parentDiv.after($newDiv);
        }

    }
}
}
</script>

<style >
.background_set{
    background-size: 100% 100%;
    background-position: center center;
    background-repeat: no-repeat;
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
.busBakground{
    background-image:url(@/assets/ybus_style_resource/ybus_img/schedule/blueBus.png);
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
</style>