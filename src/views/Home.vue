<template>
  <div class="container container-home">
    <router-link to="/about">
      <div ref="profile" class="nav-prolife">About</div>
    </router-link>
    <NavProjet />
  </div>
</template>

<script>

import NavProjet from "@/components/NavProjet";
import { TimelineLite, Back } from "gsap";

export default {
  name: "home",
  components: {
    NavProjet
  },
  mounted() {
    const { profile } = this.$refs;
    const timeline = new TimelineLite();

    timeline.from(profile, 1, {
      y: 30,
      opacity: 0,
      delay: 0.9,
      ease: Back.easeInOut
    });
  }
};
</script>