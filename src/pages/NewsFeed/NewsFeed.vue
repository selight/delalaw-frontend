<template>
    <div class="col-12" >

      <div class="row justify-between q-ma-md q-gutter-md">
      <div class="col-12 text-h6 ">Recent posts</div>
        <div class=" col-lg-8 col-md-8 col-xs-12 col-sm-12 ">
          <div class="row q-gutter-md ">
<thumbnail-component :key="index" v-for="(item, index) in 9" class=" col-12 " ></thumbnail-component>
        </div></div>

        <q-card  class="col-lg-3 col-md-3 col-xs-12 col-sm-12 ">
          <q-card-section class="row ">

            <div class="text-h5  q-mb-xs">Featured news</div>
           <q-card class="col-12 " flat :key="index" v-for="(item, index) in 9">
             <q-card-section>
               <q-img
                 src="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/C44C/production/_116825205_chelsea_goal.jpg"
               />
               <div class="text-caption text-weight-light ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                 labore et dolore magna aliqua.
               </div>
             </q-card-section>
             <q-separator  />
           </q-card>
          </q-card-section>
        </q-card>
    </div></div>
</template>

<script>
    import ThumbnailComponent from "components/thumbnailComponent";
    export default {
        name: "Newsfeed",
      components: { ThumbnailComponent}
    }
</script>

<style scoped>

</style>
