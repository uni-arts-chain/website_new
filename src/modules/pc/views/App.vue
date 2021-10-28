<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/modules/pc/views/Layout/Navbar";
import Footer from "@/modules/pc/views/Layout/Footer";

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
  setup() {},
});
</script>

<style lang="scss">
@import "@/modules/pc/assets/styles/index.scss";
@import "@/modules/pc/assets/styles/reset.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 2000px;
}
</style>
