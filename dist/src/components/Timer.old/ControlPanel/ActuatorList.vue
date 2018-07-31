<template>
  <div>
      <div class="col-md-10 col-md-offset-2" style="margin-top: 10px;">
                        <router-link to="/timer/fan" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
                            <div style="display: inline">
                                <img src="/src/assets/img/fan.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.fan></h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-10 col-md-offset-2" style="margin-top: 10px;">
                        <router-link to="/timer/pump" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
                            <div style="display: inline">
                                <img src="/src/assets/img/pump.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.pump></h2>
                            </div>
                        </router-link>
                    </div>
                    <div class="col-md-10 col-md-offset-2" style="margin-top: 10px;">
                        <router-link to="/timer/led" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
                            <div style="display: inline">
                                <img src="/src/assets/img/led.png" style="width: 80px; margin: 10px;">
                            </div>
                            <div class="block" style="margin: 20px;">
                                <h2 v-lang.light></h2>
                            </div>
                        </router-link>
                    </div>
  </div>
</template>


<style scoped>
.vertical-center {
  display: flex;
  align-items: center;
}

.grey-panel {
  /* text-align: center; */
  background: #e9e9eb;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.opacity-passive{
    opacity: 0.5;
}
.opacity-active{
    
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
