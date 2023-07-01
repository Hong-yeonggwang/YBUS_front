<template>
    <div class="w-11/12 mx-auto py-1 my-6 boxShadow boxRound bg-white">
        <div v-for="(item, index) in busLines" :key="index">
            <div @click ="toggleAccordion(index)" class="h-14 mx-5 items-center flex justify-between">
                <div class="Pretendard-Bold text-sm mr-4">{{item.name}}</div>
                <div class="h-5 openButton"></div>
            </div>
            <div class="grayBack mx-auto text-xs Pretendard-Bold block accordion-content" :class="{ 'active': item.active ,'block': item.active  }">
                <div v-for ="(busStop,index) in item.busStop" :key="index" class="stopName">{{busStop}}</div>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery'
export default {
name: 'SchoolBusStop',
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
},
data(){
return {
    busLines: [
      { name: "강남", busStop: ['a','b','c'], active: false },
      { name: "강서", busStop: ['a','b','c'], active: false },
      { name: "강북", busStop: ['a','b','c'], active: false }
    ]
}
},
methods:{
    toggleAccordion(index){
        this.busLines.forEach((section, i) => {
        section.active = i === index ? !section.active : false;
      });
    },
    
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
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.7s ease;
}

.accordion-content.active {
  max-height: 300px; /* 적절한 높이로 조정하세요 */
}
</style>