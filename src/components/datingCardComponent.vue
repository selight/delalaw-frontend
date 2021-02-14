<template>
  <div class="row">
    <q-card bordered class="no-padding " style="background-color: rgba(91,115,134,0.18); ">
      <q-card-section>
        <q-card class="me " style=" margin-right: -30px;
    margin-bottom: -30px;" >
          <q-img src="../assets/woman.jpg" style="min-height: 300px"/>

          <q-card-section>
            <q-btn
              class="absolute"

              color="secondary"

              fab
              round
              style="top: 0; right: 2px; transform: translateY(-50%);"
            >
              <q-icon color="white" name="favorite" size="md"></q-icon>
            </q-btn>

            <div class="row no-wrap items-center">
              <div class="col text-h6 ellipsis">
                La paix,21
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


        </q-card>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
  export default {
    name: "datingCardComponent",
    data() {
      return {
        style: "\" margin-right: -30px;\n" +
          "    margin-bottom: -30px;\""
      }
    }
  }
</script>

<style scoped>
.me :hover{
  margin-right: 0px !important;
  /*background-color: #21BA45;*/
}
</style>
