<template>
<div>
<template v-if="posts">
<div class="posts">
    <div class="row">
      <div class="column" v-for="(post, index) in posts" :key="index">
        <div class="card">
          <div class="card-image">
            <img
              v-if="post._embedded['wp:featuredmedia']"
              :src="post._embedded['wp:featuredmedia'][0].source_url"
            />
          </div>
          <div class="card-content" v-html="post.excerpt.rendered"></div>
          <div class="card-action">
            <h3>{{ post.title.rendered }}</h3>
          </div>
        </div>
                <router-link :to="post.slug" tag="div" key="post.id">
READ MORE </router-link>
      </div>
    </div>
    </div>
  </template>
  <div id="loaded" v-else>Loading...</div>
            <pagination :pagination="pagination"
                    @prev="--postsData.page; getRecentMessages();"
                    @next="postsData.page++; getRecentMessages();">
        </pagination>
  </div>
</template>

<script>
import pagination from "../components/Pagination.vue";
import axios from "axios";
export default {
        components: {
            'pagination': pagination
        },
  data() {
    return {
      // Wordpress Posts Endpoint
      postsUrl: "https://therapy.estetikinter.com/wp-json/wp/v2/posts",
      queryOptions: {
        per_page: 5, // Only retrieve the 10 most recent blog posts.
        page: 1, // Current page of the collection.
        _embed: true //Response should include embedded resources.
      },
      pagination: {
                    prevPage: '',
                    nextPage: '',
                    totalPages :  ' ' ,
                    from: '',
                    to: '',
                    total: '',
                },
      // Returned Posts in an Array
      posts: []
    };
  },
  methods: {
    // Get Recent Posts From WordPress Site
    getRecentMessages() {
      axios
        .get(this.postsUrl, { params: this.queryOptions })
        .then(response => {
          this.posts = response.data;
          this.configPagination(response.headers);
          console.log("Posts retrieved!");
          console.log(this.posts);
        })
        .catch(error => {
          console.log(error);
        });
    },
            configPagination(headers) {
                this.pagination.total = +headers['x-wp-total'];
                this.pagination.totalPages = +headers['x-wp-totalpages'];
                this.pagination.from = this.pagination.total ? ((this.postsData.page - 1) * this.postsData.per_page) + 1 : ' ';
                this.pagination.to = (this.postsData.page * this.postsData.per_page) > this.pagination.total ? this.pagination.total : this.postsData.page * this.postsData.per_page;
                this.pagination.prevPage = this.postsData.page > 1 ? this.postsData.page : '';
                this.pagination.nextPage = this.postsData.page < this.pagination.totalPages ? this.postsData.page + 1 : '';
            }
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

.row {
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
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


</style>