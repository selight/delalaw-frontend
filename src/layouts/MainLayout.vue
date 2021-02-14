<template>
  <q-layout view="hHh lpR fff" class="q-py-md" >
    <q-header elevated  class="" style="background-image: linear-gradient(135deg, rgb(9, 32, 63) 10%, rgb(83, 120, 149) 100%);">
      <q-toolbar  >
        <q-toolbar-title class="text-h4 ">
          <q-item clickable to="/"  class="text-h4 text-white">ደላላው</q-item>
        </q-toolbar-title>

        <q-btn flat rounded label="Sign in" >

          <!-- <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>New tab</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Recent tabs</q-item-section>
            </q-item>
          </q-list>
          </q-menu> -->
           </q-btn>
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
export default {
  name: "MainLayout",
  components: {},
  data() {
    return {
      leftDrawerOpen: false
    };
  }
};
</script>
