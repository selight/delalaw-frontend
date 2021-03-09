<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  async created(){
    console.log("hey");

    await this.$store.dispatch('Auth/getAuthUser');
  }
}
</script>
