<template>
  <div class="bv-example-row pt-4">
    <template v-if="page">
      <h1>{{ page.title.rendered }}</h1>
      <div v-html="page.content.rendered"></div>
    </template>
    <div v-else>LDING...</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      page: false
    };
  },

  computed: {},

  beforeMount() {
    this.getPage();
  },

  methods: {
    getPage: function() {
      axios
        .get(
          "https://therapy.estetikinter.com/wp-json/wp/v2/pages?slug=" + this.$route.params.pageSlug
        )
        .then(response => {
          this.page = response.data[0];
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>
