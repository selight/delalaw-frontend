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
        <q-input dense class="col-8" rounded outlined v-model="roommate.location" autofocus placeholder="Please locate the area of your place">
          <template v-slot:append>
            <q-btn icon="location_on"  flat round color="secondary" />
          </template>
          <template v-slot:before>
            <div class="text-body1 text-secondary ">
              Location:
            </div>
          </template>
        </q-input>
          <q-input dense type="number" v-model="roommate.NoOfRooms" outlined class="col-5" placeholder="Enter the number of rooms you're renting">
            <template v-slot:before>
              <div class="text-body1 text-secondary">
                Number of rooms:
              </div>
            </template>
          </q-input>
          <q-input dense v-model="roommate.price" outlined class="col-3" placeholder="Enter the price">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Price:
              </div>
            </template>
          </q-input>

        <q-input dense v-model="roommate.description" class="col-8" outlined autogrow placeholder="Please write some description">
          <template v-slot:before >
            <div class="text-body1 text-secondary">
              Description:
            </div>
          </template>
        </q-input>
        </div>
        <div v-if="!forRoommate" class="row q-gutter-md">
          <q-input dense class="col-8" rounded outlined v-model="handyman.location" autofocus hint="Please locate the area of your place">
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
            v-model="handymanServices"
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
          <q-input dense v-model="handyman.description" class="col-8" rounded outlined autogrow hint="Please write some description">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Description:
              </div>
            </template>
          </q-input>
          <q-input dense v-model="handyman.workExperience" class="col-8" rounded outlined autogrow hint="Please tell us about yor work experience">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Work Experience:
              </div>
            </template>
          </q-input>

          <q-input dense v-model="handyman.rate" rounded outlined class="col-5" hint="Enter your rate per hour">
            <template v-slot:before >
              <div class="text-body1 text-secondary">
                Rate:
              </div>
            </template>
          </q-input>
        </div>
        <q-stepper-navigation>
          <q-btn @click="() => { if(!hidden){done2 = true; step = 2} else{createHandyman()} }" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>
        <q-step
          :name="2"
          :title=stepHeader.title3
          icon="add_comment"
          :header-nav="step > 2"
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
            <q-input dense  class="col-8" outlined autogrow placeholder="Please write some description">
              <template v-slot:before >
                <div class="text-body1 text-secondary">
                  Description:
                </div>
              </template>
            </q-input>
          </div>

          <q-stepper-navigation>
            <q-btn @click="() => { if(!hidden){done2 = true; step = 3} else{finish()} }" color="primary" label="Continue" />
            <q-btn flat @click="step = 1" color="primary" label="Back" class="q-ml-sm" />
          </q-stepper-navigation>
        </q-step>
      <q-step
        :name="3"
        :title=stepHeader.title2
        icon="create_new_folder"
        :done="step > 2"
        :header-nav="step > 3"
        :hidden="hidden"
      >
        <q-uploader
          accept=".jpg, image/*"
          :factory="FactoryFn"
          ref="uploader"
          auto-upload
          multiple
          @rejected="onRejected"
          v-if="forRoommate"

        >
          <template v-slot:list="scope">
            <q-list separator>

              <q-item v-for="file in scope.files" :key="file.name">

                <q-item-section
                  v-if="file.__img"

                  class=" gt-xs"

                >
                  <img  :src="file.__img.src" style="width: 200px; height: 200px">
                </q-item-section>

                <q-item-section top side>
                  <q-btn
                    class="gt-xs"
                    size="12px"
                    flat
                    dense
                    round
                    icon="close"
                    @click="scope.removeFile(file)"
                  />
                </q-item-section>
              </q-item>

            </q-list>
          </template>


        </q-uploader>

        <q-stepper-navigation>
          <q-btn color="primary" @click="finish()" label="Finish" />
          <q-btn flat @click="step = 2" color="primary" label="Back" class="q-ml-sm" />

        </q-stepper-navigation>
      </q-step>


    </q-stepper>
        <div class="q-mt-md col-4"><q-img  src="~assets/dating.svg"></q-img></div>
      </q-card>
      <q-dialog  v-model="dialog"  >
        <register-component  v-on:loginClicked="register=false"  v-if="register"/>
        <login-component v-on:LoggedIn="dialog=false" v-on:registerClicked="register=true"  v-if="!register"/>
      </q-dialog>
      <q-dialog v-model="dialog2">
        <q-card>
        <div>Are you sure about your post</div>
        <q-btn v-on:click="post()" >Go</q-btn>
        <q-btn v-close-popup>close</q-btn>
        </q-card>
      </q-dialog>
    </div>

</template>
<script>

    import RegisterComponent from "components/registerComponent";
    import LoginComponent from "components/loginComponent";
    export default {
        name: "postComponent",
      components: {RegisterComponent, LoginComponent},
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
        // roommate:{
        //   type:Object,
        //   default:function () {
        //     return {location:"Adiss Ababa",NoOfRooms:"3",
        //       description:"true home",price:'100usd',featuredImage:[]}
        //   }
        // },......
        // handyman:{
        //   type:Object,
        //   default:function () {
        //     return {location:"",rate:"",
        //       description:"",workExperience:''}
        //   }
        // }
      },
      data() {
        return {
          step:1,
          register:false,
          images:[],
          roommate:{location:"Adiss Ababa",NoOfRooms:"3",
            description:"true home",price:'100usd',featuredImage:[]},
          handyman:{location:"Adiss ababa",rate:"5 per/hour",
            description:"I am handyman",workExperience:'Hey ',services:[]},
          handymanServices:[],
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
          url:'',
          dialog:false,
          Auth:this.$store.getters['Auth/isAuth'],
          dialog2:false,


        }},
      methods:{
        onRejected (rejectedEntries) {

          this.$q.notify({
            type: 'negative',
            message: `${rejectedEntries.length} file(s) did not pass validation constraints`
          })
        },

        FactoryFn(files){
          console.log(files[0])
          const reader = new FileReader();
          reader.onload =(e) => {
            let image = e.target.result
            this.images.push(image)
          }
            reader.readAsDataURL(files[0]);
console.log(this.images)

          // this.images.push(files);
          return this.url;
        },
         async finish(){

           if(this.$store.getters['Auth/isAuth']){
         let vm=this;
          //upload the files if there are any and save the post and the roommate information
            if (this.images!=null) {
       for (const image of this.images) {
          await vm.$store.dispatch('Roommate/uploadImage',image).then(result =>{
            if(result !== '' || result !== null){
            let images= {image:result,size:'600*600'}
            vm.roommate.featuredImage.push(images);
            }
          });
        }
            }
           await this.$store.dispatch('Roommate/createNewPost',this.roommate).then(
             ()=>{
               vm.$q.notify({
                 message:'Congrats you have created a post',
                 color:'positive'
               })
             }
           );}
           else{
             this.dialog=true;
           }


      },
        async post(){
          console.log(this.roommate)
        },
        async createHandyman(){
          if(this.$store.getters['Auth/isAuth']){
          this.handymanServices.forEach(service=>{
            this.handyman.services.push(service.value);
          })

         await this.$store.dispatch('Handyman/createNewHandyman',this.handyman).then(
           ()=>{
             this.$q.notify({
               message:'Congrats you have created a post',
               color:'positive'
             })
           }
         );
        }
        else{
         this.dialog=true;
        }
        }

    },

}
</script>

<style scoped>

</style>
