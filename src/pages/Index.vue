<template>
  <q-page>
    <div class="row q-gutter-md flex flex-center">
      <q-img alt="Quasar logo"
             class="col "
             contain
             src="~assets/quasar-logo-full.svg"
             style="max-width: 400px; height:200px;"
      />
      <!-- The question -->
      <div class="col-12 flex flex-center" style="text-align:center;">
        <div class="q-ml-lg text-secondary text-h1 ">What are you looking for?</div>
      </div>
      <!-- Main buttons -->
      <div class="col-12 " style="">
        <div class="row q-gutter-lg justify-evenly text-white  q-mt-md" >
          <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
          <q-btn color="primary" flat rounded  to="/roommate">
            <q-img src="~assets/office.svg"></q-img>
            Roommate
          </q-btn></div>
             <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
         <q-btn color="primary" flat rounded size="">
            <q-img src="~assets/football.svg"></q-img>
            Sport news
          </q-btn></div>
             <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
          <q-btn color="primary" flat rounded >
            <q-img src="~assets/wrench.svg"></q-img>
            Handyman
          </q-btn></div>
             <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
          <q-btn color="primary" flat rounded >
            <q-img src="~assets/dating1.svg"></q-img>
            Enetewawek
          </q-btn></div>

        </div>
      </div>
      <!-- Roommate -->
      <div class="col-12 q-my-md q-pb-md ">
        <div class="row q-gutter-md q-ma-md justify-start">
          <div class="text-h2 text-secondary col-12">Roommate</div>
          <div class="col-12">
            <div class="row q-gutter-md justify-evenly">

              <carousel-component :key="index" class="col-md-3 col-sm-5 col-xs-12 " v-for="(item, index) in 3"/>

              <q-btn class="q-ml-lg text-primary" icon="arrow_forward_ios" rounded size="lg">See more</q-btn>
            </div>
          </div>

        </div>

      </div>
      <!-- Sport News -->
      <div class="col-12 q-my-md q-pb-md ">
        <div class="row q-gutter-md q-ma-md justify-start">
          <div class="text-h2 text-secondary col-12">Sport News</div>
          <div class="col-12">
            <div class="row q-gutter-md justify-evenly">
              <carousel-component :key="index" class="col-md-3 col-sm-5 col-xs-12 " v-bind:hidden="true"
                                  v-for="(item, index) in 3"></carousel-component>
              <q-btn class="q-ml-lg text-primary" icon="arrow_forward_ios" rounded size="lg">See more</q-btn>
            </div>
          </div>
        </div>
      </div>
      <!-- Handyman -->
      <div class="col-12 ">
        <div class="row q-gutter-md q-ma-md justify-evenly">
          <div class="text-h2 text-secondary col-12">Handyman</div>

          <q-btn :class="btnStyle" :key="index" @mouseleave="btnStyle=btnStyle1" @mouseover="btnStyle=btnStyle2"
                 color="primary" flat rounded style="border:solid;  min-height:200px"
                 v-for="(item, index) in 4"
          >

            <span>Electrician</span>
          </q-btn>
          <q-btn class="q-ml-lg text-primary" icon="arrow_forward_ios" rounded size="lg">See more</q-btn>
        </div>
      </div>
      <!-- Enetewawek -->
      <div class="col-12 q-my-md q-pb-md ">
        <div class="row q-gutter-md q-ma-md justify-start">
          <div class="text-h2 text-secondary col-12">Enetewawek</div>
          <div class="col-12">
            <div class="row q-gutter-md justify-evenly">
              <avatar-component :key="index" class="col-md-2 col-sm-5 col-xs-5 "
                                              v-for="(item, index) in 4"/>
              <q-btn class="q-ml-lg text-primary" icon="arrow_forward_ios" rounded size="lg">See more</q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
  import CarouselComponent from "../components/carouselComponent.vue";
  import AvatarComponent from "components/avatarComponent";

  // import CarouselComponent from '../components/carouselComponent.vue'
  export default {
    name: "PageIndex",
    components: {AvatarComponent, CarouselComponent},
    data() {
      return {
        thumbStyle: {
          right: "5px",
          borderRadius: "8px",
          backgroundColor: "#027be3",
          width: "8px",
          opacity: 0.75,
        },
        btnStyle: "col-md-2 col-lg-2 col-sm-3 col-xs-4 bg-accent handyman",
        btnStyle1: "col-md-2 col-lg-2 col-sm-3 col-xs-4 bg-accent handyman",
        btnStyle2: "col-md-2 col-lg-2 col-sm-3 col-xs-4 bg-secondary text-white  handyman",
        barStyle: {
          right: "2px",
          borderRadius: "14px",
          backgroundColor: "#027be3",
          width: "14px",
          opacity: 0.2,
          marginTop: "-3px",
          marginBottom: "-3px",
          paddingTop: "3px",
          paddingBottom: "3px",
        },
      };
    },
  };
</script>
<style>

</style>
