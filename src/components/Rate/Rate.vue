<template>
    <div>
    <Navbar :title="'運輸安全分數'"></Navbar>
        <b-navbar class="navbar-2" toggleable="lg" type="light" variant="">
        <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->
    
        <b-collapse id="nav-collapse" is-nav>            
            <span class="abs-center-x">
            <b-button href="#" variant="light" size="sm" class="randomforest-btn">
                Random Forest
            </b-button>
            <b-button href="#" variant="light" size="sm" class="xgboost-btn">
                XGBoost
            </b-button>
            </span>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
            <b-link class="weighted-info-link" href="#foo">
                計算權重選擇
                <font-awesome-icon icon="info-circle" />
            </b-link>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
        <div class="content">
        <div class="container">
            <div class="row">
            <div class="col-12">
                <div class="company-title">{{ companyData[0] }}</div>
                <div class="company-subtitle">於 {{ selectedYear }} 年 {{ companyType[companyData[1]-1] }} 的安全評量分數</div>
            </div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class="col">
                <OScore :score="total_score"></OScore>
            </div>
            <div class="col">
                <ORate />
            </div>
            <div class="col"></div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class="col">
                <!-- <OChart /> -->
            </div>
            <div class="col"></div>
            </div>
            <div class="row">
            <div class="col-12">
                <div class="detail-title">各大評鑑指標分數與排名</div>
                <div class="detail-subtitle">點選可查看各大指標細項分數</div>
            </div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class="col-3">
                <Behavior :detail="be_detail" :score="be_score"></Behavior>
            </div>
            <div class="col-3">
                <History :detail="hi_detail" :score="hi_score"></History>
            </div>
            <div class="col-3">
                <Vehicle :detail="ve_detail" :score="ve_score"></Vehicle>
            </div>
            <div class="col"></div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class="col-3">
                <Labor :detail="la_detail" :score="la_score"></Labor>
            </div>
            <div class="col-3">
                <Sustain :detail="su_detail" :score="su_score"></Sustain>
            </div>
            <div class="col-3">
                <Manage :detail="ma_detail" :score="ma_score"></Manage>
            </div>
            <div class="col"></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import OScore from './OScore.vue'
import ORate from './ORate.vue'
// import OChart from './OChart.vue'
import Behavior from './Behavior.vue'
import History from './History.vue'
import Vehicle from './Vehicle.vue'
import Labor from './Labor.vue'
import Manage from './Manage.vue'
import Sustain from './Sustain.vue'

