<template>
  <div id="app">
    <div class="container-projet">
      <header class="header-projet">
        <a class="nav-projet-link nav-link-01">01</a>
        <router-link class="nav-next" to="/about">O2</router-link>
        <router-link class="nav-prev" to="/projet5">05</router-link>
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </header>
      <section>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quod fuga repellendus debitis perspiciatis,
          doloribus officiis atque non necessitatibus incidunt obcaecati eos autem aut enim voluptatibus neque qui at commodi.
        </p>
        <Slider />
      </section>
    </div>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";
export default {
  name: "projet1",
  components: {
    Slider
  },
  data() {
    return {
      images: [
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ]
    };
  }
};
</script>