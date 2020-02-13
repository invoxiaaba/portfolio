<template>
  <div class="container-projet">
    <CustomCursor />
    <Back />
    <header class="header-projet projet-2">
      <a class="nav-projet-link nav-link-02">02</a>
      <router-link class="nav-next" to="/projet3">O3</router-link>
      <router-link class="nav-prev" to="/projet1">01</router-link>
      <Scroll />
    </header>
    <div class="bg-white">
      <section>
        <p class="p-details">
          Lapetitephoho.C est un projet d'une photographe amateur. À travers ce site, vous pouvez y trouver son Portfolio
          sous forme de site vitrine. Elle réalise aussi bien des portraits en couleurs qu'en noir et blanc mais aussi des
          photos de paysages ou d'animaux.
        </p>
        <Slider
          v-bind:images="
          [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg'
           ]"
        />
      </section>
    </div>
    <Footer />
  </div>
</template>


<script>
import Slider from "../components/Slider";
import Back from "../components/Back";
import Footer from "../components/FooterProjet";
import CustomCursor from "../components/CustomCursor";

export default {
  name: "projet2",
  components: {
    Slider,
    Back,
    Footer,
    CustomCursor
  },
  data() {
    return {};
  }
};
</script>