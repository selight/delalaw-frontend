<template>
  <div class=" fullscreen flex flex-center bg-black  " >
    <auth-dialog/>
  </div>
</template>

<script>
    import AuthDialog from "components/AuthDialog";
    export default {
        name: "SignIn",
      components: {AuthDialog}
    }
</script>

<style scoped>

</style>
