<template>
  <div id="app">
    <div class="main-nav" id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">{{$t('about')}}</router-link>
    </div>

    <div class="container-lang">
      <input type="radio" id="one" value="fr" :key="fr" v-model="$i18n.locale" />
      <label for="one">FR</label>
      <br />
      <input type="radio" id="two" value="en" :key="en" v-model="$i18n.locale" />
      <label for="two">EN</label>
    </div>
    <!-- <transition name="fade" mode="out-in"> -->
    <router-view></router-view>
    <!-- </transition> -->
    <div class="border border-top"></div>
    <div class="border border-bottom"></div>
    <div class="border border-left"></div>
    <div class="border border-right"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      langs: ["fr", "en"]
    };
  }
};

</script>

<style lang="scss">
@import "./assets/scss/style.scss";

#app {
  text-align: center;
}
</style>
