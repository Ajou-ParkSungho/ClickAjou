<template>
  <div id="app">
    <div class="rootbody">
      <div id="background-wrap">
        <div class="bubble x1"></div>
        <div class="bubble x2"></div>
        <div class="bubble x3"></div>
        <div class="bubble x4"></div>
        <div class="bubble x5"></div>
        <div class="bubble x6"></div>
        <div class="bubble x7"></div>
        <div class="bubble x8"></div>
        <div class="bubble x9"></div>
        <div class="bubble x10"></div>
        <div class="bubble x11"></div>
        <div class="bubble x12"></div>
        <div class="bubble x13"></div>
        <div class="bubble x14"></div>
        <div class="bubble x15"></div>
        <div class="bubble x16"></div>
        <div class="bubble x17"></div>
        <div class="bubble x18"></div>
        <div class="bubble x19"></div>
        <div class="bubble x20"></div>
      </div>
      <header-view/>
      <div class="body-view">
        <router-view/>
      </div>
      <footer-view/>
    </div>
  </div>
</template>

<script>
import HeaderView from "./view/header"
import FooterView from "./view/footer"

export default {
  name: 'App',
  components: { HeaderView, FooterView },
  socket: {
			// Prefix for event names
			// prefix: "/counter/",

			// If you set `namespace`, it will create a new socket connection to the namespace instead of `/`
			// namespace: "/counter",

			events: {

				// Similar as this.$socket.on("changed", (msg) => { ... });
				// If you set `prefix` to `/counter/`, the event name will be `/counter/changed`
				//
				callRefresh() {
					history.go(0)
        }
      }
  },
}
</script>

<style>
  @import url("./css/main.css");
  @import url("./css/animation.css");

  
</style>
