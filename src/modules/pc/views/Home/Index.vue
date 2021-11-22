/** * Created by Lay Hunt on 2021-10-29 13:54:35. */
<template>
  <div class="index">
    <div class="banner">
      <div class="item"></div>
    </div>
    <div class="session">
      <video
        loop=""
        muted=""
        autoplay=""
        src="https://assets-jl.oss-cn-beijing.aliyuncs.com/videos/60e3c524c8e1b.mp4"
      ></video>
      <div class="info-body container">
        <div class="title">What Is UniArts</div>
        <p class="desc">
          UniArts is a decentralized value discovery system for artists and art collectors
        </p>
        <p class="text">
          UniArts is a multi-chain bottom-up value discovery system with a substrate-developed
          mainnet and EVM (Ethereum virtual machine)-based smart contracts for infrastructure.
        </p>
        <span @click="onShowClickText">More</span>
        <p class="hide-text" :class="{ isShow: isShowText }">
          It also provides crowd- voting/DAO curation for art, distributes incentives for
          contributing content creators and art appreciators, as well as art grants to help better
          achieve the democratization of art and fair value discovery of NFTs.
        </p>
      </div>
    </div>
    <div class="session">
      <div class="info-body container">
        <div class="title">Why UniArts</div>
        <p class="desc">UniArts was created to unite artists and collectors.</p>
        <p class="text">
          Undervalued artists full of talent should be showcased to incentivized connoisseurs. It’s
          a mutually beneficial relationship.
        </p>
        <span @click="onWhyClickText">More</span>
        <p class="hide-text" style="font-style: italic" :class="{ isShow: isWhyText }">
          “Art should be democratically available to as many people as possible.” “The
          Democratization of art is about enhancing the quality of life for a wider section of the
          community through the promotion, appreciation, and understanding of artworks. It is about
          bringing new members into the community, those that previously may not have accessed.”
        </p>
      </div>
    </div>
    <div class="session">
      <video
        loop=""
        muted=""
        autoplay=""
        src="https://assets-jl.oss-cn-beijing.aliyuncs.com/videos/1626923293407024.mp4"
      ></video>
      <div class="info-body container">
        <div class="title">How Does it Work</div>
        <p class="desc">NPoS driven by NFT Creation and Appreciation</p>
        <p class="text">
          ※ For creators: Create NFTs with your work and bind with curators (validator) nodes.<br />
          ※ For community appreciation: staking UARTs and voting for preferred NFTs.<br /><br />

          Both will be rewarded by UniArts’ token economy, with the most popular works will receive
          extra grants and support.
          <br />
        </p>
        <span @click="onWorkClickText">More</span>
        <p class="hide-text" :class="{ isShow: isWorkText }">
          Powered by Substrate, UniArts’ NPoS mint portion of the block helps reward NFTs that bind
          with validators by their creators. NFT owners may choose to pin the NFT on their address
          to receive UARTs. Nominators vote for NFTs instead of nodes to gain staking rewards.
        </p>
      </div>
    </div>
    <!-- <div class="partner">
      <div class="container">
        <div class="slide-wrapper" ref="slideWrapper">
          <div class="swiper-slide">
            <img src="@/modules/pc/assets/images/partner/av.png" />
          </div>
          <div class="swiper-slide">
            <img src="@/modules/pc/assets/images/partner/infinity.png" />
          </div>
          <div class="swiper-slide">
            <img src="@/modules/pc/assets/images/partner/paka.png" />
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "index",
  setup() {
    // TODO
    const isShowText = ref(false);
    const onShowClickText = () => {
      isShowText.value = !isShowText.value;
    };
    const isWhyText = ref(false);
    const onWhyClickText = () => {
      isWhyText.value = !isWhyText.value;
    };
    const isWorkText = ref(false);
    const onWorkClickText = () => {
      isWorkText.value = !isWorkText.value;
    };

    const slideWrapper = ref(null);
    const keyframeList = ref([]);
    onMounted(() => {});

    return {
      onShowClickText,
      isShowText,
      onWhyClickText,
      isWhyText,
      onWorkClickText,
      isWorkText,

      slideWrapper,
      keyframeList,
    };
  },
});
</script>

<style lang="scss" scoped>
.banner {
  .item {
    background-color: black;
    width: 100%;
    height: 491px;
    background-image: url(~@/modules/pc/assets/images/banner.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
  }
}

.session {
  height: 677px;
  position: relative;
  overflow: hidden;
  background-color: black;
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .info-body {
    position: relative;
    z-index: 1;
    margin-top: 130px;
    .title {
      font-family: "04B_1";
      color: white;
      font-size: 52px;
    }
    > .desc {
      max-width: 727px;
      color: white;
      font-size: 28px;
      margin: 30px 0;
    }
    > .text {
      max-width: 727px;
      color: white;
      font-size: 17px;
      line-height: 30px;
    }
    > span {
      color: white;
      margin: 20px 0 10px 0;
      display: inline-block;
      font-family: "Arial-BoldMT";
      position: relative;
      padding-bottom: 3px;
      line-height: 30px;
      cursor: pointer;
    }
    > span::after {
      content: "";
      display: inline-block;
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background: white;
    }
    .hide-text {
      max-width: 727px;
      color: white;
      font-size: 17px;
      line-height: 30px;
      opacity: 0;
      transition: all 0.6s ease;
    }
    .hide-text.isShow {
      opacity: 1;
    }
  }
}

.partner {
  width: 100%;
  background: #333333;
  padding: 30px 0;
  .container {
    /* overflow: hidden; */
    width: 888px;
  }
  .slide-wrapper {
    /* overflow: hidden; */
    height: 65px;
    display: flex;
    justify-content: space-between;
  }
  .swiper-slide {
    /* float: left; */
    width: 128px;
    height: 65px;
    margin: 0 10px;
    text-align: center;
    > img {
      /* max-width: 80%; */
      height: 65px;
      object-fit: contain;
      vertical-align: middle;
    }
  }
}

@media screen and (min-width: 1200px) {
  .banner {
    .item {
      background-size: 100% auto;
    }
  }
}
</style>
