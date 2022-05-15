<template>
  <div class="col-12">
  <div class="row justify-between q-ma-sm   ">
        <!--    Top Nav bar-->
    <div class="col-12 ">
      <q-select
        multiple
        v-model="model"
        :options="options"
        use-chips
        color="secondary"
        clearable
        rounded
        outlined
        options-selected-class="text-primary"
        class="q-mx-sm   desktop-hide"
        behavior="menu"
      >
        <template v-slot:no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
              <q-item-label caption>{{ scope.opt.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select></div>
<div class="col-12">

  <q-list  class="row justify-center desktop-only">
    <q-item  clickable v-ripple   active>
      <q-item-section class=" column items-center">
      <q-icon name="construction" size="md"  color="secondary"></q-icon>
      <q-item-section class="text-subtitle1">General</q-item-section>
      </q-item-section>
    </q-item>
<q-separator vertical/>
    <q-item clickable v-ripple >
      <q-item-section class=" column items-center">
        <q-icon name="plumbing" size="md"  color="secondary"></q-icon>
        <q-item-section>Plumbing Services</q-item-section>
      </q-item-section>

    </q-item>
    <q-separator vertical/>
    <q-item clickable v-ripple>
      <q-item-section class=" column items-center">
        <q-icon name="electrical_services" size="md"  color="secondary"></q-icon>
        <q-item-section>Mechanical Services</q-item-section>
      </q-item-section>
    </q-item>
    <q-separator vertical/>
    <q-item clickable v-ripple>
      <q-item-section class="column items-center">
        <q-icon name="format_paint" size="md"  color="secondary"></q-icon>
        <q-item-section>Painting Services</q-item-section>
      </q-item-section>
    </q-item>
    <q-separator vertical/>
    <q-item clickable v-ripple>
      <q-item-section class="column items-center">
        <q-icon name="microwave" size="md"  color="secondary"></q-icon>
        <q-item-section>Cooking Services</q-item-section>
      </q-item-section>
    </q-item>
    <q-separator vertical/>
    <q-item clickable v-ripple>

        <q-item-section class="column items-center">
          <q-icon name="cleaning_services" size="md"  color="secondary"></q-icon>
        <q-item-section>Heating and AC Services</q-item-section>
      </q-item-section>
    </q-item>
    <q-separator vertical/>
    <q-item clickable v-ripple>
      <q-item-section class="column items-center">
        <q-icon name="chair_alt" size="md"  color="secondary"></q-icon>
        <q-item-section>Wood works</q-item-section>
      </q-item-section>
    </q-item>
  </q-list>
</div>
<!--Posts-->
    <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12 q-mt-md ">
      <div class="row   q-gutter-md">
        <div v-if="posts.length===0" class=" col-12">
          <div class="row q-gutter-md">
        <q-card  v-for="(item,index) in 9" style="min-width: 500px"  :key="index">
          <q-card-section horizontal class="row q-mt-md q-mr-xs" >
<div class="col-5 text-center">
  <div class="row justify-center">
          <q-skeleton size="120px" type="QAvatar" />
  </div>
</div>
<div class="col-7">
  <q-skeleton height="50px" v-for="(item,index) in 3" :key="index" type="text" />
</div>
        </q-card-section>
          <div class="row justify-end" >
            <q-skeleton type="QBtn"  class="q-ma-sm "></q-skeleton>
          </div>

        </q-card>
        </div>
        </div>
  <q-card v-for="(item, index) in posts" :key="index" class=" flat bordered">
    <q-card-section horizontal class="row " >
      <q-card-section class=" text-white bg-secondary col-5" style="border-right: solid 1px" >
        <div class="column items-center q-gutter-sm">
        <div class="col-12 text-center" >{{item.author.firstName}}</div>
        <q-avatar size="120px"  class="bg-white  q-ma-xs text-center">
          <q-img contain placeholder-src="~assets/dating.svg" :src="item.author.profilePicture"/>
        </q-avatar>
        <div class=" col-12 text-center">{{item.services[0]}},{{item.services[1]}}</div></div>
      </q-card-section>

      <q-card-section class="col-7" >
        <div class="text-subtitle2">Services: <span class="text-secondary  text-subtitle2">{{item.services[0]}}</span></div>
        <div class="text-subtitle2">Work Experience: <span class="text-secondary">{{item.workExperience}}</span></div>
        <div class="text-subtitle2">Description: <span class="text-secondary">{{item.description}}</span></div>
        <div class="text-subtitle2">Location: <span class="text-secondary">{{item.location}}</span></div>

<div class="row justify-end">
          <q-btn   class="q-ma-sm absolute-bottom-right">contact</q-btn>
</div>
      </q-card-section>
    </q-card-section>
  </q-card>
    </div></div>


    <!--        Reviews-->
      <div class="col-lg-4 col-md-4 col-xs-12 q-mt-md ">
    <q-card >
      <div class="text-h6 q-ma-sm">Reviews</div>
  <q-card v-for="(item, index) in 4" :key="index" ><q-card-section>
    <div class="text-caption text-weight-light ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </div>
  </q-card-section></q-card>
    </q-card>
      </div>
  </div>
  </div>

</template>


<script>
    export default {
        name: "Handyman",
      data () {
        return {
          lorem: 'Lorem ipsum dolor, sit amet Lorem ipsum dolor, sit amet consec Lorem ipsum dolor, sit amet consec Lorem ipsum dolor, sit amet consec consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',

          model:['General'],
          options: [
            {
              label: 'Plumbing Services',
              value: 'Plumbing Services',
              icon: 'plumbing',
            },
            {
              label: 'Mechanical Services',
              value: 'Mechanical Services',
              icon: 'electrical_services'
            },
            {
              label: 'Painting Services',
              value: 'Painting Services',
              icon: 'format_paint'
            },
            {
              label: 'Wood works',
              value: 'Wood works',
              icon: 'microwave'
            },
            {
              label: 'Cooking Services',
              value: 'Cooking Services',
              icon: 'chair_alt'
            },
          ],
          posts:[{location:'',description:'',rate:'',services:[],workExperience: '',author:{firstName:'',profilePicture:''}}],

          }
      },
      created() {
        this.$store.dispatch('Handyman/getPostsWithPagination').then(result =>{
          this.posts=result;
        }).catch(()=>this.posts=[])
      }
    }
</script>

<style scoped>

</style>
