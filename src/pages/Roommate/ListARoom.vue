<template>
  <div class="col-12">
    <div class="row">
      <div class="col-12 q-mb-md">
<post-component v-bind:forRoommate=true ></post-component>
      </div>
  <review-component class="col-6"  :reviews=reviews  >
  </review-component>


    </div>
  </div>
</template>

<script>
    import PostComponent from "components/postComponent";
    import ReviewComponent from "components/reviewComponent";
    export default {
        name: "ListARoom",
      components: {ReviewComponent, PostComponent},
      data(){
          return{
            reviews:[
              {review:'heyyy',hidden:false},
              {review:'heyy',hidden:true},
              {review:'heyyy',hidden:false},
              {review:'heyy',hidden:true},
            ]
          }
      },
      methods:{

      }

    }
</script>

<style scoped>

</style>
