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

import { TweenLite } from "gsap";

export default {
  name: "TemplateProject",
  props: [
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
    var html = document.documentElement;
    var body = document.body;

    var scroller = {
      target: document.querySelector("#scroll-container"),
      ease: 0.05, // <= scroll speed
      endY: 0,
      y: 0,
      resizeRequest: 1,
      scrollRequest: 0
    };

    var requestId = null;

    TweenLite.set(scroller.target, {
      rotation: 0.01,
      force3D: true
    });

    window.addEventListener("load", onLoad);

    function onLoad() {
      updateScroller();
      window.focus();
      window.addEventListener("resize", onResize);
      document.addEventListener("scroll", onScroll);
    }

    function updateScroller() {
      var resized = scroller.resizeRequest > 0;

      if (resized) {
        var height = scroller.target.clientHeight;
        body.style.height = height + "px";
        scroller.resizeRequest = 0;
      }

      var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      scroller.endY = scrollY;
      scroller.y += (scrollY - scroller.y) * scroller.ease;

      if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
        scroller.y = scrollY;
        scroller.scrollRequest = 0;
      }

      TweenLite.set(scroller.target, {
        y: -scroller.y
      });

      requestId =
        scroller.scrollRequest > 0
          ? requestAnimationFrame(updateScroller)
          : null;
    }

    function onScroll() {
      scroller.scrollRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }

    function onResize() {
      scroller.resizeRequest++;
      if (!requestId) {
        requestId = requestAnimationFrame(updateScroller);
      }
    }
  }
};
</script>