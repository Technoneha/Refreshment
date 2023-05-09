<template>
  <h3>Data Chart </h3>
  <div class="q-pa-md">
    <q-option-group
      :options="options"
      type="checkbox"
      v-model="group"
    />
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      group: ref([]),
      options: [
        { label: 'Pie Chart', value: 'bat' },
        { label: 'Line Chart', value: 'friend', color: 'green' },
        { label: 'Bar Chart', value: 'upload', color: 'red' }
      ]
    }
  }
}
</script>
