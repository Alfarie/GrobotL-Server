

<template>
<div class="row" style="margin-top: 20px;">
      <div class="col-md-4" v-for="i in getPlants" :key="i.name">
        <div class="thumbnail">
          <img :src="'/src/assets/img/plant/' + i.image" style="width: 100%; height: 220px;">
          <div class="caption">
            <div style="display: inline-block">
              <h3>{{i.name}}
                <small></small>
              </h3>
            </div>
            <div style="display: inline-block; margin-top:10px;" class="pull-right">
              <router-link tag="button" :to="{name: 'submit', params: i}" type="button" class="btn btn-success btn-lg" > Choose ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPlants"])
  }
};
</script>