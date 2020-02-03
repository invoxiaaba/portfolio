<template>
  <div class="container container-home">
    <div class="main-nav" id="nav">
      <router-link to="/about">{{$t('about')}}</router-link>
    </div>
    <NavProjet />
  </div>
</template>

<script>
// @ is an alias to /src
import NavProjet from "@/components/NavProjet";

export default {
  name: "home",
  components: {
    NavProjet
  }
};
</script>