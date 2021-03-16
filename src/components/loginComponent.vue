<template>
  <q-card style="min-width: 500px">
  <q-form class="q-ma-md q-gutter-md">
  <social-component></social-component>
    <q-separator/>
    <q-input filled v-model="user.username" label="Username" lazy-rules />

    <q-input
      type="password"
      filled
      v-model="user.password"
      label="Password"
      lazy-rules
    />

    <div class="row q-gutter-md">
      <q-btn
        label="Login"
        type="button"
        color="primary"
        v-on:click="loginUsers"
      />

      <q-btn
        flat
        v-on:click="$emit('registerClicked')"
        label="Register"
        type="button"
        color="primary"
      />
    </div>
  </q-form>
  </q-card>
</template>

<script>
  import {mapActions} from 'vuex';
  import GoogleSignInButton from 'vue-google-signin-button-directive';
  import socialComponent from "components/socialComponent";
    export default {
        name: "loginComponent",
      components: {socialComponent},
      data() {
        return {
          user:{
            username: "sila",
            password: "123456"
          },
          clientId:'358091240854-s6hnkvsr5ev4gopfu527p2c6ooletuue.apps.googleusercontent.com'
        }},
      methods: {
        // ...mapActions({
        //   loginUser: "Auth/loginUser",
        // }),
        async loginUsers() {
let vm=this;
          await this.$store.dispatch('Auth/loginUser',this.user).then(()=>{
vm.$emit('LoggedIn')
            vm.$q.notify({
              position:'center',
              message:'You have successfully logged in',
              color:'positive',
            })
          });


        },
      }
    }
</script>

<style scoped>

</style>
