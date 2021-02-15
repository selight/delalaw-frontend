<template>
  <div class="col-12 q-mt-xs ">
      <!--    The first title and subtitle-->
    <div class="row justify-center q-my-lg  " v-if="!hidden">
      <div class=" q-mt-md text-h4 text-secondary text-center ">
        Share your room with your own people
      </div>
      <div class=" col-md-8 col-lg-8 col-sm-8 col-xs-12 q-mt-lg text-h6 text-center text-accent  text-weight-light" >
        Easily,Smartly and somethingly</div>
<!--      <card-component class="col-5"/>-->
<!--      <card-component class="col-5" v-bind:hidden="true"/>-->

    </div>

    <div class="row" :class="red">

    <q-input  :class="col" :dense="hidden" outlined v-model="text" autofocus label="Where do you want to live">
      <template v-slot:append>
        <q-btn icon="search" v-on:click="hidden=true , red='justify-start q-ma-sm', col='col-md-8 col-lg-8 col-xs-12 '" flat round color="secondary" />
      </template>
    </q-input></div>
    <q-separator v-if="hidden"/>
      <!--    Top cities on the first page-->
    <div class="row q-ma-md justify-center  q-mt-lg" v-if="!hidden" >
      <div class="text-h4 col-12 text-secondary">Top Cities</div>
  <q-img v-on:click="hidden=true, red='justify-start q-ma-sm', col='col-md-8 col-lg-8 col-xs-12 '" :key="index" v-for="(key,index) in 6" src="~assets/road.jpg"  class="col-lg-4 col-md-4 col-sm-6 col-xs-6 " style="border: solid white 1px">
        <div class="absolute-full text-h6 flex flex-center">
          Las Vegas
        </div>
      </q-img>

<!--      <card-component  src="keyboard.svg" class="col-2" note="Type in your location" v-bind:hidden="true"> </card-component>-->
<!--    <card-component src="Rent.svg" class="col-2 q-mt-sm" note="Click on the rent button" v-bind:hidden="true"/>-->
<!--    <card-component src="communicate.svg" class="col-2" note="Communicate with the owner" v-bind:hidden="true"/>-->
<!--      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3231.2068720612087!2d-78.45236865!3d35.917436083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac4fb5f20dd3c3%3A0x6e08b61d485085cc!2sNew%20Bethel%20Baptist%20Church!5e0!3m2!1sen!2set!4v1612381357884!5m2!1sen!2set" width="500" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>-->
    </div>

        <!--    filters-->
    <div class="row q-mb-lg q-mx-md q-mt-md justify-between q-gutter-sm " v-if="hidden">
      <q-select dense :options="options" class="col-lg-2 col-md-2 col-sm-3 col-xs-5 text-caption" label="Bedrooms" outlined label-color="accent" v-model="model"/>

      <q-btn dense stack  @click="dialog=true"  class="col-lg-2 col-md-2 col-sm-3 col-xs-5 text-caption" outline rounded>
       <div><span class="text-accent">Budget:</span>  {{standard.min}} - {{standard.max}} $</div>
      </q-btn>
      <q-dialog  v-model="dialog">
        <q-card style="width: 300px" class="q-px-sm q-pb-md">
          <q-item-label header>choose your budget range</q-item-label>
          <q-item-label>{{standard.min}} - {{standard.max}} $</q-item-label>
          <q-item dense>
            <q-item-section avatar>
              <q-icon name="money" />
            </q-item-section>
            <q-item-section>
              <q-range
                v-model="standard"
                :min="0"
                :max="1000"
                :step="10"
                label
                color="primary"
              />
            </q-item-section>
          </q-item>
        </q-card>


      </q-dialog>


      <q-select label-color="accent" dense :options="options2"  class="col-lg-2 col-md-2 col-sm-3 col-xs-5 text-caption" label="Nationality" outlined v-model="nationality"/>
      <q-select label-color="accent" dense :options="options2" class="col-lg-1 col-md-1 col-sm-2 col-xs-4 text-caption" label="Gender" outlined v-model="nationality"/>
      <q-btn dense stack  @click="dialog=true"  class="col-lg-1 col-md-1 col-sm-2 col-xs-4 text-caption" outline rounded>
        <div class="text-caption"><span class="text-accent">Age:</span>  {{standard.min}} - {{standard.max}}</div>
      </q-btn>
    </div>

    <div class="row q-gutter-lg q-mt-lg justify-evenly" v-if="hidden">

      <carousel-component :key="index" class="col-md-3 col-sm-5 col-xs-12 " v-for="(item, index) in 9"/>


    </div>
    <div></div>
  </div>
</template>

<script>
  import CardComponent from "components/cardComponent";
  import CarouselComponent from "components/carouselComponent";

  export default {
    name: "Roommate",
    components: {CarouselComponent},
    data() {
      return {
        model: 'One Bedroom',
        nationality:'Any',
        red:"justify-evenly q-ma-md",
        standard: {
          min: 10,
          max: 1000
        },
        dialog: false,
        options: [
          'Studio', 'One bedroom', 'Two bedroom', 'Three bedroom',
        ],
        options2:[
          'Ethiopian','Any'
        ],
        hidden:false,
        text:'',
        col:"col-xs-12 col-lg-10 col-md-10",
      }
    },
    created() {

        this.$refs.searchField.focus();

    }
  }
</script>

<style scoped>

</style>
