<template>
  <q-card style="min-width: 500px">
  <q-form class="q-ma-md q-gutter-md">
    <q-btn class="text-white  bg-primary"><q-icon color="white" name=""></q-icon>Sign in with Google</q-btn>
    <q-btn class="text-white  bg-primary"><q-icon color="white" name=""></q-icon>Sign in with Facebook</q-btn>

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
  import {mapActions} from 'vuex'
    export default {
        name: "loginComponent",
      data() {
        return {
          user:{
            username: "sila",
            password: "123456"
          }
        }},
      methods:{
          ...mapActions({
            loginUser:"Auth/loginUser",
          }),
        async loginUsers(){
          this.$emit('LoggedIn')
            await  this.loginUser(this.user);

        }

      }
    }
</script>

<style scoped>

</style>
