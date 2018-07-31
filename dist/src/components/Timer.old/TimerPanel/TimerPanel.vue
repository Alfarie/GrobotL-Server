<template>
  <div class="row text-center">
    <div class="col-md-10 col-md-offset-2">
          <div> 
            <div style="display: inline;">
              <img :src="imgLink" style="height: 60px;">
            </div>
              <span style="font-size: 30px;">TIMER LIST {{$route.params.id | toUpperCase}}</span> 
          </div> 
    </div>

    <transition-group name="slide">
      <div class="col-md-10 col-md-offset-2 test" v-for="(tl,ind) in timerList" :key="$route.params.id + '-' +ind">
        <app-timer-box :data="tl" :index="ind"></app-timer-box>
      </div>
    </transition-group>
    <div class="col-md-10 col-md-offset-2 test" v-if="!timerList">
      <div class="alert alert-info">
        <strong style="font-size: 30px;">No timer list.</strong>
      </div>
    </div>
  </div>
</template>

<script>
import timerList from "./timerlist.js";
import TimerBox from "./TimerBox";
export default {
  data() {
    return {
      list: timerList
    };
  },
  computed: {
    timerList() {
      return this.$store.getters.getTimer[this.$route.params.id];
    },
    imgLink(){
      return '/src/assets/img/' + this.$route.params.id + '.png'
    }
  },
  components: {
    appTimerBox: TimerBox
  },

  created() {
    console.log("timer panel created");
  }
};
</script>

<style scoped>
.rcorners {
  border-radius: 25px;
  border: 2px solid rgb(199, 240, 142);
}
.test {
  margin-top: 20px;
}

.slide-enter {
  opacity: 0;
  /*transform: translateY(20px);*/
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-20px);
  }
}
</style>