export default {
    components:{
        Navbar,
        OScore,
        ORate,
        // OChart,
        Behavior,
        History,
        Vehicle,
        Labor,
        Manage,
        Sustain,
    },
    data(){
        return{
            companyTitle: '台灣日通日電物流股份有限公司',
            selectedYear: '2020',
            companyType: ["汽車貨運業", "汽車貨櫃貨運業", "汽車路線貨運業", "客運業"],
            companyData: ["Company  1275","1","9","100","100","100","100","100","100","100","89","100","91","88","90","92","70","91","92","91","90","91","89","91","92","89","92","90","91","89","89","100","92","85","91"],
            be_big_weight: [0.487175098, 0.398692364, 0.410719892, 0.492164604, 0.395154658, 0.329578916],
            be_weight: [
                [0.020644938, 0.20093747, 0.067703738, 0.020696064, 0.0765704, 0.0812616, 0.019360888],
                [0.01909573, 0.1436127, 0.048231084, 0.024776024, 0.0640504, 0.0646664, 0.034260026],
                [0.06737844, 0.15878678, 0.0390792, 0.049764272, 0.0428432, 0.0296792, 0.0231888],
                [0.011691472, 0.186319338, 0.103418554, 0.020418414, 0.0765704, 0.0812616, 0.012484826],
                [0.012389248, 0.138099938, 0.073302846, 0.027744068, 0.0640504, 0.0646664, 0.014901758],
                [0.05460431, 0.07621334, 0.070678922, 0.030514742, 0.0428432, 0.0296792, 0.025045202],
            ],
            hi_big_weight: [0.05108043, 0.066584952, 0.10318783, 0.05087772, 0.092734612, 0.10220025],
            hi_weight: [
                [0.038257692, 0.012822738],
                [0.047385456, 0.019199496],
                [0.043340112, 0.059847718],
                [0.03836359, 0.01251413],
                [0.046712338, 0.046022274],
                [0.044288274, 0.057911976]
            ],
            ve_big_weight: [0.137184918, 0.16141385, 0.1537928, 0.13431953, 0.151623114, 0.167541886],
            ve_weight: [
                  [0.012952936,0.054860196,0.040212182,0.012258188,0.016901416],
                  [0.017490128,0.06288709,0.041310446,0.01637539,0.023350796],
                  [0.0281624,0.0342064,	0.040108,	0.0240936,	0.0272224],
                  [0.013895128,	0.054728956,	0.040808762,	0.012562322,	0.012324362],
                  [0.01767991,	0.057959868,	0.041786348,	0.01719367,	0.017003318],
                  [0.030293356,	0.036192988,	0.044867796,	0.02766725,	0.028520496],
            ],
            la_big_weight: [0.11377725, 0.136768318, 0.1075983, 0.115367106, 0.135705576, 0.11630572],
            la_weight: [
                [0.01722279,0.039381876,0.026116894,0.03105569],
                [0.017532768,0.048142462,0.02673724,0.044355848],
                [0.0437015,0.0306264,0.0164272,0.0168432],
                [0.017450608,0.039798434,0.027020418,0.031097646],
                [0.016523516,0.049227294,0.027190002,0.042764764],
                [0.04324745,0.032245852,0.01992428,0.020888138]
            ],
            su_big_weight: [0.092228534, 0.096302634, 0.12336493, 0.094989506, 0.09966097, 0.156634542],
            su_weight: [
                [0.005625794,	0.01120539,	0.006601236,	0.010530172,	0.019247178,	0.029423858,	0.009594906],
                [0.006028788,	0.011715364,	0.00844485,	0.01118248,	0.020129402,	0.02873362,	0.01006813],
                [0.017894586,	0.0312856,	0.0131184,	0.0155656,	0.0191112,	0.0129488	,0.013440744],
                [0.005539158,	0.01115354,	0.007270294,0.011529428,	0.019862,	0.029601902,	0.010033184],
                [0.007136998,	0.012265904,	0.008063894,	0.011995938	,0.019889122	,0.028985848,	0.011323266],
                [0.030642996,	0.033211348,	0.01995252,	0.023959916	,0.022956416	,0.013289434,	0.012621912],
            ],
            ma_big_weight: [0.118553758,0.140235464,0.101336234,0.112281532,0.125118672,0.127738684,],
            ma_weight: [
                [0.015383244,	0.019894618,	0.02206931,	0.017749024,	0.013592472,	0.017632866,	0.012232224],
                [0.02368587,	0.01516917,	0.024317742,	0.026242288	,0.020215036,	0.01752398,	0.013081378],
                [0.012864,	0.021657834	,0.026804,	0.0096824,0.0121408,	0.009396,	0.0087912],
                [0.015958718,	0.020137878,	0.021885216,	0.012403534	,0.013973686,	0.014745422	,0.013177078],
                [0.020160522,	0.015980986,	0.025652816	,0.018984412,	0.02075249,	0.01177918,	0.011808266],
                [0.01958124,	0.023409214,	0.034160138	,0.0096824,	0.019618486,	0.01107588,	0.010211326],
            ],
        }
    },
    methods: {
    },
    computed: {
      be_detail(){
        var res = []
        res.push(this.companyData[3]) 
        res.push(this.companyData[4]) 
        res.push(this.companyData[5]) 
        res.push(this.companyData[6]) 
        res.push(this.companyData[7]) 
        res.push(this.companyData[8]) 
        res.push(this.companyData[9]) 
        return res
      },
      be_score(){
            var result = 0
            let weight = this.be_weight[this.companyData[1]-1]
            let big_weight = this.be_big_weight[this.companyData[1]-1]
            for(let i=0; i<7; i++){
                result = result + this.be_detail[i] * weight[i]
            }
            result = result / big_weight
            return Math.round(result*10)/10
      },
      hi_detail(){
        var res = []
        res.push(this.companyData[10]) 
        res.push(this.companyData[11]) 
        return res
      },
      hi_score(){
            var result = 0
            let weight = this.hi_weight[this.companyData[1]-1]
            let big_weight = this.hi_big_weight[this.companyData[1]-1]
            for(let i=0; i<2; i++){
                result = result + this.hi_detail[i] * weight[i]
            }
            result = result / big_weight
            return Math.round(result*10)/10
      },
      ve_detail(){
        var res = []
        res.push(this.companyData[12]) 
        res.push(this.companyData[13]) 
        res.push(this.companyData[14]) 
        res.push(this.companyData[15]) 
        res.push(this.companyData[16]) 
        return res
      },
      ve_score(){
            var result = 0
            let weight = this.ve_weight[this.companyData[1]-1]
            let big_weight = this.ve_big_weight[this.companyData[1]-1]
            for(let i=0; i<5; i++){
                result = result + this.ve_detail[i] * weight[i]
            }
            result = result / big_weight
            return Math.round(result*10)/10
      },
      la_detail(){
        var res = []
        res.push(this.companyData[17]) 
        res.push(this.companyData[18]) 
        res.push(this.companyData[19]) 
        res.push(this.companyData[20]) 
        return res
      },
      la_score(){
            var result = 0
            let weight = this.la_weight[this.companyData[1]-1]
            let big_weight = this.la_big_weight[this.companyData[1]-1]
            for(let i=0; i<4; i++){
                result = result + this.la_detail[i] * weight[i]
            }
            result = result / big_weight
            return Math.round(result*10)/10
      },
      su_detail(){
        var res = []
        res.push(this.companyData[21]) 
        res.push(this.companyData[22]) 
        res.push(this.companyData[23]) 
        res.push(this.companyData[24]) 
        res.push(this.companyData[25]) 
        res.push(this.companyData[26]) 
        res.push(this.companyData[27]) 
        res.push(this.companyData[1])
        return res
      },
      su_score(){
            var result = 0
            let weight = this.su_weight[this.companyData[1]-1]
            let big_weight = this.su_big_weight[this.companyData[1]-1]
            for(let i=0; i<7; i++){
                result = result + this.su_detail[i] * weight[i]
            }
            result = result / big_weight
            return Math.round(result*10)/10
      },
      ma_detail(){
        var res = []
        res.push(this.companyData[28]) 
        res.push(this.companyData[29]) 
        res.push(this.companyData[30]) 
        res.push(this.companyData[31]) 
        res.push(this.companyData[32]) 
        res.push(this.companyData[33]) 
        res.push(this.companyData[34]) 
        res.push(this.companyData[1])
        return res
      },
      ma_score(){
            var result = 0
            let weight = this.ma_weight[this.companyData[1]-1]
            let big_weight = this.ma_big_weight[this.companyData[1]-1]
            for(let i=0; i<7; i++){
                result = result + this.ma_detail[i] * weight[i]
            }
            result = result / big_weight
            return Math.round(result*10)/10
      },
      total_score(){
        let result = this.be_score*this.be_big_weight[this.companyData[1]-1]
        result = result+ this.hi_score*this.hi_big_weight[this.companyData[1]-1]
        result = result+  this.ve_score*this.ve_big_weight[this.companyData[1]-1]
        result = result+ this.la_score*this.la_big_weight[this.companyData[1]-1]
        result = result+ this.su_score*this.su_big_weight[this.companyData[1]-1]
        result = result+ this.ma_score*this.ma_big_weight[this.companyData[1]-1]
        console.log(result)
        return Math.round(result*10)/10
      }
    }
    
}
</script>

<style scoped>
.btn{
    border-radius: 1.5rem;
    border-color: transparent;
    background-color: transparent;
    color: black;
}
.navbar{
  background-color: #34DCA2;
}
.navbar-2{
  background-color: #34DCA2;
  position: fixed;
  top: 3.5rem;
  right: 0;
  left: 0;
  height: 2.5rem;
  z-index: 1030;
}
.back-btn{
  color: white;
}
.randomforest-btn{
  background-color: white;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.xgboost-btn{
  background-color: darkgreen;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
}
.weighted-info-link{
  color: darkgray;
}
.company-title{
  font-size: 2rem;
}
.company-subtitle{
  color: darkgray;
}
.detail-title{
  font-size: 1.5rem;
}
.detail-subtitle{
  color: darkgray;
}
.center{ 
  margin: 0 auto; 
  float: none;
  display: inline-flex;
}
.row{
  margin-top: 1rem;
  margin-bottom: 1rem;
}
</style>