<template>
  <Navbar />
  <main>
    <router-view />
  </main>
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
main {
  flex: 1 0 auto;
}
</style>
