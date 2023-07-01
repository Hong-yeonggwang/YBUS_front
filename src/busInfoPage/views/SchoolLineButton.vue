<template>
    <router-link :to="{ name: 'SchoolBusStop'}">
        <div id="busStopLineButton" class="float-right"></div>
    </router-link>
</template>

<script>
export default {
name: 'SchoolLineButton',
data(){
return {
    busSeq: 3,
}
},
props: {
    msg: String
//     아직은 프롭스 설정할게 없음.
}
}
</script>

<style scoped>
#busStopLineButton{
    content:url(@/assets/ybus_style_resource/ybus_img/schedule/busStopLineIcon.png);
    width:47.5%;
}
</style>