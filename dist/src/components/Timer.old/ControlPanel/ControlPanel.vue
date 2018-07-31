<template>
  <div class="container-fluid">
    <div class="row">
      <transition-group name="slide" mode="out-in">
        
          <div class="col-md-12 col-lg-12" style="margin-top: 30px;" @click="clickDevice()" key="deviceButton">
            <div class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/plug.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.selectch></h2>
              </div>
            </div>
          </div>

          <div v-if="showDevice" key="showdevice">
            <app-actuator-list></app-actuator-list>
          </div>


          <div class="col-md-12 col-lg-12" style="margin-top: 25px;"  @click="clickEdit" key="editbutton">
            <div class="grey-panel pn">
              <div style="display: inline">
                <img src="/src/assets/img/wrench.png" style="width: 80px; height: 100%; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.edittimer></h2>
              </div>
            </div>
          </div>

          <div class="col-md-10 col-md-offset-2" v-if="showEdit" key="editpanel">
            
            <router-link :to="linkModeTimer" tag="div" style="margin-top: 10px;" class="grey-panel pn opacity-passive" active-class="opacity-active">
              <div style="display: inline">
                <img src="/src/assets/img/mode.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.mode></h2>
              </div>
            </router-link>
            <router-link :to="linkAddTimer" tag="div" style="margin-top: 10px;" class="grey-panel pn opacity-passive" active-class="opacity-active">
              <div style="display: inline">
                <img src="/src/assets/img/plus.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.addtimer></h2>
              </div>
            </router-link>
            <router-link :to="linkEditTimer" style="margin-top: 10px;" tag="div" class="grey-panel pn opacity-passive" active-class="opacity-active">
              <div style="display: inline">
                <img src="/src/assets/img/error.png" style="width: 80px; margin: 10px;">
              </div>
              <div class="block" style="margin: 20px;">
                <h2 v-lang.deletetimer></h2>
              </div>
            </router-link>
          </div>

          <div class="col-md-12 col-lg-12" style="margin-top: 30px;" @click="back" key="backtohome">
            <div class="grey-panel pn">
              <div class="block" style="margin: 20px;">
                <h2>
                  <i class="fa fa-chevron-left"></i> <span v-lang.backtohome></span></h2>
              </div>
            </div>
          </div>


        
      </transition-group>

    </div>
  </div>
</template>

<script>
  import ActuatorList from "./ActuatorList.vue";
  import AddTimer from "./AddTimer.vue";

  export default {
    components: {
      appActuatorList: ActuatorList,
      appAddTimer: AddTimer
    },
    data() {
      return {
        showDevice: false,
        showEdit: true
      };
    },
    computed: {
      linkAddTimer() {
        return "/timer/" + this.$route.params.id + "/add";
      },
      linkEditTimer() {
        return {
          path: "/timer/" + this.$route.params.id,
          query: {
            edit: true
          }
        };
      },
      linkModeTimer() {
        return {
          path: "/timer/" + this.$route.params.id + '/mode',
        };
      }
    },
    methods: {
      back() {
        this.$router.push({
          name: "home"
        });
      },
      addTimer() {},
      clickDevice() {
        this.showDevice = !this.showDevice;
        this.showEdit = false;
      },
      clickEdit(){
        this.showEdit = !this.showEdit;
        this.showDevice = false;
      }
    }
  };

</script>


<style scoped>
  .slide-enter {
    opacity: 0;
    /*transform: translateY(20px);*/
  }

  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }

  .slide-leave {}

  .slide-leave-active {
    
    opacity: 0;
    position: absolute;
  }

  .slide-move {
    transition: transform .5s;
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
