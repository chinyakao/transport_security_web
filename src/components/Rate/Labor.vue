<template>
    <div>
        <b-button v-b-modal.modal-4 class="card-btn" variant="light">
            <font-awesome-icon class="card-icon" icon="address-card" />
            <div class="card-title">勞基法相關</div>
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

        <b-modal ref="modal-4" id="modal-4" title="" hide-footer hide-header centered>
            <div class="modal-title">
                <font-awesome-icon class="modal-icon" icon="address-card" />
                勞基法相關
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
                    <div class="col detail-score">排班紀錄</div>
                    <div class="col detail-score-num">{{ detail[0] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.O1" variant="success" :precision="1">平均 {{ average.O1 }}</b-progress-bar>
                    <b-progress-bar :value="detail[0]-average.O1" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">健康檢查與其紀錄</div>
                    <div class="col detail-score-num">{{ detail[1]}}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.O2" variant="success" :precision="1">平均 {{ average.O2 }}</b-progress-bar>
                    <b-progress-bar :value="detail[1]-average.O2" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">勞健保與其紀錄</div>
                    <div class="col detail-score-num">{{ detail[2] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.O3" variant="success" :precision="1">平均 {{ average.O3 }}</b-progress-bar>
                    <b-progress-bar :value="detail[2]-average.O3" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">勞動檢查違規入案紀錄</div>
                    <div class="col detail-score-num">{{ detail[3] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.O4" variant="success" :precision="1">平均 {{ average.O4 }}</b-progress-bar>
                    <b-progress-bar :value="detail[3]-average.O4" variant="warning"></b-progress-bar>
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
    props:{
        detail: Array,
    },
    data(){
        return{
            // score: 80.1,
            rate: 1284,
            averageScore: 77.6,
            totalCompany: 3507,
            max: 100,
            xgboost_weight: 0.0619696,
            randomforest_weight: 0.044926531,
            xgboost: [0.007575965, 0.018857526, 0.022241347, 0.013294762],
            randomforest: [0.010839539, 0.010386106, 0.010812374, 0.012888512],
            average:{
                O1: 78,
                O2: 75,
                O3: 74,
                O4: 86,
            }
        }
    },computed:{
        score(){
            var result = 0
            for(let i=0; i<4; i++){
                result = result + this.detail[i] * this.xgboost[i]
            }
            result = result / this.xgboost_weight
            return Math.round(result*10)/10
        },
        turnBackScore(){
            var result = 0
            for(let i=0; i<4; i++){
                result = result + this.detail[i] * this.xgboost[i]
            }
            return result
        }
    },
    methods:{
        hideModal() {
            this.$refs['modal-4'].hide()
        },
    }
}
</script>
<style scoped>
.card-btn{
    border-color: #34DCA2;
    /* margin: 1rem;*/
    width: 16rem;
    /* height: 15rem;  */
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