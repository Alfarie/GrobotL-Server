<template>
  <div>
    <div class="row text-center">
      <div class="col-md-12">
        <div style="display: inline;">
          <img src="/src/assets/img/setclock.png" style="height: 80px;">
        </div>
        <span style="font-size: 30px;"> Date & Time </span>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-12 text-center">

        <div style="display: block; margin: 20px;">
          <h1 v-lang.date></h1>
          <input type="date" name="" id="setdate" class="form-control timer text-center" style="width: 50%;">
        </div>

        <div style="display: block; margin: 20px;">
          <h1 v-lang.time></h1>
          <input type="text" class="form-control timer text-center" name="" id="settime" style="width: 50%">
        </div>

      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div class="row" v-if="isDateChange">
        <div class="col-xs-12 col-lg-12 outer" >
          <div class="grey-panel inner" @click="Submit">
            <div class="text-center">
              <span class="timer-start-format" v-lang.update></span>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade">
            <div class="row" style="margin-top: 30px;" v-if="showAlert">
              <div class="col-xs-12 col-md-6 col-lg-12">
                <div class="alert alert-success text-center">
                    <h2><strong>Success: </strong> Datetime is updated.  </h2>
                </div>
              </div>
            </div>
          </transition>

  </div>
</template>


<script>
var $ = (window.jQuery = require("jquery"));
import moment from "moment";
export default {
  data() {
    return {
      isDateChange: false,
      isTimeChange: false,
      date: "2018-01-01",
      time: "00:00",
      showAlert: false
    };
  },
  methods: {
    Submit() {
      // 2018-02-23 02 : 00
      this.showAlert = false;
      // console.log(this.date, this.time);
      this.$store.dispatch("popupUpdateModal");
      this.$store.dispatch("updateDateTime", {
        date: this.date,
        time: this.time
      });
    }
  },
  mounted() {
    $("#settime").wickedpicker({
      title: this.id,
      twentyFour: true,
      now: "00: 00"
    });

    $("#settime").on("change", event => {
      this.time = event.target.value;
      this.isTimeChange = true;
    });
    $("#setdate").on("change", event => {
      this.date = event.target.value;
      this.isDateChange = true;
    });
  },
  messages: {
    en: {
      date: "Date",
      time: "Time"
    },
    th: {
      date: "วัน/เดือน/ปี",
      time: "เวลา"
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
  width: 50%;
  margin-top: 30px;
}

.timer {
  height: 80px;
  font-size: 40px;
  display: inline-block;
}

.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.opacity-passive {
  opacity: 0.5;
}

.opacity-active {
  opacity: 1;
}

.grey-panel:hover {
  box-shadow: 0 4px 2px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.timer-start-format {
  font-size: 50px;
  color: rgb(83, 147, 231);
}

.timer-stop-format {
  font-size: 50px;
  color: rgb(236, 133, 130);
}
</style>
