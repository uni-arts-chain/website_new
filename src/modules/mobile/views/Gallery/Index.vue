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
  height: 340px;
  width: 100%;
  overflow: hidden;
  position: relative;
  video {
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: 100%;
  }
  .info {
    position: relative;
    z-index: 1;
    img {
      margin-top: 100px;
      margin-bottom: 15px;
      width: 200px;
    }
    p {
      font-size: 18px;
      color: white;
      line-height: 25px;
      font-family: "ArialMT";
    }
    a {
      box-shadow: 2px 3px 5px 1px rgb(0 0 0 / 62%);
      border-radius: 6px;
      display: inline-block;
      padding: 12px 10px;
      color: #e3e3e3;
      font-size: 16px;
      margin-top: 20px;
      background: #8d6dfc;
      font-family: "ArialMT";
    }
  }
}
</style>
