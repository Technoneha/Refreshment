<template>
  <q-page class="q-pa-sm" >
<div>
  <Item-Sale></Item-Sale>
  <carousel-section></carousel-section>
  <Purchase-Offer></Purchase-Offer>
<Banner></Banner>


</div>


  </q-page>
</template>


<script>


import CarouselSection from 'components/ajio/section/corousel.vue'
import ItemSale from 'src/components/ajio/itemSale.vue';
import PurchaseOffer from 'src/components/ajio/Purchase-offer.vue';
import Banner from 'src/components/ajio/banner.vue';

export default {
   components: { CarouselSection, ItemSale, PurchaseOffer, Banner },
   // rest of the component's code
}



</script>
