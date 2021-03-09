<template>
    <div class="full-width ">
      <q-card class="row">
      <q-stepper
      v-model="step"
      header-nav
      ref="stepper"
      color="primary"
      animated
      flat
      vertical
      class="q-mt-md col-7"
    >
      <q-step
        :name="1"
        :title=stepHeader.title1
        icon="settings"
        :done="step > 1"
        :header-nav="step > 1"

      >
        <div v-if="forRoommate" class="row q-gutter-md">
        <q-input dense class="col-8" rounded outlined v-model="roommateLocation" autofocus placeholder="Please locate the area of your place">
          <template v-slot:append>
            <q-btn icon="location_on"  flat round color="secondary" />
          </template>
          <template v-slot:before>
            <div class="text-body1 text-secondary ">
              Location:
            </div>
          </template>
        </q-input>
          <q-input dense type="number"  outlined class="col-5" placeholder="Enter the number of rooms you're renting">
            <template v-slot:before>
              <div class="text-body1 text-secondary">
                Number of rooms:
              </div>
            </template>
          </q-input>
          <q-input dense outlined class="col-3" placeholder="Enter the price">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Price:
              </div>
            </template>
          </q-input>

        <q-input dense v-model="roommateLocation" class="col-8" outlined autogrow placeholder="Please write some description">
          <template v-slot:before >
            <div class="text-body1 text-secondary">
              Description:
            </div>
          </template>
        </q-input>
        </div>
        <div v-if="!forRoommate" class="row q-gutter-md">
          <q-input dense class="col-8" rounded outlined v-model="roommateLocation" autofocus hint="Please locate the area of your place">
            <template v-slot:append>
              <q-btn icon="location_on"  flat round color="secondary" />
            </template>
            <template v-slot:before>
              <div class="text-body1 text-secondary ">
                Location:
              </div>
            </template>
          </q-input>
          <q-select
            multiple
            v-model="handymanModel"
            :options="handymanOptions"
            use-chips
            color="secondary"
            clearable
            rounded
            outlined
            dense
            options-selected-class="text-primary"
            class="col-8"
            behavior="menu"
            hint="choose the services you provide"
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
            <template v-slot:before>
              <div class="text-body1 text-secondary ">
                Services:
              </div>
            </template>
          </q-select>
          <q-input dense v-model="roommateLocation" class="col-8" rounded outlined autogrow hint="Please write some description">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Description:
              </div>
            </template>
          </q-input>
          <q-input dense v-model="roommateLocation" class="col-8" rounded outlined autogrow hint="Please tell us about yor work experience">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Work Experience:
              </div>
            </template>
          </q-input>

          <q-input dense rounded outlined type="number" class="col-5" hint="Enter your rate per hour">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Rate:
              </div>
            </template>
          </q-input>
        </div>
        <q-stepper-navigation>
          <q-btn @click="() => { if(!hidden){done2 = true; step = 3} else{finish()} }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        :title=stepHeader.title2
        icon="create_new_folder"
        :done="step > 2"
        :header-nav="step > 2"
        :hidden="hidden"
      >
        <q-uploader v-if="forRoommate"></q-uploader>

        <q-stepper-navigation>
          <q-btn @click="() => { if(!hidden){done2 = true; step = 3} else{finish()} }" color="primary" label="Continue" />
          <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        :title=stepHeader.title3
        icon="add_comment"
        :header-nav="step > 3"
        :hidden="hidden"
      >
        <div v-if="forRoommate" class="row q-gutter-lg">
          <q-select label-color="accent" dense :options="options2"  class="col-lg-3 col-md-3 col-sm-3 col-xs-5 text-caption"  outlined v-model="nationality">
            <template v-slot:before>
              <div class="text-body1 text-secondary">
                Nationality:
              </div>
            </template>
          </q-select>
          <q-select label-color="accent" dense :options="options" class="col-lg-3 col-md-3 col-sm-2 col-xs-4 text-caption"  outlined v-model="gender">
            <template v-slot:before>
              <div class="text-body1 text-secondary">
                Gender:
              </div>
            </template>
          </q-select>
          <div class="col-12 text-body1 text-secondary">
            <div class="row">
              <div class="col-1 text-body1 text-secondary">
                Age:
              </div>
          <q-range
            v-model="standard"
            :min="0"
            :max="120"
            :step="5"
            label
            color="primary"
            class="col-6"
          />
            </div>
          </div>
          <q-input dense type="number"  outlined class="col-5" placeholder="Enter the number of rooms you're renting">
            <template v-slot:before>
              <div class="text-body1 text-secondary">
                Number of people:
              </div>
            </template>
          </q-input>
          <q-input dense v-model="roommateLocation" class="col-8" outlined autogrow placeholder="Please write some description">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Description:
              </div>
            </template>
          </q-input>
        </div>

        <q-stepper-navigation>
          <q-btn color="primary" @click="finish()" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
        <div class="q-mt-md col-4"><q-img  src="~assets/dating.svg"></q-img></div>
      </q-card>
   <AuthDialog  v-bind:dialog-prop=dialogs />
    </div>
</template>

<script>

    import {mapGetters} from "vuex";
    import AuthDialog from "components/AuthDialog";

    export default {
        name: "postComponent",
      components: {AuthDialog },
      props:{
        stepHeader:{
          type:Object,
          default:function () {
            return {title1:"A little detail about the room",title2:"Please upload some images",
              title3:"Tell us the roommate you prefer"}
          },
        },
          forRoommate:{
            type:Boolean,
            default:true,
          },
          hidden:{
            type:Boolean,
            default:false,
          },
          handymanModel:{
            type:String,
            default:''
          },
        roommateLocation:{
          type:String,
        }
      },
      computed:{
        ...mapGetters({
          isAuth:'Auth/isAuth'
        })
      },
      data() {
        return {
          step:1,
          dialogs:false,
          register:false,
          options2:[
            'Ethiopian','Any'
          ],
          options:[
            'Male','Female','Any'
          ],
          nationality:'Any',
          gender:'Any',
          standard: {
            min: 0,
            max: 120
          },
          handymanOptions: [
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


        }},
      methods:{
          finish(){
            if (!this.isAuth){
              this.dialogs=true
            }
            else {
              //to profile
            }
          }
      }

    }
</script>

<style scoped>

</style>
