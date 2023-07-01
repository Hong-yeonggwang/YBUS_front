<template>
    <router-link :to="{ name: 'schedule', params: { busSeq:this.busSeq } }">
        <div id="scheduleButton" class="float-right"></div>
    </router-link>
</template>

<script>
export default {
name: 'timeButton',
data(){
return {
    busSeq: 1,
}
},
created(){

},
mounted(){
    if( this.$route.params.busSeq != null){
        this.busSeq = this.$route.params.busSeq
        console.log(this.busSeq);
    }
    
},
props: {
    msg: String 
//     아직은 프롭스 설정할게 없음.
}
}
</script>

<style scoped>

#scheduleButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/scheduleButtonIcon.png);
    margin-left:5%;
    width:47.5%;

}
</style>