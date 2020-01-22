<template>
  <div class="container-about">
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
      <div :style="cursorCircle" :class="{newCursor: cursor}" class="cursor"></div>
      <p>
        <span @mouseover="cursor = true" @mouseleave="cursor = false">ipsum dolor,</span> ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloribus, corrupti soluta impedit eos quasi mollitia maxime,
        nihil eius perspiciatis molestias quos accusamus nisi necessitatibus dolore numquam, sapiente velit sit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloribus, corrupti soluta impedit eos quasi mollitia maxime,
        nihil eius perspiciatis molestias quos accusamus nisi necessitatibus dolore numquam, sapiente velit sit.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium doloribus, corrupti soluta impedit eos quasi mollitia maxime,
      </p>
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
      cursor: false,
      xPage: 0,
      yPage: 0
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
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.moveCursor);
    // document.addEventListener("mouseleave", e => {
    //   this.hideCursor = true;
    // });
    // document.addEventListener("mouseenter", e => {
    //   this.hideCursor = false;
    // });
  }
};
</script>