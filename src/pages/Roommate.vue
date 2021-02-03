<template>
  <div class="col-12 ">
    <div class="row justify-evenly q-mt-lg  ">
      <card-component class="col-5"/>
      <card-component class="col-5" v-bind:hidden="true"/>

    </div>
    <div style="min-height: 70px"></div>
    <div class="row justify-evenly q-ma-lg">
    <q-input  class="col-10" outlined v-model="text" label="Where do you want to live">
      <template v-slot:append>
        <q-icon name="search" color="secondary" />
      </template>
    </q-input></div>
<!--    <div class="row q-ma-lg justify-evenly">-->
<!--      <card-component class="col-5" v-bind:hidden="true"/>-->
<!--      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3231.2068720612087!2d-78.45236865!3d35.917436083!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac4fb5f20dd3c3%3A0x6e08b61d485085cc!2sNew%20Bethel%20Baptist%20Church!5e0!3m2!1sen!2set!4v1612381357884!5m2!1sen!2set" width="500" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>-->
<!--    </div>-->
    <div class="row q-mb-lg justify-between q-gutter-md">
      <q-select :options="options" class="col-3" label="Bedrooms" outlined v-model="model"/>
      <q-btn  @click="dialog=true" stack class="col-2" outline rounded>
        <div class="column ">
       <div class="text-grey">Budget</div>
       <div> {{standard.min}} - {{standard.max}} $</div></div>
      </q-btn>
      <q-dialog v-model="dialog">
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
<!--              <q-slider color="teal" v-model="model" :step="0" />-->
            </q-item-section>
          </q-item>
        </q-card>


      </q-dialog>


      <q-select :options="options2"  class="col-2" label="Nationality" outlined v-model="nationality"/>
      <q-select :options="options" class="col-3" label="Outlined" outlined v-model="model"/>

    </div>

    <div class="row q-gutter-lg q-mt-lg justify-evenly">

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
        ]
      }
    }
  }
</script>

<style scoped>

</style>
