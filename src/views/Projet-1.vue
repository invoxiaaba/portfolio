<template>
  <TemplateProject
    text_name="bellybump"
    nav_active="01"
    nav_link_05="nav-link-01"
    nav_next="02"
    link_next="/projet2"
    nav_prev="05"
    link_prev="/projet5"
    text_role="Dev"
    text_client="Clara Bourillon"
    text_website="LapetitePhoto.C"
    img_bg="projet-1"
  />
</template>

<script>
import TemplateProject from "./TemplateProject";
export default {
  name: "projet1",
  components: {
    TemplateProject
  },
  data() {
    return {};
  }
};
</script>