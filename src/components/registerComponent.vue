<template>
  <q-card style="min-width: 500px">

    <q-form class="q-ma-md q-gutter-md">
      <social-component></social-component>
            <q-separator/>
      <q-input filled v-model="user.username" label="Username" lazy-rules />
      <q-input filled v-model="user.firstName" label="First name" lazy-rules />
      <q-input filled v-model="user.lastName" label="Last name" lazy-rules />
      <q-input filled v-model="user.email" label="Email" lazy-rules />
      <q-input filled v-model="user.phonenumber"  label="Phone number" lazy-rules />

      <q-input
        type="password"
        filled
        v-model="user.password"
        label="Password"
        lazy-rules
      />

      <div class="row q-gutter-md">
        <q-btn
          label="Register"
          type="button"
          color="primary"
          v-on:click="register"
        />


        <q-btn
          flat
          v-on:click="$emit('loginClicked')"
          label="Login"
          type="button"
          color="primary"
        />
      </div>
    </q-form>
  </q-card>
</template>

<script>
    import {registerUser} from "src/store/Auth/actions";
import {mapActions} from 'vuex';
    import SocialComponent from "components/socialComponent";
    import firebase from "firebase";
    export default {
        name: "registerComponent",
      components: {SocialComponent},
      data() {
        return {
          user:{
            username: "sila",
            password: "123456",
            firstName: "sila",
            lastName: "hitech",
            email: "love@cometome.com",
            phonenumber:"6505553434",
          },
          username:'',
          password:''
        }},
      methods:{
          ...mapActions({
            registerUser:'Auth/registerUser'
    }),
       async register(){
         // this.sendOtp();
          await  this.registerUser(this.user);
          },
        sendOtp(){
            let phoneNumber = this.user.phonenumber
            //
            let appVerifier = this.appVerifier
            //
            firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
              .then(function (confirmationResult) {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                //
                alert('SMS sent')
              }).catch(function (error) {
              // Error; SMS not sent
              // ...
              alert('Error ! SMS not sent')
            });

        },
      }
    }
</script>

<style scoped>

</style>
