<template>
  <div class="container">
    <div class="nav-projet">
      <router-link class="nav-projet-link" to="/projet1">
        <div @mouseover="hover1 = true" @mouseleave="hover1 = false">01</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet2">
        <div @mouseover="hover2 = true" @mouseleave="hover2 = false">02</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet3">
        <div @mouseover="hover3 = true" @mouseleave="hover3 = false">03</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet4">
        <div @mouseover="hover4 = true" @mouseleave="hover4 = false">04</div>
      </router-link>
      <router-link class="nav-projet-link" to="/projet5">
        <div @mouseover="hover5 = true" @mouseleave="hover5 = false">05</div>
      </router-link>
    </div>

    <div class="container-img">
      <img class="d-none" :class="{hover: hover1}" src="../assets/img/test.jpg" alt />
      <img class="d-none" :class="{hover: hover2}" src="../assets/img/test2.jpg" alt />
      <img class="d-none" :class="{hover: hover3}" src="../assets/img/test.jpg" alt />
      <img class="d-none" :class="{hover: hover4}" src="../assets/img/test.jpg" alt />
      <img class="d-none" :class="{hover: hover5}" src="../assets/img/test.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
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
