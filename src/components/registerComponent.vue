<template>
  <q-card style="min-width: 500px">

    <q-form class="q-ma-md q-gutter-md">
      <social-component></social-component>
            <q-separator/>
      <q-input filled v-model="user.firstName" label="First name" lazy-rules />
      <q-input filled v-model="user.lastName" label="Last name" lazy-rules />
      <q-input filled v-model="user.email" label="Email" lazy-rules />
      <q-input filled v-model="user.phoneNumber"  label="Phone number" lazy-rules />

      <q-input
        type="password"
        filled
        v-model="user.password"
        label="Password"
        lazy-rules
      />
      <div id="no-freeze-spinner">
        <div>
          <i class="material-icons">
            account_circle
          </i>
          <i class="material-icons">
            home
          </i>
          <i class="material-icons">
            work
          </i>
          <div>
          </div>
        </div>
      </div>
      <div id="recaptcha-container"></div>
      <div class="row q-gutter-md">
        <q-btn
          label="Register"
          id="sign-in-button"
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
    import "src/css/spinner.scss";
import {mapActions} from 'vuex';
    import SocialComponent from "components/socialComponent";
    export default {
        name: "registerComponent",
      components: {SocialComponent},
      data() {
        return {
          user:{
            password: "123456",
            firstName: "sila",
            lastName: "hitech",
            email: "silaHItech@tech.com",
            phoneNumber:"+16505553434",
            phoneVerified:false
          },
          appVerifier : '',
          username:'',
          password:'',
          loading:''
        }},
      methods:{
          ...mapActions ({
            registerUser:'Auth/registerUser',
            sendOtp:'Auth/sendOtp'
    }),
       async register(){
          this.loading= true;
          await this.registerUser(this.user).then(async (user) =>{
            console.log("from register",user)
            this.loading=false;
            // await this.sendOtp(user);
            if(user!==undefined) {
              await this.$router.push('/')
            }
          })
          },

      },
      async created(){
         await this.$store.dispatch('Auth/initReCaptcha');
      }

    }
</script>

<style scoped>

</style>
