<template>
<!--  <q-btn v-on:click="mel()">go</q-btn>-->
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

    <div class="col-lg-6 col-md-6 col-sm-4 col-xs-12 q-mt-md ">
      <div class="row q-gutter-md">
  <q-card v-for="(item, index) in 4" :key="index" class=" flat bordered">
    <q-card-section horizontal class="row " >
      <q-card-section class=" text-white bg-secondary col-5" style="border-right: solid 1px" >
        <div class="column items-center q-gutter-sm">
        <div class="col-12 text-center" >Selam</div>
        <q-avatar size="120px"  class="bg-white  q-ma-xs text-center">
          <q-img contain src="~/assets/dating.svg"/>
        </q-avatar>
        <div class=" col-12 text-center">Plumbing,Home service</div></div>
      </q-card-section>

      <q-card-section class="col-7" >
        <div class="text-subtitle2">Job title: <span class="text-secondary  text-subtitle2">Plumber</span></div>
        <div class="text-subtitle2">Work Experience: <span class="text-secondary">3 years in the plumbing business</span></div>
        <div class="text-subtitle2">Description: <span class="text-secondary">I did this and i did that, look at this
        and look at that.</span></div>
        <div class="text-subtitle2">Location: <span class="text-secondary">Los Angeles</span></div>

<div class="row justify-end">
          <q-btn   class="q-ma-sm absolute-bottom-right">contact</q-btn>
</div>
      </q-card-section>
    </q-card-section>
  </q-card>
    </div></div>
      <div class="col-lg-4 col-md-4 col-xs-12 q-mt-md ">
    <q-card >
      <div class="text-h6 q-ma-sm">Reviews</div>
  <q-card v-for="(item, index) in 4" :key="index" ><q-card-section>
    <div class="text-caption text-weight-light ">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua.
    </div>
  </q-card-section></q-card></q-card>
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
            hey:[
              {name: "sel", subject:"chem", total:70},
              {name: "mel", subject:"bio", total:40},
              {name: "sel", subject:"geo", total:30},
              {name: "mel", subject:"art", total:100},
              {name: "del", subject:"bio", total:40},
              {name: "del", subject:"chem", total:80},
              {name: "mel", subject:"chem", total:80},
              {name: "mel", subject:"geo", total:50},
              {name: "del", subject:"geo", total:50},
              {name: "del", subject:"art", total:100},
              {name: "sel", subject:"bio", total:20},
              {name: "sel", subject:"art", total:600}],
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
          ]

        }
      },
      methods:{
          mel(){
            let temp = "";
            let arr=[];
            for (let i = 0; i <this.hey.length ; i++) {
              temp = this.hey[i].name;
              let obj={};
              if(obj !== {}){
                arr.push(obj)
              }
              this.hey.forEach(student => {
                if (student.name===temp){
                  obj.name=temp;
                  obj[student.subject]=student.total
                  this.hey=this.hey.filter(function (item) {
                    return item !== student
                    }
                  )
                }

              });
            }
          console.log(arr);
          },




    }}
</script>

<style scoped>

</style>
