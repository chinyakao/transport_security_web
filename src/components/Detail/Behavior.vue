<template>
    <div>
        <b-button v-b-modal.modal-1 class="card-btn" variant="light">
            <font-awesome-icon class="card-icon" icon="exclamation-triangle" />
            <div class="card-title">不安全駕駛行為</div>
            <div class="container">
                <div class="row card-subtitle">
                    <div class="col">分數</div>
                    <div class="col">排名</div>
                </div>
                <div class="row">
                    <div class="col score-num">{{ score }}
                    <hr class="score-hr"></div>

                    <div class="col rate-num">{{ rate }}
                    <hr class="rate-hr"></div>

                </div>
                <div class="row average-score-total-company">
                    <div class="col">平均 {{ averageScore }}</div>
                    <div class="col">{{ totalCompany }}</div>
                </div>
            </div>

        </b-button>

        <b-modal ref="modal-1" id="modal-1" title="" hide-footer hide-header centered>
            <div class="modal-title">
                <font-awesome-icon class="modal-icon" icon="exclamation-triangle" />
                不安全駕駛行為
            </div>
            <div class="modal-rate">
                排名 
                <span class="modal-rate-num">{{ rate }}</span> 
                /{{ totalCompany }}
            </div>
            <div class="modal-score">
                <span class="modal-score-num">{{ score }}</span>分    
            </div>
            <b-progress height="1.3rem" class="" :max="max">
                <b-progress-bar :value="averageScore" variant="success" :precision="1">平均 {{ averageScore }}</b-progress-bar>
                <b-progress-bar :value="score-averageScore" variant="warning"></b-progress-bar>
            </b-progress>
            <hr class="modal-hr">
            <div class="modal-detail-title">細項分數</div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">危險駕駛行為</div>
                    <div class="col detail-score-num">{{ detail[0] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B1" variant="success" :precision="1">平均 {{ average.B1 }}</b-progress-bar>
                    <b-progress-bar :value="detail[0]-average.B1" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">超速</div>
                    <div class="col detail-score-num">{{ detail[1] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B2" variant="success" :precision="1">平均 {{ average.B2 }}</b-progress-bar>
                    <b-progress-bar :value="detail[1]-average.B2" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">安全帶</div>
                    <div class="col detail-score-num">{{ detail[2] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B3" variant="success" :precision="1">平均 {{ average.B3 }}</b-progress-bar>
                    <b-progress-bar :value="detail[2]-average.B3" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">使用手機</div>
                    <div class="col detail-score-num">{{ detail[3] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B4" variant="success" :precision="1">平均 {{ average.B4 }}</b-progress-bar>
                    <b-progress-bar :value="detail[3]-average.B4" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">藥物</div>
                    <div class="col detail-score-num">{{ detail[4] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B5" variant="success" :precision="1">平均 {{ average.B5 }}</b-progress-bar>
                    <b-progress-bar :value="detail[4]-average.B5" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">酒精</div>
                    <div class="col detail-score-num">{{ detail[5] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B6" variant="success" :precision="1">平均 {{ average.B6 }}</b-progress-bar>
                    <b-progress-bar :value="detail[5]-average.B6" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">其他違法行為</div>
                    <div class="col detail-score-num">{{ detail[6] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.B7" variant="success" :precision="1">平均 {{ average.B7 }}</b-progress-bar>
                    <b-progress-bar :value="detail[6]-average.B7" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="modal-custom-footer">
                <b-button class="mt-3 close-btn w-25" size="sm" variant="light" @click="hideModal">返回</b-button>
            </div>
        </b-modal>
    </div>
</template>
<script>
export default {
    props: {
        detail: Array,
        score: Number,
    },
    data(){
        return{
            rate: 1284,
            averageScore: 77.6,
            totalCompany: 3507,
            max: 100,
            
            average:{
                B1: 78,
                B2: 75,
                B3: 74,
                B4: 86,
                B5: 78,
                B6: 75,
                B7: 73,
            }
        }
    },
    // computed:{
    //     score(){
    //         var result = 0
    //         let weight = this.weight[this.detail[7]-1]
    //         let big_weight = this.big_weight[this.detail[7]-1]
    //         for(let i=0; i<7; i++){
    //             result = result + this.detail[i] * weight[i]
    //         }
    //         result = result / big_weight
    //         return Math.round(result*10)/10
    //     },
    // },
    methods:{
        hideModal() {
            this.$refs['modal-1'].hide()
        },
    },
}
</script>
<style scoped>
.card-btn{
    border-color: #34DCA2;
    /* margin: 1rem;*/
    width: 16rem;
    /* height: 15rem;  */
    border-radius: 1.5rem;
}
.card-icon{
    font-size: 4rem;
    color: #34DCA2;
}
.card-title{
    color: black;
    font-size: 1rem;
}
.card-subtitle{
    color: darkgray;
    font-size: 0.75rem;
}
.score-num{
    color: #34DCA2;
    font-size: 2.5rem;
}
.rate-num{
    color: darkgray;
    font-size: 2.5rem;
}
.score-hr{
    border: 1px solid darkgray;
    width: 10%;
    margin-top: 0;
    margin-bottom: 0;
}
.rate-hr{
    border: 1px solid darkgray;
    margin-top: 0;
    margin-bottom: 0;
    width: 10%;
}
.average-score-total-company{
    font-size: 0.75rem;
    color: darkgray;
}
.modal{
    font-family: 'Noto Sans TC', sans-serif;
}
.modal-title{
    font-family: 'Noto Sans TC', sans-serif;
    text-align: center;
    font-size: 1.3rem;
}
.modal-rate{
    font-family: 'Noto Sans TC', sans-serif;
    text-align: center;
    font-size: 0.75rem;
    color: darkgray;
}
.modal-score{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 0.75rem;
    color: darkgray;
    text-align: right;
}
.modal-rate-num{
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: bold;
    color: #34DCA2;
}
.modal-score-num{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #34DCA2;
}
.modal-hr{
    font-family: 'Noto Sans TC', sans-serif;
    border: solid 1px lightgray;
}
.modal-detail-title{
    font-family: 'Noto Sans TC', sans-serif;
    color: darkgray;
    font-size: 1rem;
    text-align: center;
    padding-top: 0;
    margin-top: 0;
}
.detail-score{
    font-family: 'Noto Sans TC', sans-serif;
    color: black;
    text-align: left;
    font-size: 1rem;
}
.detail-score-num{
    font-family: 'Noto Sans TC', sans-serif;
    font-size: 1rem;
    /* font-weight: bold; */
    color: #34DCA2;
    text-align: right;
}
.detail-score-last{
    font-size: 0.7rem;
    color: darkgray;
}
.modal-custom-footer{
    text-align: center;
}
.close-btn{
    font-family: 'Noto Sans TC', sans-serif;
    color: white;
    background-color: gray;
}
</style>