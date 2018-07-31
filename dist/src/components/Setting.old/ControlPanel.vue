<template>
  <div class="container-fluid">
    <div class="row">
      <transition-group name="slide" mode="out-in">


          <router-link tag="div" to="/datetime" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="datetime">
            <div class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/setclock.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.setdatetime></h2>
              </div>
            </div>
          </router-link>

           <router-link tag="div" to="/activity" class="col-md-12 col-lg-12" style="margin-top: 30px;" key="activity">
            <div class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/leaf.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.setactivity></h2>
              </div>
            </div>
          </router-link>

          <router-link tag="div" to="home" class="col-md-12 col-lg-12" style="margin-top: 30px;"  key="backtohome">
            <div class="grey-panel pn">
              <div class="block" style="margin: 20px;">
                <h2>
                  <i class="fa fa-chevron-left"></i> กลับหน้าหลัก</h2>
              </div>
            </div>
          </router-link>


      </transition-group>
    </div>
  </div>
</template>


<style>
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

