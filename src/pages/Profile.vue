<template>
  <div class="col-12 q-mt-md ">
  <div class="row q-gutter-md justify-evenly">
    <q-card class="col-4">
      <q-card-section class="row justify-center">
  <div class="avatar-wrapper " v-on:mouseleave="showButton=false" v-on:mouseover="showButton=true">

    <q-img class="profile-pic" :src="$store.getters['Auth/user'].profilePicture" placeholder-src="~assets/dating.svg"  >

    </q-img>
    <button id="pick-avatar" >
    <q-btn v-if="showButton"  class=" absolute-center" color="primary">Edit your picture</q-btn>

    </button>
  </div>
      </q-card-section>
      <q-tabs
        v-model="tab"
        vertical
        class="text-primary"
      >
        <q-tab name="profile" icon="person" label="Profile" />
        <q-tab name="rooms" icon="home" label="My Rooms" />
        <q-tab name="services" icon="plumbing" label="My services" />
      </q-tabs>
    </q-card>
    <div class="col-6">

      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <q-tab-panel name="profile">

<div v-for="(key,index) in $store.getters['Auth/user']" :key="index" class="row q-mt-md q-gutter-md">

  <q-input class="col-6" v-if="(index !== 'profilePicture') && (index !== 'id') && (index !== '__typename') && (key !== '') && (key !== null)" square filled :value="key" readonly>
    <template v-slot:before>
      <div class="text-body1 text-secondary ">
        {{index.toUpperCase()}}
      </div>
    </template>
  </q-input>
</div>
        </q-tab-panel>
<!--Thumbnail-->
        <q-tab-panel name="rooms">

    <q-card  :key=index v-for="(item,index) in rooms">

      <q-card-section class="row q-gutter-md justify-evenly" horizontal>
        <carousel-component v-bind:rent-hidden="true" class="col-6"  :rooms="item" />
        <q-separator vertical/>
        <div>
          <div>Location : {{item.location}}</div>
        </div>
      </q-card-section>
    </q-card>

        </q-tab-panel>
        <q-tab-panel name="services">

    <q-card  :key=index v-for="(item,index) in handyman">

      <q-card-section horizontal>
        {{item}}
        <q-separator vertical/>
        <div>
          <div>Location : {{item.location}}</div>
        </div>
      </q-card-section>
    </q-card>
        </q-tab-panel>
      </q-tab-panels>
    <avatar-cropper
      @uploading="handleUploading"
      :upload-handler="handleUploading"
      trigger="#pick-avatar"
      :upload-headers=headers
      :labels=label
      output-mime="image/jpeg"
    />

  </div>
  </div>
  </div>
</template>

<script>
  import AvatarCropper from "vue-avatar-cropper";
  import CarouselComponent from "components/carouselComponent";

  export default {
    components: {CarouselComponent, AvatarCropper},
    data() {
      return {
        tab: 'profile',
        rooms: [{
          content: "true home",
          featuredImage: {image: '', size: ''},
          location: "Adiss Ababa",
          price: "100usd",
          size: "3"
        }],
        handyman: [],
        roomsHidden: false,
        showButton: false,
        headers: {'Access-Control-Allow-Origin': '*'},
        label: {submit: "Done", cancel: "Cancel"},
        user: {
          username: "ovetrue",
          profilePicture: ""
        },
        image: '',
      };
    },
    methods: {


      async handleUploading(file) {
          let image =file.getCroppedCanvas().toDataURL("image/png");
        await this.$store.dispatch("Roommate/uploadImage", image).then(
          result => {
            this.$store.dispatch("Auth/editUser", result);
            this.user=this.$store.getters["Auth/user"];
          })

      },

    },

    mounted() {
      this.user=this.$store.getters["Auth/user"]
      this.$store.dispatch("Roommate/getMyPostsWithPagination").then(result =>{
        console.log("here",result);
        this.rooms=result;
      })
      this.$store.dispatch("Handyman/getMyHandymanPostsWithPagination").then(result => {

        this.handyman=result;
      })
    }
  };
</script>

<style lang="scss">

  .avatar-wrapper{
    position: relative;
    height: 200px;
    width: 200px;
    /*margin: 10px auto;*/
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 1px 1px 15px -5px black;
    transition: all .3s ease;
    &:hover{
      transform: scale(1.05);
      cursor: pointer;
    }
    &:hover .profile-pic{
      opacity: .5;
    }
    .profile-pic {
      height: 100%;
      width: 100%;
      transition: all .3s ease;
      &:after{
        top: 0; left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        font-size: 190px;
        background: #ecf0f1;
        color: #34495e;
        text-align: center;
      }

    }


  }

  .avatar-cropper .avatar-cropper-container .avatar-cropper-footer .avatar-cropper-btn:hover {
background-color:#09203f;
  }
</style>
