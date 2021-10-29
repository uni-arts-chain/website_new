/** * Created by Lay Hunt on 2021-10-29 20:35:02. */
<template>
  <div class="index">
    <video
      loop
      mute
      autoplay
      src="https://assets-jl.oss-cn-beijing.aliyuncs.com/videos/60e3cdf320395.mp4"
    ></video>
    <div class="info container">
      <img src="@/modules/pc/assets/images/art-formulr.png" alt="" />
      <p>Vote for the most in demand artwork NFT</p>
      <a href="https://af.uniarts.network" target="_blank">GET STARTED</a>
    </div>
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
  background-color: black;
  height: 658px;
  width: 100%;
  overflow: hidden;
  position: relative;
  video {
    width: 100%;
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .info {
    position: relative;
    z-index: 1;
    img {
      margin-top: 150px;
      margin-bottom: 30px;
      width: 350px;
    }
    p {
      font-size: 25px;
      color: white;
      line-height: 30px;
      font-family: "ArialMT";
    }
    a {
      box-shadow: 0px 5px 5px 0px rgb(0 0 0 / 23%);
      border-radius: 11px;
      display: inline-block;
      padding: 25px 50px;
      color: white;
      font-size: 24px;
      margin-top: 30px;
      background: #8d6dfc;
      font-family: "ArialMT";
    }
  }
}

@media screen and (max-width: 1170px) {
  .index video {
    width: auto;
    height: 100%;
  }
}
</style>
