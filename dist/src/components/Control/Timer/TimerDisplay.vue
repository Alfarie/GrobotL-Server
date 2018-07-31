<template>
  <div class="row" style="margin-top: 30px;">
    <h1>Display</h1>
    <div class="col-lg-12">
      <transition-group name="slide" mode="out-in">
        <div style="margin-top: 20px;" 
              class="col-lg-5 col-lg-offset-1 grey-panel pn text-center" 
              v-for="(timer,index) in timerList" 
              :key="timer[0]+timer[1]">

          <span class="timer-start-format">{{timer[0] | timeFormat }}</span>
          <span style="text-align: center; margin: 10px; font-size: 30px;"> To</span>
          <span class="timer-stop-format">{{timer[1] | timeFormat }} </span>
          <transition name="fade" mode="out-in">
                <div class="pull-right" style="margin-top: 8px;" v-if="isEdit">
                  <button type="button" class="btn btn-danger btn-circle btn-xl" @click="deleteTimer(index)"><i class="fa fa-trash-alt"></i></button>
                </div>
            </transition>
        </div>
      </transition-group>

    </div>

  </div>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getControl", "getTimer"]),
    timerList(){
      return this.getTimer[this.$route.params.id-1]
    },
    isEdit() {
      return this.$route.query.edit ? true : false;
    }
  },
  methods:{
    deleteTimer(index){
      this.getControl[this.$route.params.id-1].timer.list.splice(index,1);
      // this.$store.dispatch('popupUpdateModal');
      this.$store.dispatch('uploadControl', this.$route.params.id-1);
    }
  },
  filters: {
    timeFormat(value) {
      let h = Math.floor(value / 60);
      h = h < 10 ? "0" + h : h;
      let min = value % 60;
      min = min < 10 ? "0" + min : min;
      return h + ":" + min;
    }
  }
};
</script>

<style scoped>
.timer-start-format {
  font-size: 45px;
  color: rgb(83, 147, 231);
}

.timer-stop-format {
  font-size: 45px;
  color: rgb(236, 133, 130);
}

.sec-format {
  font-size: 35px;
  color: rgb(105, 105, 105);
}

.btn-circle.btn-xl {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  font-size: 24px;
  line-height: 1.33;
  margin-right: 5px;
}
</style>
