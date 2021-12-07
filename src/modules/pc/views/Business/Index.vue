/** * Created by Lay Hunt on 2021-10-29 20:35:02. */
<template>
  <div class="index">
    <div class="content">
      <div class="container">
        <div class="title">ART-VERSUS</div>
        <div class="desc">
          In a world that all artworks have magic power, and can be wield by their collectors to
          achieve the unthinkable. Artworks with more FAVOR from the public are more powerful, yet
          every artwork has the potential towards greatness Collectors summon artwork duels, to win
          the FAVORs from the public.
          <br />
          Are you ready for your next DUAL?
        </div>
      </div>
    </div>
    <img class="game-pic" src="@/modules/pc/assets/images/game.jpeg" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "index",
  setup() {
    // TODO

    return {};
  },
});
</script>

<style lang="scss" scoped>
.index {
  background: black;
}
.content {
  background: #1d1d1d;
  .container {
    padding: 40px 0;
  }
  .title {
    font-family: "ArialMT";
    color: white;
    font-size: 28px;
  }
  .desc {
    margin-top: 30px;
    color: white;
    font-family: "ArialMT";
    font-size: 20px;
    line-height: 35px;
  }
}
.game-pic {
  width: 100%;
  margin-bottom: 40px;
}
</style>
