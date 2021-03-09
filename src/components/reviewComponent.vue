<template>
  <div class="row">

  <q-card v-for="index in reviews" :key="reviews[index]" :class="classMethod(index.hidden)" >
    <q-card-section  horizontal class="row  " >
      <q-card-section>
        <div class="">

          <q-avatar size="150px"  class="bg-white  q-ma-xs text-center">
            <q-img contain src="~/assets/woman.jpg"/>
          </q-avatar>
        </div>
      </q-card-section>

      <q-card-section class="col-7 self-center" >
        <div >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
        </div>
      </q-card-section>
    </q-card-section>

   </q-card>

  </div>
</template>

<script>
    export default {
        name: "reviewComponent",
      props:{
          reviews:Array
      },
      methods:{
        classMethod(reviews){
          if(reviews){

            return 'col-12 text-secondary offset-12 flat bordered'
          }
          else {

            return 'col-12 text-primary flat bordered'
          }
        }
      }
    }
</script>

<style scoped>

</style>
