<template>
  <div class="container-projet">
    <CustomCursor />
    <Back />
    <header class="header-projet projet-5">
      <a class="nav-projet-link nav-link-05">05</a>
      <router-link class="nav-next" to="/projet1">O1</router-link>
      <router-link class="nav-prev" to="/projet4">04</router-link>
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
import Back from "../components/Back";
import Footer from "../components/FooterProjet";
import CustomCursor from "../components/CustomCursor";

export default {
  name: "projet5",
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