<template>
  <q-layout view="hHh lpR fff" class="q-py-md" >
    <q-header elevated  class="" style="background-image: linear-gradient(135deg, rgb(9, 32, 63) 10%, rgb(83, 120, 149) 100%);">
      <q-toolbar  >
        <q-toolbar-title class="text-h4 ">
          <q-item clickable to="/"  class="text-h4 text-white">ደላላው</q-item>
        </q-toolbar-title>
<authentication/>
<!--        <q-btn flat rounded v-if="!isAuth" label="Sign in" to="/login" v-on:click="dialog=true" >-->
<!--           </q-btn>-->
<!--        <q-btn flat rounded v-if="isAuth" icon="person"  >-->

<!-- <q-menu>-->
<!--          <q-list style="min-width: 100px">-->
<!--            <q-item clickable v-close-popup>-->
<!--              <q-item-section>New tab</q-item-section>-->
<!--            </q-item>-->
<!--            <q-separator />-->
<!--            <q-item clickable v-close-popup v-on:click="logOut()">-->
<!--              <q-item-section>Log out</q-item-section>-->
<!--            </q-item>-->
<!--          </q-list>-->
<!--          </q-menu>-->
<!--        </q-btn>-->

<!--        <q-dialog v-model="dialog">-->
<!--          <register-component v-on:loginClicked="register=false" v-on:LoggedIn="dialog=false" v-if="register"/>-->
<!--          <login-component v-on:registerClicked="register=true" v-on:registered="dialog=false" v-if="!register"/>-->
<!--        </q-dialog>-->
      </q-toolbar>
    </q-header>
    <q-page-container class="row">
      <router-view />
    </q-page-container>
    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>

        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import LoginComponent from "components/loginComponent";
import RegisterComponent from "components/registerComponent";
import {mapGetters} from 'vuex';
import {mapActions} from 'vuex';
import Authentication from "components/Authentication";
export default {
  name: "MainLayout",
  components: {Authentication},
  data() {
    return {
      leftDrawerOpen: false,
      dialog:false,
      register:false
    };
  },
  computed:{
    ...mapGetters({
      isAuth:'Auth/isAuth'
    })
  },
  methods:{
    ...mapActions({
      logoutUser:"Auth/logoutUser",
    }),
    async logOut(){
      await this.logoutUser()
    }
  }
};
</script>
