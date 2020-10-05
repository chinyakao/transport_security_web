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
                            <div class="row">
                                <div class="col table-title">優等</div>
                                <div class="col table-num">{{ num.a }} 家</div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row rate-bg-test">
                                <div class="col table-title">甲等</div>
                                <div class="col table-num">{{ num.b }} 家</div>
                            </div>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col table-title">乙等</div>
                                <div class="col table-num">{{ num.c }} 家</div>
                            </div>
                        </div>
                        <div class="container">
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
</template>
<script>
import PieChart from './PieChart.js'

  export default {
    components: {
      PieChart
    },
    data () {
        return {
            num:{
                a: 456,
                b: 1034,
                c: 133,
                d: 34
            },
            chartOptions: {
                hoverBorderWidth: 20
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 10,
                // labels: ["Green", "Red", "Blue"],
                datasets: [
                {
                    label: "Data One",
                    backgroundColor: ["#41B883", "#E46651", "#00D8FF"],
                    data: [1, 10, 5]
                }
                ]
            }
        };
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: '#f87979',
              data: [this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
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
    color: lightgray;
}
.table-num{
    color: darkgray;
    text-align: right;
}
.row{
    margin-top: 1.5rem;
}
</style>