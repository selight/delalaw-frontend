<template>
  <div class="row ">
    <q-card >
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">
            <q-chip class="text-white" color="secondary"  icon-right="star">
            Joke
          </q-chip></div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-weight-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </div>
          <div class="q-mt-lg">
            <q-chip class="text-secondary">
              <q-avatar>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
              </q-avatar>
              John
            </q-chip>
            <span class="q-ml-md text-secondary">Friday,Feb 2021</span>
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
          <q-img
            class="rounded-borders"
            src="~assets/nature.jpg"
          />
        </q-card-section>
      </q-card-section>

      <q-separator />


    </q-card></div>
</template>

<script>
    export default {
        name: "thumbnailComponent"
    }
</script>

<style scoped>

</style>
