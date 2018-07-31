<template>
  <div>
    <div class="row text-center">
      <div class="col-md-12">
        <div style="display: inline;">
          <img :src="imgLink" style="height: 80px;">
        </div>
        <span style="font-size: 30px;"> Add Timer - {{$route.params.id | toUpperCase}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-10 col-lg-offset-2 text-center">
        <div style="display: inline-block; margin: 20px;">
          <h1 class="pull-left">Start Time</h1>
          <app-time-picker id="start-time" place="Start Time" v-model="startTime"></app-time-picker>
        </div>
        <div style="display: inline-block; margin: 20px;">
          <h1 class="pull-left">Stop Time</h1>
          <app-time-picker id="stop-time" place="Start Time" v-model="stopTime"></app-time-picker>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-10 col-lg-offset-2">
        <div @click="addTimer" style="cursor: pointer;">
          <app-timer-box :data="timer"></app-timer-box>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="row" style="margin-top: 30px;" v-if="showAlert">
        <div class="col-xs-12 col-md-6 col-lg-10 col-lg-offset-2">
          <div class="alert alert-danger text-center">
            <h2>
              <strong>Failure: </strong> Start time should less than stop. </h2>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  import TimePicker from "./TimePicker.vue";
  import TimerBox from '../TimerPanel/TimerBox.vue'
  export default {
    data() {
      return {
        imgLink: '/src/assets/img/' + this.$route.params.id + '.png',
        startTime: '--:--',
        stopTime: '--:--',
        timer: [0,0],
        showAlert: false
      }
    },
    methods: {
      addTimer() {
        if (this.timer.start >= this.timer.stop) {
          this.showAlert = true;
          return;
        }
        this.$store.dispatch('addList', {
          type: this.$route.params.id,
          data: this.timer
        });
        this.$router.push({
          path: '/timer/' + this.$route.params.id
        })
      }
    },
    watch: {
      startTime(value) {
        console.log(value);
        let a = value.replace(' ', '').split(':');
        var st = parseInt(a[0]) * 60 + parseInt(a[1]);
        this.timer = [st, this.timer[1]];
      },
      stopTime(value) {
        let a = value.replace(' ', '').split(':');
        var end = parseInt(a[0]) * 60 + parseInt(a[1]);
        this.timer = [this.timer[0], end];
      }
    },
    components: {
      appTimePicker: TimePicker,
      appTimerBox: TimerBox
    }
  };

</script>


<style scoped>
  .timer {
    height: 60px;
    font-size: 40px;
    display: inline-block;
  }

</style>
