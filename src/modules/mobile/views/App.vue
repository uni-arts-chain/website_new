<template>
  <Navbar />
  <main>
    <router-view />
  </main>
  <Footer></Footer>
</template>
<script>
import Navbar from "@/modules/mobile/views/Layout/Navbar";
import Footer from "@/modules/mobile/views/Layout/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>
<style lang="scss">
@import "@/modules/mobile/assets/styles/index";
@import "@/modules/mobile/assets/styles/reset";
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
nav {
  flex: 0 0 auto;
}
footer {
  flex: 0 0 auto;
}
main {
  flex: 1 0 auto;
}
</style>
