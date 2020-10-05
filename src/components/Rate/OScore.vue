<template>
    <div class="score-card">
        <div class="card-title">分數</div>
        <div class="score-num">{{ score }}</div>
        <hr class="score-hr">
        <div class="card-subtitle">全業者平均</div>
        <div class="average-score">{{ averageScore }}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            score: 81.6,
            averageScore: 78.1,
            rate: '甲',
            compareRate: '前30%',
        }
    }
}
</script>
<style scoped>
.score-card{
    border: solid 1px;
    border-color:#34DCA2;
    border-radius: 1.5rem;
    /* margin-right: 1rem;
    margin-left: 1rem; */
    width: 15rem;
    height: 15rem;
}
.card-title{
    /* margin-top: 0.2rem; */
    color: darkgray;
}
.score-num{
    color: #34DCA2;
    font-size: 4rem;
}
.card-subtitle{
    color: lightgray;
}
.average-score{
    font-size: 2rem;
    color: darkgray;
}
.score-hr{
    border: 1px solid darkgray;
    width: 50%;
}
</style>