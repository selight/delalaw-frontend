<template>
    <q-layout view="hHh LpR fff" class="">
      <q-header  elevated style="background-image: linear-gradient(135deg, rgb(9, 32, 63) 10%, rgb(83, 120, 149) 100%);">
        <q-toolbar>
          <q-btn dense flat icon="menu" @click="left = !left" > <div class="q-ml-sm">Services</div></q-btn>
          <q-space/>
          <q-btn flat class="no-padding no-margin" dense to="/"><div class="text-h4 no-margin">ደላላው</div></q-btn>
          <div class="text-h6 q-pt-md text-info">{{$route.path.split('/')[1].toUpperCase()}}</div>
          <q-space/>
          <q-btn class="bg-secondary" v-if="$route.path.split('/')[1]==='roommate'">List your room</q-btn>
          <q-btn flat>Sign in</q-btn>
        </q-toolbar>
        <div class="col-12 text-white justify-start q-gutter-md bg-accent   no-margin" style="" v-if="$route.path.split('/')[1]==='newsfeed'" >

          <q-btn flat to="/newsfeed/"> Recent</q-btn><q-btn flat to="/newsfeed/sport"> Sport</q-btn>
          <q-btn flat > Entertainment</q-btn><q-btn flat> Personal stories </q-btn>
          <q-btn flat> Other</q-btn>

        </div>
      </q-header>

      <q-drawer elevated v-model="left" :width="200" side="left"  >
        <q-scroll-area class="fit">
        <q-list padding class="menu-list text-secondary">
          <q-item  clickable v-ripple to="/roommate" v-on:click="left=false">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Roommate
            </q-item-section>
          </q-item>

          <q-item  clickable v-ripple to="/newsfeed" v-on:click="left=false">
            <q-item-section avatar>
              <q-icon name="sports_soccer"  />
            </q-item-section>
            <q-item-section>
              News Feed
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/handyman" v-on:click="left=false">
            <q-item-section avatar>
              <q-icon name="construction" />
            </q-item-section>

            <q-item-section>
              Handy man
            </q-item-section>
          </q-item>

          <q-item clickable v-ripple to="/entewawek" v-on:click="left=false">
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
