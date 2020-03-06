<template>
  <div class="viewportt">
    <div id="scroll-containerr" class="container-projet scroll-containerr">
      <CustomCursor />
      <BtnBack />
      <header class="header-projet" :class="img_bg">
        <a class="nav-projet-link" :class="nav_link_05">{{nav_active}}</a>
        <router-link class="nav-next" :to="link_next">{{nav_next}}</router-link>
        <router-link class="nav-prev" :to="link_prev">{{nav_prev}}</router-link>
        <Scroll />
      </header>
      <div class="bg-white">
        <section class="container-details-projet">
          <div class="flex">
            <div class="col-4 pd-20">
              <p class="title-desc">Role</p>
              <p class="p-desc">{{text_role}}</p>
              <br />
              <p class="title-desc">Client</p>
              <p class="p-desc">{{text_client}}</p>
              <br />
              <p class="title-desc">Website</p>
              <p class="p-desc">{{text_website}}</p>
            </div>
            <div class="col-4 pd-20">
              <p class="p-desc">{{text_desc}}</p>
            </div>
            <div class="col-12 box">
              <img :src="require(`@/assets/img/${text_name}.jpg`)" :alt="text_name" />
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
  name: "TemplateProject",
  props: [
    "text_name",
    "nav_active",
    "nav_link_05",
    "nav_next",
    "link_next",
    "nav_prev",
    "link_prev",
    "text_role",
    "text_client",
    "text_website",
    "text_desc",
    "img_bg"
  ],
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