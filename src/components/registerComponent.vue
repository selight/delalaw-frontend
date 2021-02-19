<template>
  <q-card style="min-width: 500px">

    <q-form class="q-ma-md q-gutter-md">
      <q-btn class="text-white  bg-primary"><q-icon color="white" name=""></q-icon>Sign in with Google</q-btn>
      <q-btn class="text-white  bg-primary"><q-icon color="white" name=""></q-icon>Sign in with Facebook</q-btn>
      <q-separator/>
      <q-input filled v-model="user.username" label="Username" lazy-rules />
      <q-input filled v-model="user.firstName" label="First name" lazy-rules />
      <q-input filled v-model="user.lastName" label="Last name" lazy-rules />
      <q-input filled v-model="user.email" label="Email" lazy-rules />

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
    export default {
        name: "registerComponent",
      data() {
        return {
          user:{
            username: "sila",
            password: "123456",
            firstName: "sila",
            lastName: "hitech",
            email: "silaHiTech@gmail.com"
          },
          username:'',
          password:''
        }},
      methods:{
          ...mapActions({
            registerUser:'Auth/registerUser'
    }),
        register(){
          this.registerUser(this.user);
          this.$emit('registered')
          }
      }
    }
</script>

<style scoped>

</style>
