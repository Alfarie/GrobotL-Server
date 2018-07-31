<template>
  <div class="row outer" style="margin-top: 20px;">
      <!-- <h3>{{CurrentWifi}}</h3> -->
      <div class="inner">
        <div style="display: inline-block;">
          <div class="content-panel">
            <table class="table">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th> SSID:</th>
                  <td>{{CurrentWifi.data.ssid}}</td>
                </tr>
                <tr>
                  <th>IP:</th>
                  <td>{{CurrentWifi.data.ip}}</td>
                </tr>
                <tr>
                  <th>MAC:</th>
                  <td>{{CurrentWifi.data.mac}}</td>
                </tr>
                <tr>
                  <th>MODE:</th>
                  <td>{{CurrentWifi.data.mode}}</td>
                </tr>
                <tr>
                  <th>WPA_STATE:</th>
                  <td>{{CurrentWifi.data.wpa_state}}</td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

      <div class="inner">
          <div class="grey-panel pn" style="padding: 10px;" @click="disconnect">
          <h1 style="color: rgb(239, 65, 11)">Disconnect</h1>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed:{
        ...mapGetters(['CurrentWifi'])
    },
    methods:{
        disconnect(){
            this.$store.dispatch('popupUpdateModal');
            this.$store.dispatch('Disconnect');

            setTimeout( ()=>{
                this.$store.dispatch('GetCurrentWifi');
                this.$router.push({name: 'wifi-list'})
                
            },2000);
        }
    }
};
</script>

<style scoped>
 th,
  td {
    font-size: 30px;
  }
.outer {
  width: 100%;
  text-align: center;
}

.inner {
  display: inline-block;
  width: 50%;
}
</style>
