<template>
  <div class="container-about">
    <CustomCursor />
    <BtnBack />
    <div class="container-spotify flex-center">
      <img class="spotify" :src="require(`@/assets/img/svg_spotify.png`)" />
      <a
        href="https://open.spotify.com/playlist/78YQbRSP9ANHff1qpQdvay?si=fL2AqpXgRtWJY__ApiGXbg"
        target="_blank"
      >
        <img class="spotify-logo" :src="require(`@/assets/img/spotify-logo.png`)" />
      </a>
    </div>
    <div class="header-page header-profil">
      <div class="h-v-center">
        <h1 data-scroll-speed="9" ref="titleProfile" class="h1-profil">Adrien 👋</h1>
        <h2 ref="subtitleProfile" class="h2-profil">Front end developer</h2>
      </div>
    </div>

    <section v-scrollanimation class="p-details">
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
    <section class="p-details">
        <h2>Skills</h2>
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

    <section class="flex">
      <h2 data-scroll-speed="7" class="col-12 title-parallax">My passion</h2>
      <br />
      <div class="container-polaroid">
        <div class="polaroid col-12">
          <Slider
            v-bind:images="
          [
         '/static/img/polaroid-1.jpg',
         '/static/img/polaroid-2.jpg',
         '/static/img/polaroid-3.jpg'
           ]"
            v-bind:texts="
          [
         'Festivals',
         'Ski',
         'Travels'
           ]"
          />
        </div>
      </div>
    </section>
    <FooterProfil />
  </div>
</template>

<script>
import BtnBack from "../components/BtnBack";
import FooterProfil from "../components/FooterProfil";
import Slider from "../components/Slider";
import CustomCursor from "../components/CustomCursor";
import { TimelineLite, Back } from "gsap";
import JQuery from "jquery";
let $ = JQuery;

export default {
  components: {
    BtnBack,
    CustomCursor,
    FooterProfil,
    Slider
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

  computed() {},
  methods() {},

  mounted() {
    $.fn.moveIt = function() {
      var $window = $(window);
      var instances = [];

      $(this).each(function() {
        instances.push(new moveItItem($(this)));
      });

      window.addEventListener(
        "scroll",
        function() {
          var scrollTop = $window.scrollTop();
          instances.forEach(function(inst) {
            inst.update(scrollTop);
          });
        },
        { passive: true }
      );
    };

    var moveItItem = function(el) {
      this.el = $(el);
      this.speed = parseInt(this.el.attr("data-scroll-speed"));
    };

    moveItItem.prototype.update = function(scrollTop) {
      this.el.css(
        "transform",
        "translateY(" + -(scrollTop / this.speed) + "px)"
      );
    };

    // Initialization
    $(function() {
      $("[data-scroll-speed]").moveIt();
    });

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