<template>
  <span style="margin-left: 10px;">
        <h3>Water Mode</h3>
        <button type="button" class="btn btn-success btn-circle btn-xl" :class="[{on: value}, {off: !value}]"  @click="timer">
          <p class="btn-text">TIMER</p>
        </button>
        <button type="button" class="btn btn-info btn-circle btn-xl" :class="[{on: !value}, {off: value}]" @click="sequence">
          <p class="btn-text">SEQUENCE</p>
        </button>
    </span>
</template>

<script>
export default {
  props: {
    value: {
      default: false
    }
  },
  methods: {
    timer() {
        this.$emit("input", 1);
    },
    sequence() {
        this.$emit("input", 0);
    }
  }
};
</script>
<style scoped>
.off {
  opacity: 0.3;
}
.on {

}
.btn-circle.btn-xl {
  margin: 5px;
  width: 140px;
  height: 80px;
  padding: 10px 16px;
  border-radius: 30px;
  line-height: 1.33;
}

.btn-text {
  margin-top: 11px;
  font-size: 22px;
  
}
</style>
