<template>
  <div class="container-fluid">
    <div class="row">
      <transition-group name="slide" mode="out-in" appear>
        <router-link tag="div" to="/setting" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="configuration">
          <div class="grey-panel pn">
            <div style="display: inline">
              <img src="/src/assets/img/settings.png" style="width: 80px; margin: 10px;">
            </div>
            <div class="block" style="margin: 20px;">
              <h2 v-lang.configuration></h2>
            </div>
          </div>
        </router-link>
        <router-link tag="div" to="/setting/datetime" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="datetime">
          <div class="grey-panel pn">
            <div style="display: inline">
              <img src="/src/assets/img/setclock.png" style="width: 80px; margin: 10px;">
            </div>
            <div class="block" style="margin: 20px;">
              <h2 v-lang.setdatetime></h2>
            </div>
          </div>
        </router-link>

        <router-link tag="div" to="/setting/activity/select" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="activity">
          <div class="grey-panel pn">
            <div style="display: inline">
              <img src="/src/assets/img/leaf.png" style="width: 80px; margin: 10px;">
            </div>
            <div class="block" style="margin: 20px;">
              <h2 v-lang.setactivity></h2>
            </div>
          </div>
        </router-link>

        <router-link tag="div" to="/setting/wifi/list" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="wifi">
          <div class="grey-panel pn">
            <div style="display: inline">
              <img src="/src/assets/img/wifi.png" style="width: 80px; margin: 10px;">
            </div>
            <div class="block" style="margin: 20px;">
              <h2 v-lang.wifi></h2>
            </div>
          </div>
        </router-link>


        <router-link tag="div" to="home" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="backtohome">
          <div class="grey-panel pn">
            <div class="block" style="margin: 20px;">
              <h2>
                <i class="fa fa-chevron-left"></i> <span v-lang.backtohome></span></h2>
            </div>
          </div>
        </router-link>

      </transition-group>

    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
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
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 0.5s;
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

.vertical-center {
  display: flex;
  align-items: center;
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
