<script src="../../../../../Compressed/delalaw-master2/delalaw-master/src/index.js"></script>
<template>
    <q-layout view="hHh LpR fff" class="">
      <q-header  elevated style="background-image: linear-gradient(135deg, rgb(9, 32, 63) 10%, rgb(83, 120, 149) 100%);">
        <q-toolbar>
          <q-btn dense flat icon="menu" @click="left = !left" > <div class="q-ml-sm mobile-hide">Services</div></q-btn>
          <q-space/>
          <q-btn flat class="no-padding no-margin" dense to="/"><div class="text-h4 no-margin">ደላላው</div></q-btn>
          <div class="text-h6 q-pt-md text-info">{{$route.path.split('/')[1].toUpperCase()}}</div>
          <q-space/>
          <q-btn dense class="bg-secondary mobile-hide" v-if="$route.path.split('/')[1]==='roommate'">List your room</q-btn>
          <q-btn flat class="mobile-hide">Sign in</q-btn>
        </q-toolbar>
        <div class="col-12 text-white justify-start q-gutter-md bg-accent   no-margin" style="" v-if="$route.path.split('/')[1]==='newsfeed'" >
<div class="row justify-evenly">
          <q-btn flat to="/newsfeed/" class="col-2">Recent</q-btn>
  <q-btn flat to="/newsfeed/sport" class="col-2" >Sport</q-btn>
          <q-btn flat class="col-3" >Entertainment</q-btn>
  <q-btn flat class="mobile-hide" >Personal stories </q-btn>
          <q-btn flat class="mobile-hide"> Other</q-btn>
  <q-btn flat class="desktop-hide" icon="more_horiz" >
          <q-menu >
            <q-list>
              <q-item clickable v-close-popup>
                <q-item-section>Personal Stories</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>Other</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
            </q-btn>
</div>
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

          <q-item clickable v-ripple to="/enetewawek" v-on:click="left=false">
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

      <q-footer class="bg-grey-8" :reveal="reveal">
        <q-toolbar class="mobile-hide"></q-toolbar>

  <q-tabs

    v-model="tab"
    dense
    indicator-color="transparent"
    active-color="secondary"
style="font-size: xx-small"
    class="bg-accent text-grey-5  shadow-2 mobile-only "
  >
    <q-tab name="Home" icon="home" label="" >Home</q-tab>
    <q-tab name="List" icon="mail" class="text-white"   style="font-size: small" v-if="$route.path.split('/')[1]==='roommate'"  >List your room</q-tab>
    <q-tab name="search" icon="search" label="" v-if="$route.path.split('/')[1]==='roommate'" >Find a room</q-tab>

    <q-tab name="List" icon="plumbing" class="text-white"  v-if="$route.path.split('/')[1]==='handyman'" style="font-size: small" >Register</q-tab>
    <q-tab name="search" icon="search" v-if="$route.path.split('/')[1]==='handyman'" >Find a handyman</q-tab>
    <q-tab name="signIn" icon="person" label="" > SignIn</q-tab>

  </q-tabs>
<!--</q-toolbar>-->
      </q-footer>
    </q-layout>
</template>

<script>
    export default {
        name: "pageLayout",
      data() {
        return {
          left:false,
          tab:'mails',
          reveal:this.$q.platform.is.mobile,
        }}
    }
</script>

<style lang="sass" scoped>
  .menu-list .q-item
    border-radius: 0 32px 32px 0
</style>
