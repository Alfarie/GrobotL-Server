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
        <h2 v-lang.water></h2>
        <app-water-mode v-model="waterMode"></app-water-mode>
        <app-switch-button :title="cir" v-model="isCir" v-if="!waterMode"></app-switch-button>
        <app-switch-button :title="fill" v-model="isFill"></app-switch-button>
        po
      </div>
      <div class="col-lg-4">
        <h1 v-lang.solution></h1>
        <app-switch-button :title="ecP" v-model="ecPump"></app-switch-button>
        <app-switch-button :title="phP" v-model="phPump"></app-switch-button>
        <app-switch-button :title="co2V" v-model="co2valve"></app-switch-button>
      </div>
      <div class="col-lg-4">
        <h1 v-lang.light></h1>
        <app-switch-button :title="auto" v-model="autoMode"></app-switch-button>
        <app-switch-button :title="led" v-model="ledManual" v-if="!autoMode"></app-switch-button>
      </div>
    </div>
  </div>
</template>

<script>
  import SwitchButton from './swtichbutton.vue'
  import WaterMode from './watermode.vue'
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['getWaterControl', 'getControl']),
      waterMode: {
        get(){
          //timer = true,  sequence = false
          return this.getControl[4].mode == 5 ?false:true
        },
        set(value){
          console.log(value);
          this.getControl[4].mode = (value)?1:5
          if(this.getControl[4].mode == 1) this.getWaterControl.isCir = 0;
          this.getControl[4].timer.mode = 1;
          this.$store.dispatch('popupUpdateModal')
          this.$store.dispatch('uploadWater');
          this.$store.dispatch('uploadControl',4);
        }
      },
      isCir: {
        get(){
          return (this.getWaterControl.isCir == 1)? true:false
        },
        set(value){
          this.getWaterControl.isCir = (value)?1:0
          this.$store.dispatch('popupUpdateModal');
          this.$store.dispatch('uploadWater');
        }
      },
      isFill: {
        get(){
          return (this.getWaterControl.isFill == 1)? true:false
        },
        set(value){
          this.getWaterControl.isFill = (value)?1:0
          this.$store.dispatch('popupUpdateModal');
          this.$store.dispatch('uploadWater');
        }
      },
      ecPump: {
        get(){
          return (this.getControl[2].mode ==2)? true: false;
        },
        set(value){
          this.getControl[2].mode = (value) ? 2 : 0;
          this.$store.dispatch('popupUpdateModal');
          this.$store.dispatch('uploadEC');
        }
      },
      phPump: {
        get(){
          return (this.getControl[3].mode == 2)? true: false;
        },
        set(value){
          this.getControl[3].mode = (value) ? 2 : 0;
          this.$store.dispatch('popupUpdateModal')
          this.$store.dispatch('uploadPH');
        }
      },
      co2valve: {
        get(){
          return (this.getControl[1].mode == 3)? true: false;
        },
        set(value){
          this.getControl[1].mode = (value) ? 3 : 0;
          this.$store.dispatch('popupUpdateModal')
          this.$store.dispatch('uploadCo2');
        }
      },
      autoMode: {
        get(){
          return (this.getControl[0].mode == 1)? true: false;
        },
        set(value){
          this.getControl[0].mode = (value) ? 1 : 0;
          this.$store.dispatch('popupUpdateModal')
          this.$store.dispatch('uploadControl',0);
        }
      },
      ledManual: {
        get(){
          return (this.getControl[0].manual.status == 1)? true: false;
        },
        set(value){
          this.getControl[0].manual.status = (value) ? 1 : 0;
          // this.$store.dispatch('popupUpdateModal')
          this.$store.dispatch('uploadControl',0);

        }
      },
      cir(){
        return this.translate('cir');
      },
      fill(){
        return this.translate('fill');
      },
      ecP(){
        return this.translate('ecPump');
      },
      phP(){
        return this.translate('phPump');
      },
      co2V(){
        return this.translate('co2Valve');
      },
      auto(){
        return this.translate('autoMode');
      },
      led(){
        return this.translate('ledManual');
      },
    },
    components: {
      appSwitchButton: SwitchButton,
      appWaterMode: WaterMode
    },
    messages:{
      en:{
        water: 'Water System',
        cir: 'Circulating Water',
        fill: 'Fill Water',
        ecPump: 'EC Pump',
        phPump: 'pH Pump',
        co2Valve: 'CO2 Valve',
        autoMode: 'Auto Mode',
        ledManual: 'LED Manual'
      },
      th:{
        water: 'ระบบน้ำ',
        cir: 'การหมุนเวียนน้ำ',
        fill: 'รการเติมน้ำ',
        ecPump: 'อีซีปั้ม',
        phPump: 'พีเอชปั้ม',
        co2Valve: 'CO2 ปั้ม',
        autoMode: 'อัตโนมัติ',
        ledManual: 'เปิด/ปิดไฟ'    
      }
    }
  }

</script>


<style scoped>


</style>
