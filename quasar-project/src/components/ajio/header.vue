<template>
  <q-toolbar class="inset-shadow-down bg-white text-black row justify-between " >
    <div class="q-ml-xl">
      <q-img width="130px" src="https://assets.ajio.com/static/img/Ajio-Logo.svg"></q-img>

    </div>
    <div class="row q-pt-xl " font="text-weight-light">
      <div>
        <q-btn flat label="MEN" class="text-black" ></q-btn>
      </div>

      <div>
        <q-btn flat label="WOMEN" class="text-black"></q-btn>
      </div>



      <div>
        <q-btn flat label="KIDS" class="text-black"></q-btn>
      </div>



      <div>
        <q-btn flat label="INDIE" class="text-black"></q-btn>
      </div>

      <div>
        <q-btn flat label="HOME AND KITCHEN" class="text-black"></q-btn>
      </div>
    </div>

      <div class="row justify-center">
        <div class="column">
          <div class="row items-center q-pt-xm">

          <div>
            <q-btn flat label="Sign in/Join Ajio" class="text-black"></q-btn>
          </div>

          <div>
            <q-btn flat label="Customer Care" class="text-black"></q-btn>
          </div>
          <div>
            <q-btn  bg-dark label="Visit AjioLUXE" color="black"></q-btn>
          </div>
        </div>


          <div class="q-mb-xm">
            <q-input rounded standout dense bg-color="amber-1" placeholder=" Search AJIO"
              style="min-width:0" class="text-black"></q-input>
          </div>
        </div>
        </div>

        <div class="row item-center q-mr-xl">

        <div>
          <q-img width="40px" src="https://assets.ajio.com/static/img/wishlistIcon.svg"></q-img>
        </div>

        <div class="row item-center q-mr-auto">
          <q-btn icon="shopping_cart" color="dark" flat></q-btn>

        </div>

        </div>

      </q-toolbar>


</template>
<script>

export default {
}
</script>
