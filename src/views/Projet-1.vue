<template>
  <div class="container-projet">
    <Back />
    <header class="header-projet projet-1">
      <a class="nav-projet-link nav-link-01">01</a>
      <router-link class="nav-next" to="/about">O2</router-link>
      <router-link class="nav-prev" to="/projet5">05</router-link>
      <Scroll />
    </header>
    <section>
      <p class="desc">
        Lapetitephoho.C est un projet d'une photographe amateur. À travers ce site, vous pouvez y trouver son Portfolio
        sous forme de site vitrine. Elle réalise aussi bien des portraits en couleurs qu'en noir et blanc mais aussi des
        photos de paysages ou d'animaux.
      </p>
      <Slider
        v-bind:images=" 
          [
          '/static/img/projet1.jpg',
          '/static/img/projet1.jpg'
           ]"
      />
    </section>
    <Footer />
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
import Footer from "../components/FooterProjet";
import Scroll from "../components/Scroll";
import Back from "../components/Back";
export default {
  name: "projet1",
  components: {
    Slider,
    Footer,
    Scroll,
    Back
  },
  data() {
    return {};
  }
};
</script>