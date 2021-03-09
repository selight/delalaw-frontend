<template>
  <div class="col-12">
  <div class="row">
    <div class="col-12 q-mb-md">
    <post-component v-bind:hidden="true" :handymanModel="model" v-bind:forRoommate=false :step-header="header" />
    </div>
    <review-component class="col-6"  :reviews=reviews />
  </div>
  </div>
</template>

<script>
    import PostComponent from "components/postComponent";
    import ReviewComponent from "components/reviewComponent";
    export default {
        name: "Register",
      components: {ReviewComponent, PostComponent},
      data(){
          return{
            header:{title1:"Tell us a bit about yourself",title2:"Please upload some images",
              title3:"Tell us the roommate you prefer"},
            reviews:[
              {review:'heyyy',hidden:false},
              {review:'heyy',hidden:true},
              {review:'heyyy',hidden:false},
              {review:'heyy',hidden:true},
            ],
            model:null
        }
      }
    }
</script>

<style scoped>

</style>
