<template>
  <div class=" fullscreen flex flex-center bg-black  " >
  <q-card class="q-pa-md">
    <div id="recaptcha-container"></div>
    <q-stepper
      v-model="step"
      color="primary"
      animated
    >
      <q-step
        :name="1"
        title="Verify your phone number"
        icon="settings"
        :done="step > 1"
      >
        <div class="row">
          <q-input v-model="verifyNumber" type="number" label="Verification number" class="col-6 q-mb-md"> </q-input>
          <div class="col-12">

          <q-btn v-on:click="resendNumber" class="">Resend number</q-btn></div>
        </div>
        <q-stepper-navigation>
          <div class="row justify-end">
          <q-btn  @click="verifyOtp" color="primary" label="Continue" />
          </div>
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Verify your email"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
        An ad group contains one or more ads which target a shared set of keywords.

        <q-stepper-navigation>
          <q-btn @click="step = 3" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
      <q-step
        :name="3"
        title="Create an ad"
        icon="add_comment"
      >
        Try out different ad text to see what brings in the most customers, and learn how to
        enhance your ads using features like ad extensions. If you run into any problems with
        your ads, find out how to tell if they're running and how to resolve approval issues.
        <q-stepper-navigation>
          <q-btn color="primary" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </q-card>
  </div>
</template>

<script>
  import firebase from 'firebase'
    export default {
        name: "verifyAccountComponent",
      data() {
        return {
          step:1,
          verifyNumber:null,
          // otp:''
        }
        },
      methods:{
        verifyOtp(){
          if( this.verifyNumber === 6){
            console.log(this.verifyNumber)
           this.$q.notify("Incorrects verification number")
          }else{
            let vm=this;
            let code = this.verifyNumber;
            window.confirmationResult.confirm(code).then(function (result) {
              vm.step=2;
              // User signed in successfully.

              let user = result.user;
              // ...
              //route to set password !

            }).catch(function (error) {
              vm.$q.notify(error);
              // User couldn't sign in (bad verification code?)
              // ...
            });
          }
        },
        resendNumber(){
          console.log(this.$store.getters["Auth/user"].phonenumber)
          // this.$store.dispatch("Auth/sendOtp",this.$store.getters["Auth/user"].phonenumber);
        }
      },
      async created(){
        await this.$store.dispatch('Auth/initReCaptcha');
      }
    }
</script>

<style scoped>

</style>
