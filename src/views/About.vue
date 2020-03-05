<template>
  <div class="container-about">
    <CustomCursor />
    <!-- <div v-bind:style="{ ['width']: scrollbar() + '%' }" id="mybar"></div> -->
    <BtnBack />
    <div class="header-page header-profil">
      <h1 ref="titleProfile" class="h1-profil">Adrien</h1>
      <h2 ref="subtitleProfile" class="h2-profil">Front end developer</h2>
      <Scroll />
    </div>

    <section v-scrollanimation class="p-details">
      <div>
        <div :style="cursorCircle" :class="{newCursor: cursorIsHidden}" class="cursor-about"></div>
        <div :style="cursorCircle" :class="{newCursor2: cursorIsHidden2}" class="cursor-about"></div>

        <span
          @mouseover="cursorIsHidden = true"
          @mouseleave="cursorIsHidden = false"
          class="span"
        >creative</span>
        ipsum dolor, sit amet
        consectetur adipisicing elit. Praesentium doloribus, corrupti soluta impedit eos quasi mollitia maxime,
        nihil eius perspiciatis molestias quos accusamus nisi necessitatibus dolore numquam, sapiente velit sit.
        <span
          @mouseover="cursorIsHidden2 = true"
          @mouseleave="cursorIsHidden2 = false"
          class="span"
        >creative</span>
        dolor, sit amet consectetur adipisicing elit. Praesentium doloribus, corrupti soluta impedit eos quasi mollitia maxime,
        nihil eius perspiciatis molestias quos accusamus nisi necessitatibus dolore numquam, sapiente velit sit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloribus, corrupti soluta impedit eos quasi mollitia maxime,
      </div>
    </section>
    <section class="p-details">
      <div class="row-column">
        <p v-scrollanimation class="p-skill">Vue JS</p>
        <p v-scrollanimation class="p-skill">React JS</p>
        <p v-scrollanimation class="p-skill">React native</p>
        <p v-scrollanimation class="p-skill">GSAP</p>
        <p v-scrollanimation class="p-skill">SASS</p>
        <p v-scrollanimation class="p-skill">Wordpress</p>
        <p v-scrollanimation class="p-skill">Node JS</p>
        <p v-scrollanimation class="p-skill">Github</p>
        <p v-scrollanimation class="p-skill">SEO</p>
      </div>
    </section>
    <FooterProfil />
  </div>
</template>

<script>
import Scroll from "../components/Scroll";
import BtnBack from "../components/BtnBack";
import CustomCursor from "../components/CustomCursor";
import FooterProfil from "../components/FooterProfil";

import { TimelineLite, Back } from "gsap";

export default {
  components: {
    Scroll,
    BtnBack,
    CustomCursor,
    FooterProfil
  },
  data() {
    return {
      cursorIsHidden: false,
      cursorIsHidden2: false,
      xPage: 0,
      yPage: 0,
      hideCursor: true,
      scrolled: 100
    };
  },

  computed: {
    cursorCircle() {
      return `transform: translateX(${this.xPage}px) translateY(${this.yPage}px) translateZ(0) translate3d(0, 0, 0);`;
    }
  },
  methods: {
    moveCursor(e) {
      setTimeout(() => {
        this.xPage = e.clientX - 15;
        this.yPage = e.clientY - 15;
      }, 100);
    },
    scrollbar() {
      var winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      var height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      this.scrolled = (winScroll / height) * 100;
      return this.scrolled;
    }
  },

  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    window.addEventListener("scroll", this.scrollbar);

    const { titleProfile, subtitleProfile } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(titleProfile, 1, {
      y: 30,
      opacity: 0,
      delay: 1.5,
      ease: Back.easeInOut
    });
    timeline.from(
      subtitleProfile,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 1.5,
        ease: Back.easeInOut
      },
      "-=2"
    );
  }
};
</script>