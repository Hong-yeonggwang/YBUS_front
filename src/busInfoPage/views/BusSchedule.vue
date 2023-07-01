<template>
    <div class="mainContainer my-3">
        <select v-model="selectedDate" @change="chageDate" class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option v-for="(item, index) in weekDays" :key="index" :value="item.value">{{ item.title}}</option>
        </select>
        <select v-model="selecteBusLine" @change="chageBusLine" class="float-right boxShadow boxRound mx-2 select_size text-center h-7 Pretendard-Bold">
            <option v-for="(item, index) in busLines" :key="index" :value="item.busLineSeq">{{ item.busLine }}</option>
        </select>
        <select v-model="selecteBusType" @change="chageBusType" class="float-right boxShadow boxRound select_size text-center h-7 Pretendard-Bold">
            <option v-for="(item, index) in busTypes" :key="index" :value="index+1">{{ item }}</option>
        </select>
        <div class="clear-both"></div>
    </div>
    <div class="mainContainer boxShadow boxRound bg-white py-6 px-4">
        <div class="boxShadow boxRound overflow-hidden">
            <div v-for="(item,index) in schedule" :key="index">
            <div v-if ="index%2 == 0" class="grayBack" >
                <div class="w-2/12 text-center float-left Pretendard-Bold">{{item[0].busTime[0] < 10 ? '0' + item[0].busTime[0] : item[0].busTime[0]}}</div>
                    <div class="timeBorderGray w-10/12 float-left">
                        <div v-bind:time="item[0].busTime[0]" class="text-xs px-1 my-3 ">
                    <div v-for="(time,idx) in item" :key="idx" v-bind:busTime="`${item[0].busTime[0] < 10 ? '0' + item[0].busTime[0] : item[0].busTime[0]}_${time.busTime[1]<10 ? '0'+time.busTime[1] : time.busTime[1]}`" class="busScheduleBox float-left">
                        <div class="timebox_top w-max mx-auto text-gray-color">{{time.busTime[1]<10 ? '0'+time.busTime[1] : time.busTime[1]}}</div>
                        <div class="timebox_bottom timeBack ">{{time.courseName}}</div>
                    </div>
                    <div class="clear-both"></div>
                </div>
                    </div>
                <div class="clear-both"></div>
            </div>
            
            <div v-if ="index%2 == 1" class="whiteBack">
                <div class="w-2/12 text-center float-left Pretendard-Bold">{{item[0].busTime[0] < 10 ? '0' + item[0].busTime[0] : item[0].busTime[0]}}</div>
                    <div class="timeBorderGray w-10/12 float-left">
                        <div v-bind:time="item[0].busTime[0]" class="text-xs px-1 my-3 ">
                    <div v-for="(time,idx) in item" :key="idx" v-bind:busTime="`${item[0].busTime[0] < 10 ? '0' + item[0].busTime[0] : item[0].busTime[0]}_${time.busTime[1]<10 ? '0'+time.busTime[1] : time.busTime[1]}`" class="busScheduleBox float-left">
                        <div class="timebox_top w-max mx-auto text-gray-color">{{time.busTime[1]<10 ? '0'+time.busTime[1] : time.busTime[1]}}</div>
                        <div class="timebox_bottom timeBack ">{{time.courseName}}</div>
                    </div>
                    <div class="clear-both"></div>
                </div>
                    </div>
                <div class="clear-both"></div>
            </div>
        </div>
        </div>
    </div>
    
</template>

