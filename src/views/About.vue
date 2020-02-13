<template>
  <div class="container-about">
    <CustomCursor />
    <div v-bind:style="{ ['width']: scrollbar() + '%' }" id="mybar"></div>
    <Back />
    <div class="header-page about">
      <h1 class="text-anim">ADRIEN</h1>
    </div>
    <section class="desc">
      <h2>About</h2>
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
    <section>
      <h2>Skill</h2>
      <div class>
        <p class="p-1">aaaaaaaaaaaaa</p>
      </div>
    </section>
  </div>
</template>

<script>
import Back from "../components/Back";
import CustomCursor from "../components/CustomCursor";
// import simpleParallax from "simple-parallax-js";
export default {
  components: {
    Back,
    CustomCursor
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
  // updated() {
  //   var image = document.getElementsByClassName("text-anim");
  //   new simpleParallax(image, {
  //     scale: 1.8
  //   });
  // },

  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    window.addEventListener("scroll", this.scrollbar);
  }
};
</script>