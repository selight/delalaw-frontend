<template>
  <div class="row">
    <q-card bordered class="no-padding " style="background-color: #5b7386ad; "><q-card-section>
    <q-card class="column " style=" margin-right: -30px;
    margin-bottom: -30px;" >
      <q-img src="../assets/woman.jpg" style="min-height: 300px" />

      <q-card-section>
        <q-btn
          fab

          color="white"

          class="absolute"

          style="top: 0; right: 12px; transform: translateY(-50%);"
        >
          <q-icon name="favorite" color="red" size="lg"></q-icon>
        </q-btn>

        <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            La paix
          </div>
        </div>

      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-subtitle1">
          French,Libra
        </div>
        <div class="text-caption text-grey">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>



    </q-card></q-card-section></q-card>
  </div>
</template>

<script>
    export default {
        name: "datingCardComponent"
    }
</script>

<style scoped>

</style>
