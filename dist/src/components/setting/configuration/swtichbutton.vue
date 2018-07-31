<template>
  <span style="margin-left: 10px;">
        <h3>{{title}}</h3>
        <button type="button" class="btn btn-success btn-circle btn-xl" :class="[{on: value}, {off: !value}]"  @click="ON">
          <p class="btn-text">ON</p>
        </button>
        <button type="button" class="btn btn-danger btn-circle btn-xl" :class="[{on: !value}, {off: value}]" @click="OFF">
          <p class="btn-text">OFF</p>
        </button>
    </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },
    value: {
      default: false
    }
  },
  methods: {
    ON() {
      this.$emit("input", 1);
    },
    OFF() {
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
  margin-top: 5px;
  font-size: 40px;
}
</style>
