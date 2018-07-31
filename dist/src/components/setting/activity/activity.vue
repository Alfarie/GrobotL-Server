<template>
  <div class="row">
    <div class="row  text-center">
      <div class="col-md-12">
        <div>
          <div style="display: inline;">
            <img src="/src/assets/img/leaf.png" style="height: 60px;">
          </div>
          <span style="font-size: 30px;" v-lang.activity></span>
        </div>
      </div>
    </div>
    <transition name="slide" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>


