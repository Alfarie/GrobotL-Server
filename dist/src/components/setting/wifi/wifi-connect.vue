<template>
  <div class="row outer" style="margin-top: 30px;">
    <div class="inner">
      <!-- {{wifi}} -->
      
      <div>
        <h2 style="margin-left: 10px;">SSID:  {{wifi.ssid}}
          <small></small>
        </h2>
        <h3 style="margin-left: 10px;">FLAG:  {{wifi.flags}}
            <small></small>
        </h3>
      </div>

      <span style="display: inline-block;" key="input">
        <!-- <label style="font-size: 25px;"> PASSWORD:</label> -->
        <input type="password" class="form-control nutrion-input" placeholder="PASSWORD"  @focus="show" data-layout="normal">
      </span>
      <transition name="slide" mode="out-in">
        <div style="margin-top: 30px; margin-left: 30px;" v-show="visible">
          <vue-touch-keyboard  :layout="layout" :cancel="hide" :accept="accept" :input="input"  v-model="password"/>
        </div>
      </transition>
      <transition name="slide" mode="out-in">
        <div class="grey-panel pn inner" style="padding: 10px; width: 60%; margin-top: 30px;"  v-show="!visible && password" @click="connect">
          <h1 style="color: rgb(73, 210, 244)">Connect</h1>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wifi: null,
      visible: false,
      layout: "normal",
      input: null,
      password: null,
      options: {
        useKbEvents: false,
        preventClickEvent: false
      }
    };
  },
  created() {
    this.wifi = this.$route.params;
  },
  methods: {
    accept(text) {
      // alert("Input text: " + text);
      this.password = text;
      this.visible = false;
    },
    show(e) {
      this.input = e.target;
      this.layout = e.target.dataset.layout;

      if (!this.visible) this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    connect(){
      let wifiData = {
        ssid: this.wifi.ssid,
        psk: this.password
      }
      this.$store.dispatch('Connect',wifiData);
    }
  }
};
</script>



<style scoped>
.outer {
  width: 100%;
  text-align: center;
}

.inner {
  display: inline-block;
  width: 100%;
}

.nutrion-input {
  height: 70px;
  font-size: 40px;
  width: 12em;
  text-align: center;
}
</style>
