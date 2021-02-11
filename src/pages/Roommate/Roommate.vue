<template>
  <div class="col-12 q-mt-xs ">
    <div class="row justify-evenly q-mt-lg  " v-if="!hidden">
      <div class=" q-mt-lg text-h4 text-secondary ">
        Share your room with your own people
      </div>
      <div class=" col-8 q-mt-lg text-h6 text-center text-accent text-weight-light" >
        The QSkeleton is a component for displaying a placeholder preview of your content
        before you load the actual page data.</div>
<!--      <card-component class="col-5"/>-->
<!--      <card-component class="col-5" v-bind:hidden="true"/>-->

    </div>

    <div class="row  " :class="red">

    <q-input  :class="col" :dense="hidden" outlined v-model="text" label="Where do you want to live">
      <template v-slot:append>
        <q-btn icon="search" v-on:click="hidden=true , red='justify-start q-ma-sm', col='col-8 '" flat round color="secondary" />
      </template>
    </q-input></div>
    <q-separator v-if="hidden"/>
    <div class="row q-ma-md justify-evenly " v-if="!hidden" >
      <card-component  src="keyboard.svg" class="col-2" note="Type in your location" v-bind:hidden="true"> </card-component>
    <card-component src="Rent.svg" class="col-2 q-mt-sm" note="Click on the rent button" v-bind:hidden="true"/>
    <card-component src="communicate.svg" class="col-2" note="Communicate with the owner" v-bind:hidden="true"/>
<!--      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3231.2068720612087!2d-78.45236865!3d35.917436083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac4fb5f20dd3c3%3A0x6e08b61d485085cc!2sNew%20Bethel%20Baptist%20Church!5e0!3m2!1sen!2set!4v1612381357884!5m2!1sen!2set" width="500" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>-->
    </div>
    <div class="row q-mb-lg q-mx-md q-mt-md justify-between q-gutter-md" v-if="hidden">
      <q-select dense :options="options" class="col-2" label="Bedrooms" outlined label-color="accent" v-model="model"/>
      <q-btn dense stack  @click="dialog=true"  class="col-2" outline rounded>
<!--        <div  class="column ">-->
<!--       <div class="text-grey">Budget</div>-->
       <div><span class="text-accent">Budget:</span>  {{standard.min}} - {{standard.max}} $</div>
<!--    </div>-->
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


      <q-select label-color="accent" dense :options="options2"  class="col-2" label="Nationality" outlined v-model="nationality"/>
      <q-select label-color="accent" dense :options="options2" class="col-1" label="Gender" outlined v-model="nationality"/>
      <q-btn dense stack  @click="dialog=true"  class="col-1" outline rounded>
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
    components: {CarouselComponent, CardComponent},
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
        col:"col-10",
      }
    }
  }
</script>

<style scoped>

</style>
