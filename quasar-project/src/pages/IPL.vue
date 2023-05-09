<template>
  <apexchart ref="chart" height="350" :options="chartOptions" :series="series"></apexchart>
  <q-input v-model="type"></q-input>
  <div class="q-pa-md example -row-equal -width">
    <h4> CRICKET</h4>
  </div>

  <div class="q-pa-md">
    <q-table flat bordered title="WorldCupMatch" :rows="rows" :columns="columns" row-key="name" dark color="amber" />
  </div>
</template>
<script>

const columns = [
  {
    name: 'name',
    required: true,
    label: 'OVER (20 over)',
    align: 'left',
    field: row => row.name,
    format: val => `${val}`,
    sortable: true
  },
  { name: 'OVER', align: 'center', label: 'Over', field: 'Over', sortable: true},
  { name: 'SIX', align: 'center', label: 'SixRun ', field: 'SixRun', sortable: true },
  { name: 'FOUR', align: 'center', label: 'FourRun', field: 'FourRun', sortable: true },
  { name: 'TotalRun', align: 'center', label: 'TotalRun', field: 'TotalRun', sortable: true },
]
const rows = [

  {
    name: 'RohitSharma',
    Over: 5,
    SixRun: 8,
    FourRun: 10,
    TotalRun: 88
  },
  {
    name: 'ViratKOhli',
    Over: 8,
    SixRun: 12,
    FourRun: 15,
    TotalRun: 132
  },
  {
    name: 'KlRahul',
    Over: 2,
    SixRun: 6,
    FourRun: 9,
    TotalRun: 72
  },
  {
    name: 'DeepakHooda',
    Over: 3,
    SixRun: 5,
    FourRun: 9,
    TotalRun: 66
  },
  {
    name: 'RishabPant',
    Over: 2,
    SixRun: 5,
    FourRun: 15,
    TotalRun: 90
  },
  {
    name: 'HardikPandya',
    Over: 1,
    SixRun: 4,
    FourRun: 2,
    TotalRun: 32
  },
]
export default {
  setup() {
    return {
      columns,
      rows
    }
  }
}



</script>
