<template>
  <apexchart ref="chart" height="350" :options="chartOptions" :series="series"></apexchart>
  <q-input v-model="type"></q-input>
</template>
<script>
export default {

  computed:{
    chartOptions(){
      return Object.assign({}, this.default, {chart:{type: this.type}})
    }
  },
  data() {
    return {
      type: null,
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      default: {
        chart: {
          height:'200',
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },



    }
  }

}
</script>
