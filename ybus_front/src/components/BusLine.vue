<template>
    <div class="w-full text-center">
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold select-border-color select-text-color">시내 순환</div>
        <div class="w-1/2 float-left border-b-4 text-xl lineName-padding Pretendard-Bold unselect-border-color unselect-text-color">역북 지구</div>
        <div class="clear-both"></div>
    </div>        
    <div class="w-11/12 mx-auto">
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-9 mx-auto"></div>
                    <div class="h-5 border-2 rounded-2xl border-color pointText">기점</div>
                    <div class="w-1 h-9 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">용인대학교</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">진입로</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" relative background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
                <div class="vertical-center padding-5 absolute w-full busBakground background_set">
                    <div class="busNumber Pretendard-Bold text-xs">74서 4540</div>
                    <div class="busREfreshTime Pretendard-Medium text-xs">15:57 갱신</div>    
                </div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">명지대사거리</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">중앙파출소</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">CGV/시내</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-9 mx-auto line-color"></div>
                    <div class="h-5 border-2 rounded-2xl border-color pointText">회차</div>
                    <div class="w-1 h-9 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">용인터미널</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">명지대사거리(하행)</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">진입로(미정차)</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18 pointBoder">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-18 mx-auto line-color"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">용인시청(17:30 이후)</div>
            <div class="clear-both"></div>
        </div>
        <div class="h-18">
            <div class=" background_set float-left w-1/3 h-18">
                <div class="w-8 h-18 float-right mr-6">
                    <div class="w-1 h-9 mx-auto line-color"></div>
                    <div class="h-5 border-2 rounded-2xl border-color pointText">종점</div>
                    <div class="w-1 h-9 mx-auto"></div>
                </div>
                <div class="clear-both"></div>
            </div>
            <div class="float-left text-base my-8 margin-left-3 Pretendard-Bold">용인대학교</div>
            <div class="clear-both"></div>
        </div>
    </div>
</template>

<script>
export default {
name: 'BusSLine',
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