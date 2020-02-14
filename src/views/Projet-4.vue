<template>
  <div class="container-projet">
    <CustomCursor />
    <BtnBack />
    <header class="header-projet projet-4">
      <a class="nav-projet-link nav-link-04">04</a>
      <router-link class="nav-next" to="/projet5">O5</router-link>
      <router-link class="nav-prev" to="/projet3">03</router-link>
      <Scroll />
    </header>
    <div class="bg-white">
      <section>
        <p
          class="p-details"
        >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iusto debitis ut beatae? Aut dolore veniam soluta quaerat numquam fuga. Facilis optio accusamus voluptates sit, tempore id aut blanditiis nostrum.</p>
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
import BtnBack from "../components/BtnBack";
import Footer from "../components/FooterProjet";
import CustomCursor from "../components/CustomCursor";

export default {
  name: "projet4",
  components: {
    Slider,
    BtnBack,
    Footer,
    CustomCursor
  },
  data() {
    return {};
  }
};
</script>