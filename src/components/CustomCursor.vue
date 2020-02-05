<template>
  <div>
    <div class="cursor"></div>
    <div class="cursor-follower"></div>
  </div>
</template>

<script>
import JQuery from "jquery";
let $ = JQuery;
import { TimelineLite, Back, TweenMax } from "gsap";
export default {
  mounted() {
    var cursor = $(".cursor"),
      follower = $(".cursor-follower");

    var posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;

    TweenMax.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
          css: {
            left: posX - 20,
            top: posY - 20
          }
        });

        TweenMax.set(cursor, {
          css: {
            left: mouseX,
            top: mouseY
          }
        });
      }
    });

    $(document).on("mousemove", function(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    $(".nav-projet-link").on("mouseenter", function() {
      cursor.addClass("active");
      follower.addClass("active");
    });

    $(".nav-projet-link").on("mouseleave", function() {
      cursor.removeClass("active");
      follower.removeClass("active");
    });

    const { nav1, nav2, nav3, nav4, nav5 } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(nav1, 1, {
      y: 30,
      opacity: 0,
      delay: 0.1,
      ease: Back.easeInOut
    });
    timeline.from(
      nav2,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.2,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline.from(
      nav3,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.3,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline.from(
      nav4,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.4,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
    timeline.from(
      nav5,
      1,
      {
        y: 30,
        opacity: 0,
        delay: 0.5,
        ease: Back.easeInOut
      },
      "-=1.3"
    );
  },
  name: "CustomCursor"
};
</script>