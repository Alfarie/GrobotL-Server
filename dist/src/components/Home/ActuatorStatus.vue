<template>


    <div>
        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <router-link to="/timer/fan" tag="div" class="grey-panel pn">
                <div style="display: inline">
                    <img src="/src/assets/img/fan.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.fan></h2>
                    <h2>
                        <span v-lang.mode></span> 
                        <span :class="[{'auto': (fan.mode==1)?true:false},{'manual': (fan.mode==0)?true:false} ]">: {{ (fan.mode)?'AUTO':'MANUAL' }} </span>
                    </h2>
                    <h2>
                        <span v-lang.status></span>
                        <span :class="[{'on': (mcuStatus.gpio[0]==1)?true:false},{'off': (mcuStatus.gpio[0]==0)?true:false} ]">: {{ (mcuStatus.gpio[0])?'ON': 'OFF'}}  </span>
                    </h2>
                </div>
            </router-link>

        </div>

        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <router-link to="/timer/pump" tag="div" class="grey-panel pn">
                <div style="display: inline">
                    <img src="/src/assets/img/pump.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.pump></h2>
                     <h2>
                        <span v-lang.mode></span> 
                        <span 
                            :class="[{'auto': (pump.mode==1)?true:false},{'manual': (pump.mode==0)?true:false} ]"
                            >: {{pump.mode?'AUTO':'MANUAL'}} </span>
                    </h2>
                    <h2>
                        <span v-lang.status></span>
                        <span :class="[{'on': mcuStatus.gpio[1]==1 },{'off': mcuStatus.gpio[1]==0 } ]">: {{mcuStatus.gpio[0]?'ON':'OFF'}}  </span>
                    </h2>
                </div>
            </router-link>
        </div>
        <div class="col-md-10 col-md-offset-1" style="margin-top: 25px;">
            <router-link to="/timer/led" tag="div" class="grey-panel pn">
                <div style="display: inline">
                    <img src="/src/assets/img/led.png" style="width: 20%; height: 20%; margin: 10px;">
                </div>
                <div class="block" style="margin-left: 20px; width: 60%">
                    <h2 v-lang.light></h2>
                     <h2>
                        <span v-lang.mode></span> 
                        <span :class="[{'auto': (led.mode==1)?true:false},{'manual': (led.mode==0)?true:false} ]">: {{led.mode?'AUTO':'MANUAL'}} </span>
                    </h2>
                    <h2>
                        <span v-lang.status></span>
                        <span :class="[{'on': (mcuStatus.gpio[2]==1)},{'off': (mcuStatus.gpio[2]==0)} ]">: {{mcuStatus.gpio[2]?'ON':'OFF'}}  </span>
                    </h2>
                </div>
            </router-link>

        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["actuatorString", "actuator", "getControl", "mcuStatus"]),
    fan(){
      return this.getControl[2];
    },
    pump(){
      return this.getControl[1];
    },
    led(){
      return this.getControl[0];
    },

    getFan() {
      return {
        mode: this.translate(this.actuatorString.fan.mode),
        status: this.translate(this.actuatorString.fan.status)
      };
    },
    getPump() {
      return {
        mode: this.translate(this.actuatorString.pump.mode),
        status: this.translate(this.actuatorString.pump.status)
      };
    },
    getLed() {
      return {
        mode: this.translate(this.actuatorString.led.mode),
        status: this.translate(this.actuatorString.led.status)
      };
    }
  },
  
  created() {
    this.$socket.on("ACTUATOR", data => {
      this.$store.dispatch("updateActuator", data);
    });
  }
};
</script>

<style scoped>
.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
}

.grey-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.li-sensor-temp {
  color: rgb(133, 219, 241);
}

.li-sensor-humi {
  color: rgb(130, 236, 204);
}

.font {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}

.mycontent-left {
  border-right: 3px solid rgb(145, 143, 143);
}

.block {
  display: inline-block;
  vertical-align: top;
}

hr.vertical {
  width: 0px;
  height: 40px;
  /* or height in PX */
}
.on {
  color: rgb(107, 233, 95);
  font-weight: bolder;
}
.off {
  color: rgb(224, 100, 100);
  font-weight: bolder;
}

.auto {
  color: rgb(52, 196, 253);
}
.manual {
  color: rgb(250, 175, 35);
}
</style>