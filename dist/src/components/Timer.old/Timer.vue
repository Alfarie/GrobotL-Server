<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12 col-md-3">
              <app-control-panel></app-control-panel>
          </div>
          <div class="col-md-8">

            <transition
              name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
      </div>
  </div>
</template>

<script>
import ControlPanel from "./ControlPanel/ControlPanel";
import TimerPanel from "./TimerPanel/TimerPanel";
var $ = (window.jQuery = require("jquery"));
require("../../assets/css/animate.css");
export default {
  components: {
    appControlPanel: ControlPanel,
    appTimerPanel: TimerPanel
  },
  created(){
    this.$store.dispatch('GetControl');
  }
};
</script>


<style scoped>
#timer-animate {
  -vendor-animation-duration: 0.5s;
}
.vertical-center {
  display: flex;
  align-items: center;
}
.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.grey-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.device-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}
.device-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.block {
  display: inline-block;
  vertical-align: top;
}
</style>

