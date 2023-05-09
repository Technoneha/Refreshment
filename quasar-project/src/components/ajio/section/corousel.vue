<template>
  <q-carousel infinite style="height:100%" :autoplay="2000" transition-prev="slide-right" transition-next="slide-left"
    animated v-model="slideIndex">
    <q-carousel-slide v-for="slide, index in slides" :name="index">
      <a href="https://www.ajio.com/s/50-to-90-percent-off-5022-79791">
      <q-img width="100%" height="350px" :src="slide.imgUrl"></q-img>
      </a>
    </q-carousel-slide>
  </q-carousel>
</template>
<script>
export default {
  data () {
    return {
      slideIndex: 0,
      slides: [
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/MEGASUMMERCARNIVAL-D-UHP.gif' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Main-P2-MnsSuperdry-Upto60.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Main-P3-NikeAdidas-3050.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Main-P4-Puma-Min40.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Main-P5-AksAnubhutee-Flat50extraupto35.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-main-P6-AvaasaDNMX-Under599.jpg' },
        { imgUrl: 'https://assets.ajio.com/cms/AJIO/WEB/01052023-UHP-D-Main-P7-DanielKlein-Min50.jpg' },
      ]
    }
  }
}
</script>
