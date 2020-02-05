<template>
  <div class="container">
    <CustomCursor />
    <div class="nav-projet">
      <router-link class="nav-projet-link" to="/projet1">
        <div ref="nav1" @mouseover="hover1 = true" @mouseleave="hover1 = false">01</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet2">
        <div ref="nav2" @mouseover="hover2 = true" @mouseleave="hover2 = false">02</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet3">
        <div ref="nav3" @mouseover="hover3 = true" @mouseleave="hover3 = false">03</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet4">
        <div ref="nav4" @mouseover="hover4 = true" @mouseleave="hover4 = false">04</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet5">
        <div ref="nav5" @mouseover="hover5 = true" @mouseleave="hover5 = false">05</div>
      </router-link>
    </div>

    <div class="container-img">
      <div class="d-none header-page projet-1" :class="{hover: hover1}"></div>
      <div class="d-none header-page projet-2" :class="{hover: hover2}"></div>
      <div class="d-none header-page projet-3" :class="{hover: hover3}"></div>
      <div class="d-none header-page projet-4" :class="{hover: hover4}"></div>
      <div class="d-none header-page projet-5" :class="{hover: hover5}"></div>
    </div>
  </div>
</template>

<script>
import CustomCursor from "./CustomCursor";
export default {
  components: {
    CustomCursor
  },
  name: "NavProjet",
  props: {
    msg: String
  },
  data() {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
      hover5: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
