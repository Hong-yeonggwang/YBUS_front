<template>
    <div class="mainContainer my-3">
        <select v-model="selectedDate" class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option v-for="(item, index) in weekDays" :key="index" :value="item.value">{{ item.title}}</option>
        </select>
        <select v-model="selecteBusType" @change="chageBusType" class="mx-3 float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option v-for="(item, index) in busTypes" :key="index" :value="index+1">{{ item }}</option>
        </select>
        <div class="clear-both"></div>
    </div>
    <div class="w-11/12 mx-auto py-1 mb-6 boxShadow boxRound bg-white">
        <div class="m-4 boxShadow boxRound bg-white">
            <div v-for="(item, index) in schedule" :key="index" v-bind:val="item">
                <div @click ="toggleAccordion(index)" class="h-14 mx-5 items-center flex justify-between">
                    <div class="items-center flex">
                        <div class="Pretendard-Bold text-sm mr-4">{{item.busLineName}}</div>
                        <div class="h-5 openButton"></div>
                    </div>
                    <div>
                        <div class=" w-content white bg-black rounded-xl px-2">요금:{{ item.fee }}원</div>
                    </div>
                </div>
                <div  v-for="(time, index) in item.busStop" :key="index">
                    <div class="grayBack mx-auto text-xs Pretendard-Bold block accordion-content" :class="{ 'active': item.active ,'block': item.active  }" >
                        <div class="grayBorber py-2 items-center ">
                            <div class="w-5/12 float-left">
                                <div class="stopName float-left">{{time.courseName}}</div>
                            </div>
                            <div class="w-7/12 float-left">
                                <div v-for ="(busStop,index) in time.couseTime" :key="index" class="capsule float-left w-8 ">
                                    <div class="timebox_top w-max mx-auto text-gray-color">{{ busStop.busTime[0]<10 ? '0'+busStop.busTime[0] : busStop.busTime[0] }}:{{ busStop.busTime[1]<10 ? '0'+busStop.busTime[1] : busStop.busTime[1] }}</div>
                                    <div class="timebox_bottom timeBack ">등교</div>
                                    <div class="clear-both"></div>
                                </div>
                            </div>
                           
                            <div class="clear-both"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import $ from 'jquery'
export default {
name: 'SchoolBusSchedule',
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
},
data() {
    return {
        selecteBusType :'3',
        selectedDate:'normal', // 선택된 값을 저장할 데이터
        busSeq:1,
        busTypes:['셔틀버스','노랑버스','통학버스'],
        schedule:[],
        currentTime:'',
        weekDays:[
            {title:'월-목',value:'normal'},
            {title:'금',value:'friday'},
        ],
    };
},
created(){
    this.getSchedule();
},
methods:{
    toggleAccordion(index){
        const scheduleObject = JSON.parse(JSON.stringify(this.schedule));
        const keys = Object.keys(scheduleObject);

        for (let i = 0; i < keys.length; i++) {
            const section = this.schedule[i];
            section.active = i === index ? !section.active : false;
            console.log(section)
        }
        console.log(this.schedule)
    },
    chageBusType() {
        // 선택된 값에 따라 라우터를 이동시킴
        if(this.selecteBusType == 3){
            this.$router.push({ name: 'schoolBusSchedule'})
        }
        else{
            this.$router.push({ name: 'schedule', params: { busSeq: this.selecteBusType }})
        }
    },
    getSchedule() {
        return new Promise((resolve, reject) => {
        this.axios
            .get("/bus/schedule/school?weekDays="+this.selectedDate)
            .then((res) => {
                if(res != null){
                    const convertedData = {};
                    for (const item of res.data) {
                    const busLineName = item.busLineName;
                    const fee = item.fee
                    const updateTime = item.busUpdataTime
                    const active = false
                    const busStop = {
                        busTime: item.busTime,
                        courseName: item.courseName,
                    };

                    if (!convertedData[busLineName]) {
                        convertedData[busLineName] = { busLineName, fee, updateTime, active, busStop: [] };
                    }
                    
                    convertedData[busLineName].busStop.push(busStop);
                    }

                    const result = Object.entries(convertedData).map(([busLineName, { fee, updateTime, active, busStop }]) => ({ busLineName, updateTime, active, fee, busStop }));
                    
                    const lastData = {};
                    for(const out of result){

                        const busLineName = out.busLineName;
                        const fee = out.fee;
                        const updateTime = out.updateTime
                        const active = false
                        for (const item of out.busStop) {
                        
                        const courseName = item.courseName;
                        const couseTime = {
                            busTime: item.busTime,
                        };
                        if (!lastData[busLineName]) {
                            lastData[busLineName] = { busLineName, fee, active, updateTime, busStop: [] };
                        }
                        if (!lastData[busLineName].busStop[courseName]) {
                            lastData[busLineName].busStop[courseName] = { courseName, couseTime: [] };
                        }
                        lastData[busLineName].busStop[courseName].couseTime.push(couseTime);
                        }
                    }
                    const lastDataParsing = Object.entries(lastData).map(([busLineName, { fee, updateTime, active, busStop }]) => ({busLineName,fee,updateTime,active,busStop: Object.values(busStop)}));
                    this.schedule = lastDataParsing
                    console.log(this.schedule);
                }
                resolve(); // 비동기 작업 완료
            })
            .catch((error) => {
            console.log(error);
            reject(error); // 에러 처리
            })
        });
    },
    convertKeysToInteger(obj) {
        if (Array.isArray(obj)) {
            return obj.map(this.convertKeysToInteger);
        } else if (typeof obj === 'object' && obj !== null) {
            const result = {};
            let index = 0;
            for (const key in obj) {
            result[index] = this.convertKeysToInteger(obj[key]);
            index++;
            }
            return result;
        } else {
            return obj;
        }
    }
    
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
    width: 100%;
}
.openButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/colse.png);
}
.stopName{
    margin-right:10%;
}
.accordion-content {
  max-height: 0;
  /* overflow: hidden; */
  transition: max-height 0.7s ease;
}

.accordion-content.active {
  max-height: 300px; /* 적절한 높이로 조정하세요 */
}
.boxShadow{
    box-shadow: 0px 0px 15px #0F296B1F;
}
.boxRound{
    border-radius: 12px;
}
.mainContainer{
    width:90%;
    margin:0 auto;
}
.select_size{
    width: max-content;
    padding: 0 0.7rem;
    padding-right:1.4rem;
    background:url('@/assets/ybus_style_resource/ybus_img/schedule/colse.png');
    background-size: 1.5rem 100%;
    background-position: right center;
    background-repeat: no-repeat;
}
.timeBack{
    background-color: #b4b4b4;
    width: 100%;
    color: white;
    border-radius: 1rem;
    padding: 0 1.5%;
    text-align: center;
    max-width: 60px;
    margin: 0 auto;
    margin-bottom: 8%;
}
.grayBorber{
    border-top: 1px solid #b4b4b4;
    margin: 0 5%;
}
.text-gray-color{
    color:#b4b4b4;
}
.capsule{
    width:20%;
    margin:0 2.5%;
}
.text-xs {
    font-size: 0.8rem;
    line-height: 1rem;
}
.accordion-content {
  max-height: 0;
  overflow: hidden;
  transition: max-height 1s ease;
}

.accordion-content.active {
  max-height: 300px; /* 적절한 높이로 조정하세요 */
}
</style>