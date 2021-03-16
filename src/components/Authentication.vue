<template>
  <div>
  <q-btn flat rounded v-if="!isAuth" label="Sign in"  to="/signIn"  >

  </q-btn>
  <q-btn flat rounded v-if="isAuth" icon="person"  >

    <q-menu>
      <q-list style="min-width: 100px">
        <q-item clickable v-close-popup>
          <q-item-section>New tab</q-item-section>
        </q-item>
        <q-separator />
        <q-item clickable v-close-popup v-on:click="logOut()">
          <q-item-section>Log out</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>


  </div>
</template>

<script>
    import {mapActions, mapGetters} from "vuex";
    import AuthDialog from "components/AuthDialog";

    export default {
        name: "Authentication",
      components: {},
      data() {
        return {
          dialog:false,
          register:false
        };
      },
      computed:{
        ...mapGetters({
          isAuth:'Auth/isAuth',

        }),


      },
      methods:{
        ...mapActions({
          logoutUser:"Auth/logoutUser",

        }),
        async logOut(){
          await this.logoutUser()
        },

      }
    }
</script>

<style scoped>

</style>
