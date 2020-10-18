<template>
    <div class="rate-card">
        <div class="card-title">等第</div>
        <div class="rate-num">{{ rate }}</div>
        <div class="card-subtitle">落在 {{ compareRate }}</div>
        <hr class="rate-hr">
        <div class="container rate-table">
            <div class="row">
            <div class="col" >優  </div>
            <div class="col" >甲  </div>
            <div class="col" >乙  </div>
            <div class="col" >丙  </div>
            <div class="col" >fail</div>
            </div>
            <div class="row">
            <div class="col" >100~</div>
            <div class="col" >89~</div>
            <div class="col" >79~</div>
            <div class="col" >69~</div>
            <div class="col" >59~</div>
            </div>
            <!-- <div class="row">
            <div class="col" >|</div>
            <div class="col" >|</div>
            <div class="col" >|</div>
            <div class="col" >|</div>
            <div class="col" >|</div>
            </div> -->
            <!-- <div class="row">
            <div class="col" >90</div>
            <div class="col" >80</div>
            <div class="col" >70</div>
            <div class="col" >60</div>
            <div class="col" >0</div>
            </div> -->
        </div>
    </div>
    <!-- <b-card-group deck class="">
        <b-card
            title="Card Title"
            tag="article"
            style="max-width: 20rem;"
            class="score-card center"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

        </b-card>
        <b-card
            title="Card Title"
            tag="article"
            style="max-width: 20rem;"
            class="rate-card center"
        >
            <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </b-card-text>

        </b-card>

    </b-card-group> -->

</template>
<script>
export default {
    props:{
        rate: String,
        compareRate: String
    },
    data(){
        return{
        }
    }
}
</script>
<style scoped>
.rate-card{
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
.rate-num{
    color: #34DCA2;
    font-size: 4rem;
}
.card-subtitle{
    color: lightgray;
}
.rate-hr{
    border: 1px solid #34DCA2;
}
.rate-table{
    text-align: center;
    font-size: 0.5rem;
    color: darkgreen;
}
.col{
    margin: 0;
    padding: 0;
}
</style>