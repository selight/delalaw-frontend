<template>
    <q-card    flat>
      <div :hidden="!hidden">
      <q-img  :src="require(`../assets/${src}`)" contain style="max-height: 200px">

      </q-img></div>
      <q-card-section :hidden="hidden" >
        <div class="text-h4 text-secondary">
          Share your room with people
        </div>
        <div class="q-mt-lg">
          The QSkeleton is a component for displaying a placeholder preview of your content
          before you load the actual page data.
          It’s a nice way of informing the user of what to expect from the page before
          it is fully loaded and increases the perceived performance.
        </div>
      </q-card-section>
      <div :hidden="hidden">
      <q-card-actions   >
        <q-btn  rounded class="q-pa-sm">List your room</q-btn>
        <q-btn  rounded class="q-pa-sm">Find your dream home</q-btn>
      </q-card-actions>
      </div>
    </q-card>
</template>

<script>
    export default {
        name: "cardComponent",
      props:{
        hidden: {
          type: Boolean,
          default:false
        },
        src:{
          type:String,
          default: "Rent.svg"
        }
      },
      methods: {

        },
    }
</script>

<style scoped>

</style>
