<template>
  <div class="row q-gutter-sm">
  <q-btn v-close-popup class="text-white bg-primary">
    <q-avatar class="q-mx-sm" size="30px"><q-img  src="~assets/google-g-2015.svg"/>
    </q-avatar>
    <div v-on:click="getGoogleAuthLink">Sign in with Google</div>
  </q-btn>
  <q-btn class="text-white  bg-primary" v-close-popup @click="logInWithFacebook">
    <q-avatar class="q-mx-sm" size="30px"><q-img  src="~assets/facebook-3.svg"/></q-avatar>
    <div>Sign in with Facebook</div></q-btn>
  </div>
</template>

<script>
    export default {
        name: "socialComponent",
      data() {
        return {
          clientId:'358091240854-s6hnkvsr5ev4gopfu527p2c6ooletuue.apps.googleusercontent.com'
        }},
      methods:{
        async getGoogleAuthLink(){
          await this.$store.dispatch('Auth/getGoogleAuthLink').then((link)=>{
            window.open(link)
          });
        },
        async logInWithFacebook() {
          await this.initFacebook();
          window.FB.login(function(response) {
            if (response.authResponse) {
              console.log(response);
              // Now you can redirect the user or do an AJAX request to
              // a PHP script that grabs the signed request from the cookie.
            } else {
              alert("User cancelled login or did not fully authorize.");
            }
          });
          return false;
        },
        async initFacebook() {
          window.fbAsyncInit = function() {
            FB.init({
              appId      : '230520612105164',
              cookie     : true,
              xfbml      : true,
              version    : 'v10.0'
            });

            FB.AppEvents.logPageView();

          };

          (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk'));
        }
      }

    }
</script>

<style scoped>

</style>
