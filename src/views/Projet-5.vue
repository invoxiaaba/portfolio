<template>
  <div class>
    <div class="container-projet">
      <CustomCursor />
      <BtnBack />
      <header class="header-projet projet-5">
        <a class="nav-projet-link nav-link-05">05</a>
        <router-link class="nav-next" to="/projet1">O1</router-link>
        <router-link class="nav-prev" to="/projet4">04</router-link>
        <Scroll />
      </header>
      <div class="bg-grey">
        <section class="container-details-projet">
          <div class="flex">
            <div class="col-4 pd-20">
              <p class="title-desc">Role</p>
              <p class="p-desc">Front end Development</p>
              <br />
              <p class="title-desc">Client</p>
              <p class="p-desc">School work</p>
              <br />
              <p class="title-desc">Website</p>
              <p class="p-desc">bellybump.fr</p>
            </div>
            <div class="col-4 pd-20">
              <p class="p-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iusto debitis ut beatae? Aut dolore veniam soluta quaerat
                numquam fuga. Facilis optio accusamus voluptates sit, tempore id aut blanditiis nostrum.
              </p>
            </div>
            <div class="col-12 box">
              <img src="../assets/img/bellybump.jpg" alt="bellybump" />
              <div class="overlay"></div>
            </div>
            <div class="col-12 box">
              <img src="../assets/img/projet5/maquette_bellybump.jpg" alt="bellybump" />
              <div class="overlay"></div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import BtnBack from "../components/BtnBack";
import Footer from "../components/FooterProjet";
import CustomCursor from "../components/CustomCursor";

import { TimelineMax, Power4 } from "gsap";

export default {
  name: "projet5",
  components: {
    BtnBack,
    Footer,
    CustomCursor
  },
  data() {
    return {};
  },

  mounted() {
    var animateIn = new TimelineMax();

    animateIn.fromTo(
      ".overlay",
      2,
      {
        skewX: 30,
        scale: 1.5
      },
      {
        skewX: 0,
        xPercent: 100,
        transformOrigin: "0% 100%",
        ease: Power4.easeOut
      }
    );
  }
};
</script>