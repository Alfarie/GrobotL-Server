<template>
  <div class="row">


    <div class="row text-center" style="margin-top:  20px;">
      <div class="col-lg-5 col-lg-offset-3" v-if="isCurrent">
        <h2>Connected WI-FI</h2>
        <div class=" grey-panel wifi-list">
            <div style="margin-top: 5px;">
              <div style="display: inline-block">
                <img src="/src/assets/img/wifi2.png" alt="">
              </div>
              <div style="display: inline-block; margin-top:10px;">
                <h3 style="margin-left: 10px;"> {{CurrentWifi.data.ssid}}
                  <small></small>
                </h3>
              </div>
              <div class="pull-right" style="margin-top: 8px;">
                <router-link tag="button" to="/setting/wifi/status" type="button" class="btn btn-default btn-circle btn-xl" style="font-size: 20px; margin-top:10px; margin-right:10px;">
                  <i class="fa fa-info"></i>
                </router-link>
              </div>
            </div>
  
          </div>
       

      </div>
    </div>


    <div class="row" style="margin-top:30px;">
      <div class="col-lg-12 text-center">
        <h2>Available WI-FI
          <button type="button" class="btn btn-default btn-circle" @click="refresh">
            <i class="fa fa-sync"></i>
          </button>
        </h2>
        <!-- <p>{{AvailableWifi}}</p> -->
      </div>
      <div class="col-lg-12">
        <div class="col-lg-5 grey-panel wifi-list" v-for="wifi in AvailableWifi" :key="wifi.bssid">
          <div style="margin-top: 5px;">
            <div style="display: inline-block">
              <img width="50" src="/src/assets/img/wifi2.png" alt="">
            </div>
            <div style="display: inline-block; margin-top: 5px;">
              <h3 style="margin-left: 10px;"> {{wifi.ssid}}
                <small>({{wifi.signalLevel | percent}} %)</small>
              </h3>
            </div>
            <div class="pull-right" style="margin-top: 8px;">
              <button type="button" class="btn btn-success btn-circle btn-xl" @click="toConnect(wifi)">
                <i class="fa fa-angle-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
      <div class="col-lg-10 col-lg-offset-1 text-center" v-if="AvailableWifi.length == 0" style="margin-top: 20px;">
        <div class="alert alert-danger">
          <h3>NO WIFI AVAILABLE...</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from "vuex";
  import InputKeyboard from "./input-keyboard.vue";
  export default {
    data(){
      return {
        loop: null
      }
    },
    components: {
      InputKeyboard
    },
    computed: {
      ...mapGetters(["AvailableWifi", "CurrentWifi"]),
      isCurrent(){
        return (this.CurrentWifi.data != undefined)?true:false;
      }
    },
    created() {
      this.loop = setInterval(()=>{
        this.$store.dispatch("GetAvailableWifi");
        this.$store.dispatch("GetCurrentWifi");
      },3000)
    },
    destroyed () {
      clearInterval(this.loop);
    },
    filters: {
      percent: value => {
        return Math.min(Math.max(2 * (value + 100), 0), 100);
      }
    },
    methods: {
      refresh() {
        this.$store.dispatch("GetAvailableWifi");
        this.$store.dispatch("GetCurrentWifi");
      },
      toConnect(wifi){
        //   console.log(wifi);
          this.$router.push({
              name: 'wifi-connect',
              params: wifi
          })
      }
    }
  };

</script>

<style scoped>
  .wifi-list {
    margin-top: 10px;
    margin-left: 60px;
    height: 80px;
  }

  .btn-circle.btn-xl {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    font-size: 28px;
  }

  .btn-circle {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    font-size: 16px;
  }

  .grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

</style>
