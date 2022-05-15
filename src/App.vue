<template>
  <div id="q-app"  class="my-font">
<!--<div v-bind:key="i" v-for="i in 5000">{{i}}</div>-->
<q-scroll-area style="height: 100vh;">
    <router-view/>
</q-scroll-area>

  </div>
</template>
<script>
export default {
  name: 'App',
  async created(){
    await this.$store.dispatch('Auth/getAuthUser');
  },
  async mounted() {
    let url = new URL(window.location.href);
    let param = url.searchParams.get("code");
    console.log(this.$route.query,param+"app")
    if(param !== null)
    await this.$store.dispatch('Auth/loginWithGoogle',param).then(async ()=> await this.$router.push('/'));

  }
}
</script>
