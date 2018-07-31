<template>
  <div class="form-group" @mouseover="show = true" @mouseout="show =false" style="margin:30px;">
    <transition-group name="slide" mode="in-out">
      <span style="display: inline-block;" key="input">
        <label style="font-size: 20px;"> {{title}} </label>
        <input type="text" 
            class="form-control nutrion-input" 
            placeholder="Input field" 
            :value="valueStr"
            @input="change">
      </span>

      <span style="display: inline-block; margin-left: 10px;" v-if="show" key="button">
        <button type="button" class="btn btn-success btn-circle btn-xl" @click="inc">
          <i class="fa fa-plus fa-2x"></i>
        </button>
        <button type="button" class="btn btn-danger btn-circle btn-xl" @click="dec" >
          <i class="fa fa-minus fa-2x"></i>
        </button>
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    value: {
      type: Number,
      default: 0
    },
    operand: {
        default: 0.1
    }
  },
  computed:{
      valueStr(){
          return this.value.toFixed(2);
      }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    change(event) {
      this.$emit("input", event.target.value);
    },
    inc(){
        let value = this.value + this.operand;
        value = parseFloat(value.toFixed(2));
        this.$emit("input", value);
    },
    dec(){
        let value = this.value - this.operand
        if( value <=0){
            value = this.operand;
        }
        value = parseFloat(value.toFixed(2));
        this.$emit("input", value);
    },
  }
};
</script>


<style scoped>
.nutrion-input {
  height: 80px;
  font-size: 40px;
  width: 8em;
  text-align: center;
}

.btn-circle.btn-xl {
  margin-bottom: 20px;
  width: 65px;
  height: 65px;
  padding: 10px 16px;
  border-radius: 32px;
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
  animation: slide-out 0.5s ease-out forwards;
  transition: opacity 0.5s;
  opacity: 0;
  position: absolute;
}

.slide-move {
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateX(+20px);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(+20px);
  }
}
</style>
