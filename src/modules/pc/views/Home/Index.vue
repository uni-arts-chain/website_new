/** * Created by Lay Hunt on 2021-10-29 13:54:35. */
<template>
  <div class="index">
    <div class="banner">
      <div class="item">
        <div class="info-body container">
          <div>UniArts'ART-Fi</div>
          <br />
          <div>Fine Arts with Social, Game and Benefit</div>
        </div>
      </div>
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
        <!-- <span @click="onShowClickText">More</span> -->
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="50"
          class="hide-text"
        >
          <div class="row">
            <span>- Exhibition:</span>
            <span>List NFTs to let the community to vote with UART and earn rewards;</span>
          </div>
          <div class="row">
            <span>- Value discovery:</span>
            <span
              >UARTs mint into NFTs with votes received as value indicator, also retrievable by the
              owner;</span
            >
          </div>
          <div class="row">
            <span>- IXO:</span>
            <span>NFT Auction after vote with liquidity enhance;</span>
          </div>
          <div class="row">
            <span></span>
            <span
              >NFT projects or other collector community may do IXO for their in demand NFTs</span
            >
          </div>
          <div class="row">
            <span></span>
            <span>NFT collectable Mysterious box backed by LPs </span>
          </div>
        </div>
      </div>
    </div>
    <div class="session">
      <div class="info-body container">
        <div class="title">Why UniArts</div>
        <p class="desc">
          To bond & connect artwork NFTs with the community instead of seller-buyer 2 point
          interaction
        </p>
        <p class="text">UniArts’ ART-FI makes Fine Art the central of Social and Game</p>
        <p class="text">
          UniArts’ bottom-up value discovery system allow the community to share the value of great
          artworks.
        </p>
        <div
          class="hide-text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="200"
        >
          <div class="row">
            <span
              >- NFT Gaming: NFT sold in the Galley can be used as cards in the game
              "ART-VERSUS"</span
            >
          </div>
          <div class="row">
            <span>- Collect NFT souvenirs for every vote round</span>
          </div>
          <div class="row">
            <span>- Good commons forwarded to community</span>
          </div>
          <div class="row">
            <span>- NFT collector certificate </span>
          </div>
        </div>
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
        <p class="desc">“Appreciate to Earn” NFT vote mining and curatorial position bid</p>
        <div
          class="text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="200"
        >
          <div class="row">
            <span>- Vote mining:</span>
            <span>Voting by staking UARTs for NFTs and earn rewards;</span>
          </div>
          <div class="row">
            <span>- NFTs with FTs:</span>
            <span>Extra UARTs mint into NFTs with votes received, retrievable by the owner;</span>
          </div>
          <div class="row">
            <span>- Curatorial Position:</span>
            <span>Stake UART to list your NFTs to be voted;</span>
          </div>
        </div>
        <div
          class="hide-text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="200"
        >
          <div class="row">
            <span>UniArts' community token UINK：</span>
          </div>
          <div class="row">
            <span>- Rewarded via participate in community activities</span>
          </div>
          <div class="row">
            <span>- Play NFT card game to earn</span>
          </div>
          <div class="row">
            <span>- Purchase rare Exclusive NFTs</span>
          </div>
        </div>
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
    background-image: url(~@/modules/pc/assets/images/banner.jpeg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .info-body {
      position: relative;
      z-index: 1;
      > div {
        font-family: "04B_1";
        color: white;
        font-size: 47px;
      }
    }
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
      /* max-width: 727px; */
      color: white;
      font-size: 28px;
      margin: 30px 0;
    }
    > .text {
      /* max-width: 727px; */
      color: white;
      font-size: 20px;
      line-height: 30px;
      display: flex;
      flex-direction: column;
      .row {
        width: 100%;
        display: flex;
        span:first-child {
          display: block;
          width: 200px;
        }
        span:last-child {
          display: block;
          width: calc(100% - 200px);
        }
      }
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
      margin-top: 80px;
      color: white;
      font-size: 20px;
      line-height: 30px;

      .row {
        width: 100%;
        display: flex;
        span:first-child {
          display: block;
          width: 180px;
        }
        span:last-child {
          display: block;
          width: calc(100% - 180px);
        }
      }
    }
    /* .hide-text.isShow {
      opacity: 1;
    } */
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
