<template>
<div class=" fullscreen flex flex-center bg-black  " >

  <q-card >
    <register-component v-on:loginClicked="register=false"  v-if="register"/>
    <login-component v-on:registerClicked="register=true"  v-if="!register"/>
  </q-card>

</div>
</template>

<script>
    import RegisterComponent from "components/registerComponent";
    import LoginComponent from "components/loginComponent";
import {mapActions,mapGetters} from 'vuex';
    export default {
        name: "AuthDialog",
      components: {RegisterComponent, LoginComponent},
      data() {
        return {
          register:false,

        };
      },





    }
</script>

<style scoped>

</style>
