<template>
  <div class="col-12 q-pa-sm">
    <div class="row justify-center">
<!--      first section-->
      <q-img alt="Delalaw logo"
             class="col-12 q-mb-lg "
             contain
             src="~assets/delalawl1.jpg"
             style="max-width: 500px; height:250px;"
      />
      <!-- The question -->
      <div class="col-12 text-center" style="text-align:center;">
        <div class="q-ml-lg text-secondary text-h2 desktop-only mobile-hide">What are you looking for?</div>
        <div class="text-secondary text-h3 desktop-hide">What are you looking for?</div>
      </div>
      <!-- Main buttons -->
      <div class="col-12 " >
        <div class="row q-gutter-lg justify-evenly text-white  q-mt-md"  >
          <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
          <q-btn color="primary" flat rounded  to="/roommate">
            <q-img src="~assets/office.svg" style="max-width: 80px" ></q-img>
            <span class="q-mt-sm">roommate}}</span>
          </q-btn></div>
             <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
         <q-btn color="primary" flat rounded to="/newsfeed" >
            <q-img src="~assets/football.svg" style="max-width: 80px"></q-img>
           <span class="q-mt-sm">newsFeed}}</span>
          </q-btn></div>
             <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style=" text-align:center;">
          <q-btn v-on:click="localStorage.setItem('hey','hyh')" color="primary" flat rounded to="/handyman">
            <q-img src="~assets/wrench.svg" style="max-width: 80px"></q-img>

            <span class="q-mt-sm">handyman</span>
          </q-btn></div>
             <div  class=" col-md-auto col-lg-auto col-sm-4 col-xs-4" style="text-align:center;">
          <q-btn color="primary"   flat rounded to="/enetewawek">
            <q-img src="~assets/dating1.svg" style="max-width: 80px" ></q-img>
            <span class="q-mt-sm ">Enetewawek</span>
          </q-btn></div>

        </div>
      </div>
        <!-- Roommate -->
<!--      <div class="col-12 q-my-md q-pb-md ">-->
<!--        <div class="row q-gutter-md q-ma-lg-md q-ma-md-md justify-start">-->
          <div class="text-h2 text-secondary q-ma-md col-12">Roommate</div>
          <div class="col-12">
            <div class="row q-gutter-md  justify-evenly">
              <carousel-component class="col-md-3 col-sm-5 col-xs-12 " v-on:rent="this.$router.push('roommate/'+item.id)" :key="index" :rooms="item" v-for="(item, index) in POSTS"/>
              <q-btn class="q-ml-lg text-primary" to="/roommate" icon="arrow_forward_ios" rounded size="lg">See more</q-btn>
            </div>
          </div>
            <!--NewsFeed-->
          <div class="text-h2 text-secondary q-ma-md col-12">NewsFeed</div>
          <div class="col-12">
            <div class="row q-gutter-md justify-evenly">
              <carousel-component :key="index" class="col-md-3 col-sm-5 col-xs-12 " v-bind:hidden="true"
                                  v-for="(item, index) in 3"></carousel-component>
              <q-btn class="q-ml-lg text-primary" icon="arrow_forward_ios" to="/newsfeed" rounded size="lg">See more</q-btn>
            </div>
          </div>
<!--        </div>-->
<!--      </div>-->

      <!-- Handyman -->
      <div class="col-12 ">
        <div class="row q-gutter-md  justify-evenly">
          <div class="text-h2  text-secondary col-12">Handyman</div>

          <q-btn :class="btnStyle" :key="index" @mouseleave="btnStyle=btnStyle1" @mouseover="btnStyle=btnStyle2"
                 color="primary" flat rounded style="border:solid;  min-height:200px"
                 v-for="(item, index) in 4"
          >

            <span>Electrician</span>
          </q-btn>
          <q-btn class="q-ml-lg text-primary" to="/handyman" icon="arrow_forward_ios" rounded size="lg">See more</q-btn>
        </div>
      </div>

      <!-- Enetewawek -->
<!--      <div class="col-12 q-my-md q-pb-md ">-->
<!--        <div class="row q-gutter-md q-ma-md justify-start">-->
          <div class="text-h2 q-ma-md text-secondary col-12">Enetewawek</div>
          <div class="col-12">
            <div class="row q-gutter-md justify-evenly">
              <avatar-component :key="index" class="col-md-2 col-sm-5 col-xs-5 "
                                              v-for="(item, index) in 4"/>
              <q-btn class="q-ml-lg text-primary" icon="arrow_forward_ios" to="/enetewawek" rounded size="lg">See more</q-btn>
            </div>
          </div>
        </div>
      </div>
<!--    </div>-->
<!--  </div>-->
</template>

<script>
  import CarouselComponent from "../components/carouselComponent.vue";
  import AvatarComponent from "components/avatarComponent";
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
        POSTS:[],
        // localeOptions: [
        //   { value: 'en-US', label: 'English' },
        //   { value: 'am-ET', label: 'Amharic' }
        // ]
      };
    },
    created() {
      this.$store.dispatch('Roommate/getPostsWithPagination',3).then(result =>{

        this.POSTS=result;

      })
    }
  };
</script>
<style>

</style>
