<template>
  <TemplateProject
    project_name="Samu Social de Paris"
    text_name="ssp3"
    nav_active="02"
    nav_link="nav-link-02"
    nav_next="03"
    link_next="/projet3"
    nav_prev="01"
    link_prev="/projet1"
    text_role="Front end develop"
    text_client="Samu Social de Paris"
    text_website
    text_desc="Lapetitepho.C is a project of an amateur photographer. Through this site, you can find her Portfolio as 
    a showcase site. She makes portraits in color as well as in black and white but also pictures of landscapes or animals."
    img_bg="projet-2"
    mobile_format="0"
    text_teck="React JS - CSS / SASS - Full Calendar"
  />
</template>

<script>
import TemplateProject from "./TemplateProject";
export default {
  name: "projet2",
  components: {
    TemplateProject
  },
  data() {
    return {};
  }
};
</script>