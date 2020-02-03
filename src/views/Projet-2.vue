<template>
  <div id>
    <div class="container-projet">
      <Back />
      <header class="header-page projet-2">
        <a class="nav-projet-link nav-link-01">02</a>
        <router-link class="nav-next" to="/about">O3</router-link>
        <router-link class="nav-prev" to="/projet5">01</router-link>
        <Scroll />
      </header>
      <Slider
        v-bind:images="
          [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
           ]"
      />
    </div>
  </div>
</template>


<script>
import Slider from "../components/Slider";
import Back from "../components/Back";
export default {
  name: "projet2",
  components: {
    Slider,
    Back
  },
  data() {
    return {};
  }
};
</script>