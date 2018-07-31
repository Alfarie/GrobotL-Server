<template>
    <div class="navbar navbar-fixed-bottom" style="background-color: rgb(238, 238, 238); height: 5px;">
        <div class="pull-right" >
                <button 
                    style="height: 40px; width: 80px; margin: 5px;"
                    class="label label-default btn btn-default" 
                    @click="changeLanguage">
                    <span :class="flag" style="font-size: 25px;"></span> 
                    <span  style="font-size: 25px;">{{language}}</span>
                </button>
        </div>
        <div class="pull-right" v-for="(gpio,ind) in mcuStatus.gpio" 
            :key="'gpio' + gpio+ind" 
            :class="[{on: gpio },{off: !gpio}]">
            <i class="fa fa-circle fa-2x channel" ></i>
        </div>
    </div>
</template>

<script>
//  style="background-color: rgb(238, 238, 238);"
import {mapGetters} from 'vuex'
export default {
  
  computed: {
    ...mapGetters(['mcuStatus']),
    flag() {
      let lang = "";
      if (this.language == "en") lang = "us";
      else if (this.language == "th") lang = "th";
      return "flag-icon flag-icon-" + lang;
    }
  },
  methods: {
    changeLanguage() {
      if (this.language == "th") this.language = "en";
      else if (this.language == "en") this.language = "th";
      console.log(this.language);
    }
  },
  filters: {
    toUpperCase(value) {
      console.log(value);
      return this.value.toUpperCase();
    }
  }
};
</script>

<style scoped>
.channel{
  margin-right: 5px;
  margin-top: 10px;
}
.on {
  color: rgb(33, 206, 18);
  font-weight: bolder;
}
.off {
  color: rgb(206, 205, 205);
  font-weight: bolder;
}
</style>
