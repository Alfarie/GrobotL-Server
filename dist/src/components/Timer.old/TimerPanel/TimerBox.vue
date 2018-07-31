<template>
  <div class="grey-panel">
        <div class="text-center" > 
            <span class="timer-start-format">{{data[0] | timeFormat}}</span> 
            <span style="text-align: center; margin: 40px; font-size: 30px;"> To</span>  
            <span class="timer-stop-format">{{data[1]  | timeFormat}}</span>
            <transition name="fade" mode="out-in">
                <div class="pull-right" style="margin-top: 8px;" v-if="isEdit">
                 <!-- <button type="button" class="btn btn-default btn-circle btn-xl" ><i class="fa fa-edit"></i></button> -->
                <button type="button" class="btn btn-danger btn-circle btn-xl" @click="deleteIndex"><i class="fa fa-trash-alt"></i></button>
                </div>
            </transition>
        </div>
  </div>
</template>

<script>
export default {
  props: ["data", "index"],
  methods: {
    deleteIndex(){
        this.$store.dispatch('deleteIndexList', {type: this.$route.params.id, data: this.index});
    }  
  },
  computed: {
    isEdit() {
      return this.$route.query.edit ? true : false;
    }
  },
  filters: {
    timeFormat(value) {
      let h = Math.floor(value / 60);
      h = h < 10 ? "0" + h : h;
      let min = value % 60;
      min = min < 10 ? "0" + min : min;
      return h + ":" + min;
    }
  }
};
</script>

<style scoped>

.btn-circle.btn-xl {
    width: 70px;
    height: 70px;
    padding: 10px 16px;
    border-radius: 35px;
    font-size: 24px;
    line-height: 1.33;
}

.btn-circle {
    width: 30px;
    height: 30px;
    padding: 6px 0px;
    border-radius: 15px;
    text-align: center;
    font-size: 12px;
    line-height: 1.42857;
}


.grey-panel {
  text-align: center;
  background: #e9e9eb;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
}

.grey-panel:hover {
  box-shadow: 1px 4px 2px rgba(0, 0, 0, 0.2);
}

.timer-start-format {
  font-size: 60px;
  color: rgb(83, 147, 231);
}

.timer-stop-format {
  font-size: 60px;
  color: rgb(236, 133, 130);
}
</style>

