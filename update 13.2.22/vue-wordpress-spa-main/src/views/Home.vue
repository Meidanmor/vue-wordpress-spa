<template>
  <div class="home">
 <button class="button" @click="showModal = true">
  Show Modal
 </button>
 <transition name="fade" appear>
  <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>
 </transition>
 <transition name="slide" appear>
  <div class="modal" v-if="showModal">
   <h1>Lorem Ipsum</h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem provident explicabo accusamus laudantium voluptatum nobis sed nesciunt neque possimus molestiae?</p>
       <a href="/about">About</a>
       <a href="/posts">POSTS</a> |

   <button class="button" @click="showModal = false">
    Close Modal
   </button>
  </div>
 </transition>
 <Contact/>
  </div>

</template>

<script>
// @ is an alias to /src
import Contact from '../components/Contact.vue'
export default {
 data () {
  return {
   showModal: false
  }
 },
 components:{Contact}
}
</script>
<style>
.modal-overlay {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 0;
 z-index: 98;
 background-color: rgba(0, 0, 0, 0.3);
}
.modal {
 position: fixed;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 z-index: 99;
 
 width: 100%;
 max-width: 400px;
 background-color: #FFF;
 border-radius: 16px;
 
 padding: 25px;
 }

input.input, textarea.textarea, button.button {
    padding: 10px;
    max-width: 400px;
    margin: 5px;
    width: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
 transition: transform .9s;
}

.slide-enter-from,
.slide-leave-to {
 transform: translateY(-50%) translateX(100vw);
}

</style>