<template>
  <div class="mypost">
    <template v-if="post">
      <h1>{{ post.title.rendered }}</h1>
      <div v-html="post.content.rendered"></div>
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
      post: false
    };
  },

  computed: {},

  beforeMount() {
    this.getPost();
  },

  methods: {
    getPost: function() {
      axios
        .get(
          "https://therapy.korkinetim.com/wp-json/wp/v2/posts/?slug=" + this.$route.params.postSlug
        )
        .then(response => {
          this.post = response.data[0];
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