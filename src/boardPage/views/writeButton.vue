<template>
  <router-link to="/board/write">
    <div class = "Pretendard-semiBold float-right writeButton">글쓰기</div>
  </router-link>
</template>

<script>
export default {
name: 'writeButton',
data(){
return {
    buttonFlag: 'no name',
}
},
created(){

},
mounted(){
},
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
},
methods:{
    insertBusInfo(){
    }
}
}
</script>

<style scoped>

.writeButton{
  font-size : 0.8rem;
  height:2.2rem;
  border: solid 1px #142637;
  line-height:2rem;
  border-radius: 1.5rem;
  width:4.5rem;
  padding: 0 0.7rem;
  background-color:#142637;
  color:white;
  text-align: center;
}


</style>