<script>
export default {
name: 'BusSchedule',
data() {
    return {
        selecteBusType :'1',
        selecteBusLine :'-1',
        selectedDate:'normal', // 선택된 값을 저장할 데이터
        busSeq:1,
        busTypes:['셔틀버스','노랑버스','통학버스'],
        busLines:[],
        weekDays:[
            {title:'월-목',value:'normal'},
            {title:'금',value:'friday'},
            {title:'주말',value:'weekday'},
        ],
        schedule:[],
        hours:'',
        minutes:'',
    };
  },
  created(){
    if (Object.keys(this.$route.params).length === 0) {
        // $route.params 객체가 비어있는 경우의 처리 로직
        this.busSeq = 1;
        this.selecteBusType = this.busSeq
        console.log("Route params is empty.");
    } else {
        // $route.params 객체에 값이 있는 경우의 처리 로직
        this.busSeq = this.$route.params.busSeq;
        this.selecteBusType = this.busSeq
        console.log("Route params is not empty.");
    }
  },
  mounted(){
    this.getBusLine()
    .then(() => {
      this.getSchedule().then(()=>{
        this.checkTimeBorder()
      });
    })
    .catch((error) => {
      console.error(error);
    });
    
},
  methods: {
    chageDate() {
        this.getSchedule()
    },
    chageBusType() {
        // 선택된 값에 따라 라우터를 이동시킴
        if(this.selecteBusType == 3){
            this.$router.push({ name: 'schoolBusSchedule'})
        }
        else{
            this.$router.push({ name: 'schedule', params: { busSeq: this.selecteBusType }})
            this.getBusLine()
            .then(() => {
            this.getSchedule().then(()=>{
                this.checkTimeBorder()
            });
            })
            .catch((error) => {
            console.error(error);
            });
        }
        
    },
    chageBusLine() {
        this.getSchedule()
    },
    getBusLine() {
    return new Promise((resolve, reject) => {
        this.axios
            .get("/bus/busLine?busline=" + this.selecteBusType)
            .then((res) => {
                this.busLines = res.data;
                this.selecteBusLine = this.busLines[0].busLineSeq;
                resolve(); // 비동기 작업 완료
            })
            .catch((error) => {
                console.log(error);
                reject(error); // 에러 처리
            });
        });
    },
    getSchedule() {
        return new Promise((resolve, reject) => {
        this.axios
            .get("/bus/schedule?busline="+this.selecteBusLine+"&weekDays="+this.selectedDate)
            .then((res) => {
                if(res != null){
                    const scheduleSort = res.data.reduce((acc, item) => {
                    const key = item.busTime[0];
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push(item);
                    return acc;
                    }, {});
                    this.schedule = scheduleSort;
                    console.log("스케줄 조회")
                }
                resolve(); // 비동기 작업 완료
            })
            .catch((error) => {
            console.log(error);
            reject(error); // 에러 처리
            })
        });
    },
    checkTimeBorder(){
        const now = new Date(); // 현재 시간을 가져오기 위해 Date 객체 생성
        this.hours = now.getHours().toString().padStart(2, '0'); // 시간을 가져옴
        this.minutes = now.getMinutes().toString().padStart(2, '0'); // 분을 가져옴

        let currentTime = '';

        const timeArray = document.querySelectorAll('[time]'); // time속성을 가진 요소 다 가져옴

        const timeValuesArray = Array.from(timeArray).map((element) => element.getAttribute('time')); // 속성 time값을 배열로 반환

        if(parseInt(this.hours) < parseInt(timeValuesArray[0])){ //만약 현재 시간이 time의 처음보다 작으면 처음으로 취급
            this.hours = timeValuesArray[0]
            currentTime = this.hours < 10 ? '0' + this.hours : this.hours+'_00';
        }else if(parseInt(this.hours) > parseInt(timeValuesArray[timeValuesArray.length-1])) //민약 현재시간이 마지막 시간보다 크면 처음으로 취급
        {
            this.hours = timeValuesArray[0]
            currentTime = this.hours < 10 ? '0' + this.hours : this.hours+'_00';

        }
        else{
            currentTime = this.hours+'_'+this.minutes; //현재시간을 저장
        }


        var chechedBustime = ''; // 현재시간으로 부터 가장 가까운 버스 시간으 저장할 변수

        const checkedBorder = document.querySelectorAll('[time="'+this.hours+'"]'); // time이 hours인 요소 가져옴

        checkedBorder.forEach((element) => { // 리스트로 가져오기때문에 반복문을 통해서 그 요소에 남색 보더 추가
        element.classList.add('timeBorderNavy');
        });
        
        const timeBoxElement = document.querySelectorAll('[busTime]'); //busTime 속성을 가진 요소 다 가져옴
        const busTime = Array.from(timeBoxElement).map((element) => element.getAttribute('busTime')); // 속성 busTime을 배열로 반환



        for (let i = 0; i < busTime.length; i++) {
        if (busTime[i] >= currentTime) {
            chechedBustime = busTime[i]
            break;
            }
        }

        const timeBox = document.querySelectorAll('[busTime="'+chechedBustime+'"]');
        timeBox.forEach((element) => {
            const top = element.querySelectorAll('.timebox_top');
            const bottom = element.querySelectorAll('.timebox_bottom');
            top.forEach((childElement) => {
                childElement.style.color = '#142637';
            });
            bottom.forEach((childElement) => {
                childElement.style.backgroundColor = '#142637';
            });
        });
       
    }
  },
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