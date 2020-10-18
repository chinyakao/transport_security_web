<template>
    <div class="">
        <div class="card">
            <div class="card-title">所有載物運輸公司等第分佈</div>
            <div class="container">
                <div class="row">
                    <div class="col-6 small">
                        <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
                    </div>
                    <div class="col-6">
                        <div class="container">
                            <div v-if="rate == '優'" class="rate-bg-test">
                                <div class="row">
                                    <div class="col table-title">優等</div>
                                    <div class="col table-num">{{ num.a }} 家</div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="row">
                                    <div class="col table-title">優等</div>
                                    <div class="col table-num">{{ num.a }} 家</div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div v-if="rate == '甲'" class="rate-bg-test">
                                <div class="row">
                                    <div class="col table-title">甲等</div>
                                    <div class="col table-num">{{ num.b }} 家</div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="row">
                                    <div class="col table-title">甲等</div>
                                    <div class="col table-num">{{ num.b }} 家</div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div v-if="rate == '乙'" class="rate-bg-test">
                                <div class="row">
                                    <div class="col table-title">乙等</div>
                                    <div class="col table-num">{{ num.c }} 家</div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="row">
                                    <div class="col table-title">乙等</div>
                                    <div class="col table-num">{{ num.c }} 家</div>
                                </div>
                            </div>
                        </div>
                        <div class="container">
                            <div v-if="rate == '丙'">
                                <div class="row rate-bg-test">
                                    <div class="col table-title">丙等</div>
                                    <div class="col table-num">{{ num.d }} 家</div>
                                </div>
                            </div>
                            <div v-else>
                                <div class="row">
                                    <div class="col table-title">丙等</div>
                                    <div class="col table-num">{{ num.d }} 家</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import PieChart from './PieChart.js'

  export default {
    components: {
      PieChart
    },
    props:{
        rate: String,
    },
    data () {
        return {
            num:{
                a: 483,
                b: 1034,
                c: 1069,
                d: 572
            },
            chartData: {
                labels: ["優等", "甲等", "乙等", "丙等"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#55D8FE", "#FF8373", "#FFDA83", "#A3A0FB"],
                        data: [483, 1034, 1069, 572]
                    }
                ]
            },
            options: {
                legend: {display: false}
            }
        }
    },
    mounted () {
    },
    methods: {
    }
  }
</script>
<style scoped>
.rate-bg-test{
    background-color: #34DCA2;
}
.card{
    border: solid 1px #34DCA2;
    border-radius: 1.5rem;
    height: 20rem;
    width: 35rem;
    vertical-align: middle;
    /* margin: 1rem; */
}
.card-title{
    /* margin-top: 0.2rem; */
    color: darkgray;
}
.table td, .table th{
    border: none;
}
.table-title{
    color: darkgray;
}
.table-num{
    color: darkgray;
    text-align: right;
}
.row{
    margin-top: 1.5rem;
}
</style>