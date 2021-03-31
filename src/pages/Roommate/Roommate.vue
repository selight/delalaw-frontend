<template>
  <div class="col-12 q-mt-xs ">
      <!--    The first title and subtitle-->
    <div class="row justify-center q-my-lg  " v-if="!hidden">
      <div class=" q-mt-md text-h4 text-secondary text-center ">
        Share your room with your own people
      </div>
      <div class=" col-md-8 col-lg-8 col-sm-8 col-xs-12 q-mt-lg text-h6 text-center text-accent  text-weight-light" >
        Easily,Smartly and somethingly</div>


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
    <div v-if="POSTS.length===0" class="col-12">
      <div class="row q-gutter-lg justify-evenly">
      <q-card  v-for="(item,index) in 9" class="col-md-3 col-sm-5 col-xs-12 " :key="index">

        <q-skeleton height="300px" square />

        <q-card-actions align="right" class="q-gutter-md">

          <q-skeleton type="QBtn" />
        </q-card-actions>
      </q-card>
      </div>
      </div>
      <carousel-component  v-on:rent="$router.push('roommate/'+item.id)" :key="index" :rooms="item" class="col-md-3 col-sm-5 col-xs-12 " v-for="(item, index) in POSTS"/>
    </div>
    <div></div>
  </div>
</template>

<script>

  import CarouselComponent from "components/carouselComponent";

  export default {
    name: "Roommate",
    components: {CarouselComponent},
    data() {
      return {
        POSTS:[],

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
      this.$store.dispatch('Roommate/getPostsWithPagination').then(result =>{
        this.POSTS=result;
      })
    }

  }
</script>

<style scoped>

</style>
