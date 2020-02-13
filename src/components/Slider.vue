<template>
  <div class="slider">
    <div v-for="i in [currentIndex]" :key="i">
      <img :src="currentImg" />
    </div>
    <div class="btn-prev" @click="prev"></div>
    <div class="btn-next" @click="next"></div>
    <p class="count-slider">{{(currentIndex % this.images.length) +1}} / {{this.images.length}}</p>
  </div>
</template>
<script>
export default {
  props: ["images"],
  name: "Slider",
  data() {
    return {
      timer: null,
      currentIndex: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};
</script>