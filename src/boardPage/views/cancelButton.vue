<template>
  <div class = "Pretendard-semiBold float-right writeButton ">글쓰기</div>
  <router-link to="/board">
    <div class = "Pretendard-semiBold float-right cancelButton mx-3">취소</div>
  </router-link>
</template>

<script>
export default {
name: 'cancelButton',
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
.cancelButton{
  font-size : 0.8rem;
  height:2.2rem;
  border: solid 2px #142637;
  line-height:2rem;
  border-radius: 1.5rem;
  width:4.5rem;
  padding: 0 0.7rem;
  background-color:#FFFFFF;
  color:#142637;
  text-align: center;
}

</style>