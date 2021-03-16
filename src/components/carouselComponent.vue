<template>
<q-card>
   <q-carousel
      swipeable
      animated
      v-model="slide"
      thumbnails
      infinite
      arrows
      padding
      control-type="push"
      control-color="secondary"
      :hidden="hidden"
    >
      <q-carousel-slide  style="max-height:250px" v-for="(items,index) in rooms.featuredImage" :key="index" :name="index" :img-src="items.image" >
        <q-img contain :src="items.image" placeholder-src="~assets/hut.png"></q-img>
      </q-carousel-slide>
<!--      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />-->
<!--      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />-->
    </q-carousel>

    <q-card-section v-if="hidden===true" class="text-h6">
       Lorem ipsum
    </q-card-section>
 <q-card-section v-if="hidden===true"  >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
         Itaque voluptatem totam, architecto cupiditate officia rerum,
         error dignissimos praesentium libero ab nemo.<br/>
         <q-btn class="bg-primary text-white q-mr-lg">read more</q-btn>
      </q-card-section>
      <q-card-section :hidden="hidden" >
        <div class="row text-secondary justify-between "> <div class="col-6">Addis ababa, Ethiopia</div>
         <q-btn class="col-3 bg-primary text-white" >rent</q-btn></div>
      </q-card-section>
    </q-card>

</template>

<script>
export default {
  name: 'CarouselComponent',
  props: {
    hidden: {
      type: Boolean,
      required: false,
      default:false
    },
    rooms:{
      type:Object,
      default:function () {
          return {featuredImage:[]}
        }
      // required:true,
    },


    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
    data () {
    return {
      slide:1
    }
    }
}
</script>
