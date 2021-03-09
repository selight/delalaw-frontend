<template>
  <div >
<!--    <q-dialog v-model="dialog"  persistent full-height full-width >-->
<!--      <q-img  src="~assets/pattern-2.svg" style="">-->
<!--        <div class="text-h5 bg-white text-secondary q-mt-lg " style="margin-left: 400px">Choose the type of partner you are looking for?</div>-->
<!--      <q-card flat class="row justify-center bg-transparent text-primary  " style="margin-left:  250px; margin-top: 150px "  >-->
<!--          <q-card-section>-->
<!--          <div class=" col-8 flex flex-center" >-->
<!--            <q-btn flat v-model="partnerType"   color="accent" >-->
<!--              <q-card style="min-height: 200px; min-width: 300px">-->
<!--              <q-card-section class="text-h4 q-pt-lg">-->
<!--                <q-img src="~assets/buisness.svg" contain style="max-height: 100px;"></q-img>-->
<!--                  Business Partner-->
<!--              </q-card-section>-->
<!--            </q-card>-->
<!--            </q-btn>-->
<!--            <q-btn flat v-model="partnerType"   color="secondary" >-->
<!--              <q-card style="min-height: 200px; min-width: 300px">-->
<!--                <q-card-section class="text-h4 q-pt-lg">-->
<!--                  <q-img src="~assets/datingPartner.svg" contain style="max-height: 100px"></q-img>-->
<!--                      Dating Partner-->
<!--                </q-card-section>-->
<!--              </q-card>-->
<!--            </q-btn>-->
<!--          </div>-->
<!--&lt;!&ndash;       <q-btn v-close-popup >next</q-btn>&ndash;&gt;-->
<!--          </q-card-section>      </q-card>-->
<!--      </q-img>-->
<!--    </q-dialog>-->

    <div class="row justify-evenly q-gutter-lg q-mb-lg q-mt-xs " >

      <dating-card-component v-for="(item, index) in 6" :key="index" class="col-lg-3 col-md-3 col-sm-5 col-xs-12"></dating-card-component>
    </div></div>
</template>

<script>
    import DatingCardComponent from "components/datingCardComponent";
    export default {
        name: "Enetewawek",
      components: {DatingCardComponent},
      data(){
          return{
            dialog:true,
            partnerType:''
          }
      }
    }
</script>

<style scoped>
.me > .q-dialog__backdrop{
  backdrop-filter: blur(4px)
}
</style>
