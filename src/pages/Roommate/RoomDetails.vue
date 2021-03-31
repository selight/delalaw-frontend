<template>
  <div>details</div>
</template>

<script>
    export default {
        name: "RoomDetails",
      created() {
          this.$store.dispatch("Roommate/getPostById",this.$route.params.id)
      }
    }
</script>

<style scoped>

</style>
