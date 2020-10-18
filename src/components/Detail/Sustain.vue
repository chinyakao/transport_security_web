<template>
    <div>
        <b-button v-b-modal.modal-5 class="card-btn" variant="light">
            <font-awesome-icon class="card-icon" icon="box" />
            <div class="card-title">承載物質相關</div>
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
        <b-modal ref="modal-5" id="modal-5" title="" hide-footer hide-header centered>
            <div class="modal-title">
                <font-awesome-icon class="modal-icon" icon="box" />
                承載物質相關
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
                    <div class="col detail-score">貨物標記</div>
                    <div class="col detail-score-num">{{ detail[0] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G1" variant="success" :precision="1">平均 {{ average.G1 }}</b-progress-bar>
                    <b-progress-bar :value="detail[0]-average.G1" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">貨物包裝/封裝完整性</div>
                    <div class="col detail-score-num">{{ detail[1] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G2" variant="success" :precision="1">平均 {{ average.G2 }}</b-progress-bar>
                    <b-progress-bar :value="detail[1]-average.G2" variant="warning"></b-progress-bar>
                </b-progress>
            </div>

            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">貨物相關文件</div>
                    <div class="col detail-score-num">{{ detail[2] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G3" variant="success" :precision="1">平均 {{ average.G3 }}</b-progress-bar>
                    <b-progress-bar :value="detail[2]-average.G3" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">貨物保護</div>
                    <div class="col detail-score-num">{{ detail[3] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G4" variant="success" :precision="1">平均 {{ average.G4 }}</b-progress-bar>
                    <b-progress-bar :value="detail[3]-average.G4" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">貨物乘載與固定相關</div>
                    <div class="col detail-score-num">{{ detail[4] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G5" variant="success" :precision="1">平均 {{ average.G5 }}</b-progress-bar>
                    <b-progress-bar :value="detail[4]-average.G5" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">事故危害</div>
                    <div class="col detail-score-num">{{ detail[5] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G6" variant="success" :precision="1">平均 {{ average.G6 }}</b-progress-bar>
                    <b-progress-bar :value="detail[5]-average.G6" variant="warning"></b-progress-bar>
                </b-progress>
            </div>
            <div class="mb-2">
                <div class="row">
                    <div class="col detail-score">移動路線</div>
                    <div class="col detail-score-num">{{ detail[6] }}
                        <span class="detail-score-last">分</span>
                    </div>
                </div>
                <b-progress height="0.75rem" class="" :max="max">
                    <b-progress-bar :value="average.G7" variant="success" :precision="1">平均 {{ average.G7 }}</b-progress-bar>
                    <b-progress-bar :value="detail[6]-average.G7" variant="warning"></b-progress-bar>
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
        score: Number,
    },
    data(){
        return{
            rate: 1284,
            averageScore: 77.6,
            totalCompany: 3507,
            max: 100,
            average:{
                G1: 78,
                G2: 75,
                G3: 74,
                G4: 86,
                G5: 78,
                G6: 75,
                G7: 73,
            }
        }
    },
    methods:{
        hideModal() {
            this.$refs['modal-5'].hide()
        },
    }
}
</script>
<style scoped>
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
}
.card-btn{
    border-color: #34DCA2;
    /* margin: 1rem;*/
    width: 16rem;
    border-radius: 1.5rem;
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