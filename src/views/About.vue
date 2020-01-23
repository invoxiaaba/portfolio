<template>
  <div class="container-about">
    <div v-bind:style="{ ['width']: scrollbar() + '%' }" id="mybar"></div>
    <h1>About page</h1>
    <section>
      <div class="row">
        <div class="col-6">Adrien bannwarth</div>
        <div class="col-6">front developer</div>
      </div>
    </section>
    <section>
      <div class="row">
        <div class="col-4">How long ?</div>
        <div class="col-4">What ?</div>
        <div class="col-4">When ?</div>
      </div>
    </section>
    <section class="desc">
      <h2>About</h2>
      <div>
        <div :style="cursorCircle" :class="{newCursor: cursorIsHidden}" class="cursor"></div>
        <div :style="cursorCircle" :class="{newCursor2: cursorIsHidden2}" class="cursor"></div>

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
      <h2>Expériences</h2>
      <div class="row">
        <div class="col-3">HETIC</div>
        <div class="col-3">Student</div>
        <div class="col-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia magnam dolorem nam rerum dolore maiores repellendus culpa id r
          epudiandae tenetur beatae dignissimos optio,
          error necessitatibus, quibusdam praesentium quidem ullam vel?
        </div>
      </div>

      <div class="br"></div>

      <div class="row">
        <div class="col-3">DUT MMI</div>
        <div class="col-3">Student</div>
        <div class="col-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia magnam dolorem nam rerum dolore maiores repellendus culpa id r
          epudiandae tenetur beatae dignissimos optio,
          error necessitatibus, quibusdam praesentium quidem ullam vel?
        </div>
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
export default {
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
  }
};
</script>