<template>
  <div class="row" style="margin-top: 60px;">


    <div class="row">
      <div class="col-lg-10 col-lg-offset-2">
        <div style="display: inline-block; width: 400px;">
          <img :src="'/src/assets/img/plant/' + plantData.image" class="img-responsive img-circle">
        </div>
        <div style="display: inline-block;">
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
                  <td>{{plantData.name}}</td>
                </tr>
                <tr>
                  <td v-lang.dth></td>
                  <td> {{plantData.days}} days</td>
                </tr>
                <tr>
                  <td v-lang.ptd></td>
                  <td>{{getDate}}</td>
                </tr>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="row text-center" style="margin-top: 80px;">
      <div class="col-lg-6 col-lg-offset-3" @click="update">
        <div class="grey-panel pn" style="padding: 10px;" >
          <h1 style="color: rgb(83, 147, 231)" v-lang.update></h1>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  import {
    mapGetters
  } from 'vuex'
  import moment from 'moment'
  export default {
    data() {
      return {
        plantData: {}
      };
    },
    computed: {
      ...mapGetters(['getDate'])
    },
    methods: {
          update(){
              this.$store.dispatch('SetActivity', {
                type: this.plantData.name,
                dth: this.plantData.days,
                ptd: moment(this.getDate, "YYYY-MM-DD").add(this.plantData.days,"days").format("YYYY-MM-DD"),
                image: this.plantData.image
              });
              this.$store.dispatch('popupUpdateModal');
              
          }
      },
    created() {
      this.plantData = this.$route.params;
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
    font-size: 30px;
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
