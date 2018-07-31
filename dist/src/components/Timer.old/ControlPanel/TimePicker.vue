<template>
  <div>
    <input class="form-control timer" type="text" :id="id" :placeholder="place" :key="place" size="15">
  </div>
</template>

<script>
// npm install jquery --save-dev
var $ = (window.jQuery = require("jquery"));
require('../../../assets/js/wickedpicker.min.js')
export default {
  props: ["place", "id", 'value'],
  data(){
      return {
          startDate: ''
      }
  },
  mounted() {
   $('#' + this.id).wickedpicker({
     title: this.id,
     twentyFour: true,
     now: "00: 00"
   });

    $('#' + this.id).on('change', (event)=>{
      this.$emit('input', event.target.value);
    })

  } 
};
</script>

<style scoped>
.timer {
  height: 80px;
  font-size: 40px;
  display: inline-block;
}
</style>

