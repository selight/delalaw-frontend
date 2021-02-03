<template>
    <q-layout view="hHh LpR fff" class="q-py-md">
      <q-header class="" style="background-image: linear-gradient(135deg, rgb(9, 32, 63) 10%, rgb(83, 120, 149) 100%);">
        <q-toolbar >
          <q-btn dense flat icon="menu" @click="left = !left" > <div class="q-ml-sm">Services</div></q-btn>
          <q-space/>
          <q-btn flat class="no-padding no-margin" dense to="/"><div class="text-h4 no-margin">ደላላው</div></q-btn>
          <div class="text-h6 q-pt-md text-secondary">Roommate</div>
          <q-space/>
          <q-btn flat>Sign in</q-btn>
        </q-toolbar>
      </q-header>
      <q-drawer  v-model="left" :width="200" side="left"  >
        <q-scroll-area class="fit">
        <q-list padding class="menu-list text-secondary">
          <q-item active clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Roommate
            </q-item-section>
          </q-item>

          <q-item  clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="sports_soccer"  />
            </q-item-section>
            <q-item-section>
              Sport
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="construction" />
            </q-item-section>

            <q-item-section>
              Handy man
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="contact_page" />
            </q-item-section>

            <q-item-section>
              Entewawek
            </q-item-section>
          </q-item>
        </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container class="row" >
        <router-view />
      </q-page-container>

      <q-footer class="bg-grey-8">
<q-toolbar>

</q-toolbar>
      </q-footer>
    </q-layout>
</template>

<script>
    export default {
        name: "pageLayout",
      data() {
        return {
          left:false,
        }}
    }
</script>

<style lang="sass" scoped>
  .menu-list .q-item
    border-radius: 0 32px 32px 0
</style>
