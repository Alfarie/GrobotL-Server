<template>
    <div class="row">
        <div class="col-sm-12 col-md-5 col-md-offset-1 mycontent-left"  >
            <div class="block">
                <li class="fa fa-thermometer-half fa-9x li-sensor-temp"></li>
                <div class="block" style="margin-left: 20px;">
                    <h2 class="" v-lang.temperature></h2>
                    <h1 class=" li-sensor-temp" style="font-size: 45px;"> {{getSensors.temperature | toFixed_1}} C</h1>
                </div>
            </div>
        </div>

        <div class="col-md-6" > 
            <div class="block">
                <li class="fa fa-braille fa-9x li-sensor-humi"></li>
                <div class="block" style="margin-left: 20px;">
                    <h2 class="text-center" v-lang.humidity></h2>
                    <h1 class="text-center li-sensor-humi" style="font-size: 45px;"> {{getSensors.humidity | toFixed_1}} %</h1>
                    <!-- <h1 class="text-center li-sensor-humi" style="font-size: 45px;"> -46.55 %</h1> -->
                </div>
            </div>
            <hr class="vertical block">
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      temp: 0
    };
  },
  computed: {
    ...mapGetters(["getSensors"])
  },
  filters: {
    toFixed_1(value){
      if(value)
        return value.toFixed(1);
      else
        return '00.0'
    }
  }
};
</script>

<style scoped>
.li-sensor-temp {
  color: rgb(133, 219, 241);
}

.li-sensor-humi {
  color: rgb(130, 236, 204);
}

.mycontent-left {
  border-right: 0px solid rgb(145, 143, 143);
}

.block {
  display: inline-block;
}

hr.vertical {
  width: 0px;
  height: 40px;
  /* or height in PX */
}
</style>