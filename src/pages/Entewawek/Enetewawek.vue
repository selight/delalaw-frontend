<template>
    <div class="row justify-evenly q-gutter-lg q-mb-md">
      <dating-card-component v-for="(item, index) in 6" :key="index" class="col-3"></dating-card-component>
    </div>
</template>

<script>
    import DatingCardComponent from "components/datingCardComponent";
    export default {
        name: "Enetewawek",
      components: {DatingCardComponent}
    }
</script>

<style scoped>

</style>
