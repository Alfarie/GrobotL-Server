<template>
<div class="container-fluid" style="margin-bottom: 20px;">
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2">
    </div>
    <div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
        <img src="/src/assets/img/logo1.png" alt="" height="52" width="181">
        <!-- <h2 style="font-size: 35px;"><b>Grobot-L 2.0</b> <small>{{language | upperCase}}</small></h2> -->
    </div>
    <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7" style="margin-top: 20px; text-align: center;">
        
        <div class="pull-right">
           <app-date-time></app-date-time>
            <img src="/src/assets/img/connection.png" style="height: 40px;">
            <span :class="[{online: connect}, {offline: !connect}]">{{isConnect}}...</span> 
        </div>
    </div>

    
</div>
</template>

<script>
import DateTime from "./DateTime.vue";
import {mapGetters} from 'vuex';
export default {
  computed:{
    ...mapGetters(['isConnect', 'connect'])
  },
  components: {
    appDateTime: DateTime
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    }
  },
  created(){
    this.$options.sockets.datetime = data=>{
      this.$store.dispatch('', data);
    }
  }
};
</script>


<style scoped>
.online {
  color: rgb(8, 235, 20);
  font-size: 20px;
}
.offline {
  color: rgb(223, 105, 105);
  font-size: 20px;
}
</style>
