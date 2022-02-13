<template>
  <div class="mypost">
    <template v-if="page">
      <h1>{{ page.title.rendered }}</h1>
      <div v-html="page.content.rendered"></div>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../Loader.vue";

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
          "https://therapy.korkinetim.com/wp-json/wp/v2/pages?slug=" + this.$route.params.pageSlug
        )
        .then(response => {
          this.page = response.data[0];
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
    components: {
    Loader
  }
};
</script>
<style>
.mypost{
  padding: 20px;
}
</style>