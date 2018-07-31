<template>
  <div class="container-fluid">
      <div class="row">
          <div class="col-xs-12 col-md-3">
              <app-control-panel></app-control-panel>
          </div>
          <div class="col-md-8">
            <transition
              name="fade" mode="out-in">
              <router-view></router-view>
            </transition>
          </div>
      </div>
  </div>
</template>

<script>
  import ControlPanel from './ControlPanel.vue'
  export default{
    components: {
      appControlPanel: ControlPanel
    }
  }
</script>
<style scoped>
.timer {
    height: 60px;
    font-size: 40px;
    display: inline-block;
  }

</style>
