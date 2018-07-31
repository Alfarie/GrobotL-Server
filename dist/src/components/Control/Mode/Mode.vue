<template>
<div class="row">

    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/settings.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.configuration></span>
        </div>
      </div>
    </div>

    <div class="row text-center" style="margin-top: 20px;">

      <div class="col-lg-4">
        <h2 v-lang.light></h2>
        <app-switch-button title="Auto" v-model="lightAuto"></app-switch-button>
        <app-switch-button title="status" v-model="lightStatus" v-show="!lightAuto"></app-switch-button>
      </div>
      <div class="col-lg-4">
        <h1 v-lang.pump></h1>
        <app-switch-button title="Auto" v-model="pumpAuto" ></app-switch-button>
        <app-switch-button title="status" v-model="pumpStatus" v-show="!pumpAuto" ></app-switch-button>
      </div>
      <div class="col-lg-4">
        <h1 v-lang.fan></h1>
        <app-switch-button title="Auto" v-model="fanAuto" ></app-switch-button>
        <app-switch-button title="status" v-model="fanStatus" v-show="!fanAuto" ></app-switch-button>
      </div>
    </div>
  </div>
</template>

<script>
import SwitchButton from "./swtichbutton.vue";
  import {
    mapGetters
  } from 'vuex'
export default {
  components: {
    appSwitchButton: SwitchButton
  },
  computed:{
      ...mapGetters(['getControl']),
      lightAuto:{
          get(){
              return this.getControl[0].mode == 1? true:false
          },
          set(value){
              this.getControl[0].mode = (value)?1:0;
              this.$store.dispatch('popupUpdateModal')
              this.$store.dispatch('uploadControl',0);
          }
      },
      lightStatus:{
          get(){
              return this.getControl[0].manual.status == 1? true:false
          },
          set(value){
              
              this.getControl[0].manual.status = (value)?1:0;
              this.$store.dispatch('popupUpdateModal')
              this.$store.dispatch('uploadControl',0);
          }
      },
      pumpAuto:{
          get(){
              return this.getControl[1].mode == 1? true:false
          },
          set(value){
              this.getControl[1].mode = (value)?1:0;
              this.$store.dispatch('popupUpdateModal')
              this.$store.dispatch('uploadControl',1);
          }
      },
      pumpStatus:{
          get(){
              return this.getControl[1].manual.status == 1? true:false
          },
          set(value){
              this.getControl[1].manual.status = (value)?1:0;
              this.$store.dispatch('popupUpdateModal')
              this.$store.dispatch('uploadControl',1);
          }
      },
      fanAuto:{
          get(){
              return this.getControl[2].mode == 1? true:false
          },
          set(value){
              this.getControl[2].mode = (value)?1:0;
              this.$store.dispatch('popupUpdateModal')
              this.$store.dispatch('uploadControl',2);
          }
      },
      fanStatus:{
          get(){
              return this.getControl[2].manual.status == 1? true:false
          },
          set(value){
              this.getControl[2].manual.status = (value)?1:0;
              this.$store.dispatch('popupUpdateModal')
              this.$store.dispatch('uploadControl',2);
          }
      }
  }
};
</script>

<style scoped>
</style>