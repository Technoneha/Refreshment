<template>

  <apexchart type="line" height="350" :options="chartOptions"  :series="series"
    :series.data="addRuns"></apexchart>
</template>
<script>

export default {
  name: 'mychart',
  data() {
    return {
      series: [{
        name: "Runs",
        data: []
      }],
      chartOptions: {
        chart: {
          height: 250,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: 'straight'
        },


        title: {
          text: 'Scores per Balls ',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: [],

        }
      },


    }


  },

  methods: {
    addBalls() {
      for (let i = 0; i <= 120;) {
        i = i + 1
        console.log(i)
        this.chartOptions.xaxis.categories.push(i);
      }
    },
    addRuns() {
      for (let j = 1; j < 121; j++) {
        let x = Math.floor(Math.random() * (6 - 1) + 1);

        this.series[0].data.push(x);


      }

    }
  },
  created(){
    this.addRuns()
    this.addBalls()
  }
}








</script>
