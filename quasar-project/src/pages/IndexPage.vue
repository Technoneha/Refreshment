<template>
  <!-- <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page> -->
  <q-page>
    <chartExample></chartExample>
  </q-page>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'
const chartExample = defineAsyncComponent(() =>
  import('src/components/charts/lineChart.vue'))

export default defineComponent({
  name: 'IndexPage',
  components: {
    chartExample
  }
})
</script>

