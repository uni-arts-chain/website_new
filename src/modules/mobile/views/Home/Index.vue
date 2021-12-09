/** * Created by Lay Hunt on 2021-10-29 13:54:35. */
<template>
  <div class="index">
    <div class="banner">
      <video loop="" muted="" autoplay="" src="@/modules/pc/assets/images/banner.mp4"></video>
      <div class="item">
        <div class="container">
          <div class="info-body">
            <div style="font-size: 27px">UniArts'ART-Fi</div>
            <br />
            <div>Fine Arts with Social, Game and Benefit</div>
          </div>
        </div>
      </div>
    </div>
    <div class="session">
      <div class="info-body container">
        <div class="title">What Is UniArts:</div>
        <p class="desc">
          UniArts is a decentralized value discovery system for artists and art collectors
        </p>
        <p class="text">
          UniArts is a multi-chain bottom-up value discovery system with a substrate-developed
          mainnet and EVM (Ethereum virtual machine)-based smart contracts for infrastructure.
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="70"
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
      <video
        loop=""
        muted=""
        autoplay=""
        src="https://bitflix.oss-cn-hongkong.aliyuncs.com/assets/535.m4v"
      ></video>
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
          data-aos-offset="70"
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
      <div class="info-body container">
        <div class="title">How Does it Work</div>
        <p class="desc">“Appreciate to Earn” NFT vote mining and curatorial position bidn</p>
        <div
          class="text"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
          data-aos-offset="70"
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
          data-aos-offset="70"
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
    onMounted(() => {
      // let length = slideWrapper.value.children.length;
      // for (let i = 0; i < length; i++) {
      //   keyframeList.value.push({
      //     translateX: (i + 1) * -120,
      //     duration: 1000,
      //     delay: 3000,
      //   });
      //   slideWrapper.value.appendChild(slideWrapper.value.children[i].cloneNode(true));
      // }
      // anime({
      //   targets: ".slide-wrapper",
      //   keyframes: keyframeList.value,
      //   easing: "easeInOutSine",
      //   loop: true,
      // });
    });

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
  position: relative;
  overflow: hidden;
  background-color: black;
  > video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .item {
    background-color: black;
    width: 100%;
    height: 256px;
    .container {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .info-body {
      position: relative;
      z-index: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      > div {
        font-family: "04B_1";
        color: white;
        font-size: 23px;
      }
    }
  }
}

.session {
  width: 100%;
  min-height: 450px;
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
    margin-top: 55px;
    margin-bottom: 35px;
    .title {
      font-family: "04B_1";
      color: white;
      font-size: 27px;
    }
    > .desc {
      color: white;
      font-size: 15px;
      margin: 15px 0;
    }
    > .text {
      color: white;
      font-size: 13px;
      line-height: 25px;
    }
    > span {
      color: white;
      margin: 10px 0 10px 0;
      display: inline-block;
      font-family: "Arial-BoldMT";
      position: relative;
      padding-bottom: 3px;
      line-height: 25px;
      font-size: 13px;
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
      margin-top: 30px;
      color: white;
      font-size: 13px;
      line-height: 25px;
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
    overflow: hidden;
    width: 100%;
    padding: 0;
  }
  .slide-wrapper {
    overflow: hidden;
    height: 60px;
  }
  .swiper-slide {
    float: left;
    width: 110px;
    height: auto;
    margin: 0 5px;
    text-align: center;
    > img {
      max-width: 80%;
      height: 60px;
      object-fit: contain;
      vertical-align: middle;
    }
  }
}
</style>
