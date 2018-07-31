<template>
  <div class="row outer">
    <div class="inner">
      <h1 v-lang.activity></h1>
      <img src="/src/assets/img/lettuce.jpg" class="img-circle img-responsive">
    </div>
    <div class="inner" >
        <div class="content-panel" style="width: 100%;">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td v-lang.type> </td>
                <td>{{activityFormat.type}}</td>
              </tr>
              <tr>
                <td v-lang.dth></td>
                <td> {{activityFormat.dth}} days left</td>
              </tr>
              <tr>
                <td v-lang.ptd></td>
                <td>{{activityFormat.ptd}}</td>
              </tr>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="inner">
        <router-link tag="button" class="btn btn-info btn-circle" to="/control"><i class="fa fa-sliders-h fa-3x"></i></router-link>
        <router-link tag="button" class="btn btn-default btn-circle" to="/setting"><i class="fa fa-cogs fa-3x"></i></router-link>
      </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["activityFormat"])
  },
  created() {
    console.log(this.activityFormat);
  }
};
</script>


<style scoped>
.outer {
  width: 100%;
  text-align: center;
}

.inner {
  display: inline-block;
  width: 50%;
}
.block {
  display: inline;
}

.circle {
  border-radius: 50%;
}

th,
td {
  font-size: 23px;
}

.btn-circle {
  width: 120px;
  height: 120px;
  padding: 6px 0px;
  border-radius: 60px;
  text-align: center;
  line-height: 1.42857;
  margin: 20px;
}
</style>