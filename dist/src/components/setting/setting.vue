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
  import ControlPanel from './controlpanel/controlpanel.vue'
  export default{
    components: {
      appControlPanel: ControlPanel
    },
    created(){
      this.$store.dispatch('GetControl');
      this.$store.dispatch('GetWaterControl');
    }
  }
</script>
