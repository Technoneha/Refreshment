<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <ajio-header></ajio-header>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>


import ajioHeader from 'components/ajio/header.vue'
export default{
  components:{ajioHeader}

}
</script>
