<template>
    <div>
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="300px"
        class="bg-accent text-white shadow-1  "
      >
        <template v-slot:navigation-icon="{ active, btnProps, onClick }">
          <q-btn v-if="active" size="lg" icon="home" color="secondary" flat round dense @click="onClick" />
          <q-btn v-else size="sm" :icon="btnProps.icon" color="white" flat round dense @click="onClick" />
        </template>

        <q-carousel-slide name="style"  img-src="~/assets/football-banner1.jpg"  class="column no-wrap  flex-center">
          <div class="q-mt-md text-center col-3 text-h3">
           Ethiopian Premiere League
          </div>
<!--          <q-icon name="style" size="56px" />-->
<!--          <div class="text-subtitle1">Recent Highlights </div>-->
          <div class="q-mt-md text-center ">
              <div class="text-bold text-h4 text-white" >
                Man-United <span class="text-secondary">3 - 2</span> Arsenal
              </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv"  class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide></q-carousel>
  <div class="row q-gutter-md q-ma-md ">
    <q-card class=" text-secondary col-5 " square>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class=" text-secondary col-6" square>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class=" text-secondary col-7 " square>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    <q-card class=" text-secondary col-3 " square>
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
    </div>

    </div>
</template>

<script>

    export default {
        name: "Sport",

      data () {
        return {
          slide: 'style',
          lorem: 'Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consec Lorem ipsum dolor, sit amet consec Lorem ipsum dolor, sit amet consec consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'
        }
    }
    }
</script>

<style scoped>

</style>
