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
                <div class="company-subtitle">於 {{ selectedYear }} 年的安全評量分數</div>
            </div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class="col">
                <OScore />
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
                <Behavior :detail="be_detail"></Behavior>
            </div>
            <div class="col-3">
                <History :detail="hi_detail"></History>
            </div>
            <div class="col-3">
                <Vehicle :detail="ve_detail"></Vehicle>
            </div>
            <div class="col"></div>
            </div>
            <div class="row">
            <div class="col"></div>
            <div class="col-3">
                <Labor :detail="la_detail"></Labor>
            </div>
            <div class="col-3">
                <Sustain :detail="su_detail"></Sustain>
            </div>
            <div class="col-3">
                <Manage :detail="ma_detail"></Manage>
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
            companyData: ["Company  1275","1","9","100","100","100","100","100","100","100","89","100","91","88","90","92","70","91","92","91","90","91","89","91","92","89","92","90","91","89","89","100","92","85","91"  ],
            
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
      hi_detail(){
        var res = []
        res.push(this.companyData[10]) 
        res.push(this.companyData[11]) 
        return res
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
      la_detail(){
        var res = []
        res.push(this.companyData[17]) 
        res.push(this.companyData[18]) 
        res.push(this.companyData[19]) 
        res.push(this.companyData[20]) 
        return res
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
        return res
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
        return res
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