<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/posts">Posts</router-link> |
    <router-link to="/pages">Pages</router-link>
  </div>
  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
   width: 100vw;
 min-height: 100vh;
 overflow-x: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}


/* route transitions */
.route-enter-from {
  opacity: 0;
  transform: translateY(100px);
}
.route-enter-active {
  transition: all 1.3s ease-out; 
}
.route-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in; 
}
</style>
