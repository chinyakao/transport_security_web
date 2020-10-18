import { Doughnut, mixins } from "vue-chartjs";
const { reactiveProp } = mixins
// import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  props: ["chartData", "options"],
  mixins: [reactiveProp],
  mounted() {
    // this.chartData is created in the mixin.
    // If you want to pass options please create a local options object
    this.renderChart(this.chartData,this.options);
  }
};
