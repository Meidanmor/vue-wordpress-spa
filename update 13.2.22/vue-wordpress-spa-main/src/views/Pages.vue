<template>
<div>
<template v-if="pages">
<div class="pages">
    <div class="row">
      <div class="column" v-for="(page, index) in pages" :key="index">
        <div class="card">
          <div class="card-image">
            <img
              v-if="page._embedded['wp:featuredmedia']"
              :src="page._embedded['wp:featuredmedia'][0].source_url"
            />
          </div>
          <div class="card-content" v-html="page.excerpt.rendered"></div>
          <div class="card-action">
            <h3>{{ page.title.rendered }}</h3>
          </div>
        </div>
<router-link :to="{ name: 'Page', params: { pageSlug: page.slug }}">READ MORE </router-link>

      </div>
    </div>
    </div>
  </template>
  <Loader v-else/>
  </div>
</template>

<script>
import axios from "axios";
import Loader from "../components/Loader.vue"
export default {
 components: { 
 Loader
},
  data() {
    return {
      // Wordpress Posts Endpoint
      postsUrl: "https://therapy.korkinetim.com/wp-json/wp/v2/pages",
      queryOptions1: {
        per_page: 6, // Only retrieve the 10 most recent blog posts.
        page: 1, // Current page of the collection.
        _embed: true //Response should include embedded resources.
      },
      // Returned Posts in an Array
      pages: []
    };
  },
  methods: {
    // Get Recent Posts From WordPress Site
    getRecentMessages() {
      axios
        .get(this.postsUrl, { params: this.queryOptions1 })
        .then(response => {
          this.pages = response.data;
          console.log("Posts retrieved!");
          console.log(this.pages);
        })
        .catch(error => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getRecentMessages();
  }
};
</script>

<style>
#loaded{
  font-size: 80px;
  display: block;
}
column{
  padding: 20px;
}

.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    width: 100%;
}

div.card{
  border: 2px solid black;
    padding: 20px;
}

.card-image img {
    width: 100%;
    height: 200px;
    object-fit: contain;
}
.card {
  background: rgb(255 255 255 / 100%);
  cursor: default;
  transform-style: preserve-3d;
  transition: transform 0.4s ease 0s;
  -webkit-animation: giro 1s 1;
  animation: giro 1s 1;
}

/*ANIMATIONS*/
@-webkit-keyframes giro {
  from {
    transform: rotateY( 180deg);
  }
  to {
    transform: rotateY( 0deg);
  }
}

@keyframes giro {
  from {
    transform: rotateY( 180deg);
  }
  to {
    transform: rotateY( 0deg);
  }
}
</style>