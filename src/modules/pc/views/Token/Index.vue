/** * Created by Lay Hunt on 2021-10-29 22:34:37. */
<template>
  <div class="index">
    <div class="container">
      <div class="session">
        <div class="title">Native token of UniArts Network: UART</div>
        <div class="native-token">
          <div class="native-token-text">UART is the native token of UniArts Network</div>
          <div class="native-token-text">
            <span>Total Hard Cap</span>
            <span style="width: 100px; color: #d2d2d2">100M</span>
          </div>
          <div class="native-token-text">
            <span>Initial Circulating Supply</span>
            <span style="width: 100px; color: #d2d2d2">4.1M</span>
          </div>
          <div class="native-token-text">
            <span>Team lockup</span>
            <span style="width: 100px; color: #d2d2d2">3 Years</span>
          </div>
        </div>
      </div>
      <div class="session driven">
        <div class="title">NFT driven NPOS</div>
        <div class="driven-body">
          <div class="left">
            <img src="@/modules/pc/assets/images/to3.png" />
            <p>
              Staking UARTs to vote for NFTs to gain staking rewards 25% of total block reward
              minted into NFTs binds with the validator. NFT owner may choose to pin the NFT on
              their address to retrieve UARTs minted earlier.
            </p>
            <button @click="onShowText">more</button>
            <p class="more-text" :class="{ 'is-show': isShowText }">
              UniArts’ NPoS mechanism requires creators to mint NFTs with their works and bind their
              address with a running node to become the validator candidate. Holders of UART tokens
              can nominate preferred NFT validators and earn additional UART in the process.
              UniArts’ NPoS mints a portion of the block reward into NFTs, which bind validators and
              creators. NFT owners may choose to pin the NFT on their address to retrieve UARTs.
              Nominators vote for NFTs instead of nodes to gain staking rewards.
            </p>
          </div>
          <div class="right">
            <img src="@/modules/pc/assets/images/to4.png" />
          </div>
        </div>
        <img class="desc-img" src="@/modules/pc/assets/images/to5.png" />
      </div>
    </div>

    <div class="session table">
      <div class="container">
        <div class="item">
          <div class="pic">
            <img src="@/modules/pc/assets/images/token-table1.png" class="title" />
          </div>
          <div class="name">Validator Candidate</div>
          <div class="desc">
            Candidates are nodes in the UniArts network that have competed to become a validator but
            have not yet achieved the official qualification. Like validator nodes, candidate nodes
            need at least 0.1% of the total staking circulation.<br />
            Three NFTs are required, at a minimum, for candidates to be eligible to receive votes.
            The number of votes obtained by candidates is the sum of the votes received by the NFTs
            bound with them.
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="@/modules/pc/assets/images/token-table2.png" class="title" />
          </div>
          <div class="name">Validator</div>
          <div class="desc">
            Validators set up nodes, stake UART, pack blocks, promote NFTs, and update NFTs bound
            with nodes. They are responsible for maintaining the network and can earn rewards for
            packaging blocks in the chain.<br />
            To combat inefficiency and dishonesty, they are at risk of being slashed. 25% of the
            total block reward to be minted into NFTs binds with the validator. The remaining 75% is
            allocated between the validator and their nominator.
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="@/modules/pc/assets/images/token-table3.png" class="title" />
          </div>
          <div class="name">Nomination</div>
          <div class="desc">
            Nominators stake UART and nominate validators by voting for their preferred NFTs.
            Initially, the top 21 candidates, sorted by volume of nominations, will be selected as
            validators, receiving block rewards for their efforts.
          </div>
        </div>
        <div class="item">
          <div class="pic">
            <img src="@/modules/pc/assets/images/token-table4.png" class="title" />
          </div>
          <div class="name">Fisher</div>
          <div class="desc">
            A fisher is responsible for minimizing the misbehavior of curators and creators. A
            couple of examples of this unacceptable behavior is impersonation or having offline
            nodes. They inspect validators; if one validator has not minted the required volume of
            NFTs, the fisher can slash 3% of the total UARTs nominated for that validator.
            <br />
            If a validator mints NFTs in declining quality, the fisher may initiate a public vote on
            said quality. Negative voting results can empower fishers to slash 5%. Slashed UART is
            all awarded to the fisher.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "index",
  setup() {
    // TODO
    const isShowText = ref(false);
    const onShowText = () => {
      isShowText.value = !isShowText.value;
    };

    return {
      isShowText,
      onShowText,
    };
  },
});
</script>

<style lang="scss" scoped>
.index {
  background-color: black;
}
.session {
  > .title {
    padding-top: 80px;
    color: #d9d9d9;
    font-size: 28px;
    font-family: "04B_1";
  }
  .native-token {
    margin: 40px 0;
    width: 100%;
    height: 383px;
    background: url(~@/modules/pc/assets/images/native-token.png) no-repeat;
    background-size: 100% 383px;
    padding: 100px 200px 40px 170px;
  }
  .native-token-text {
    color: #aaa;
    font-size: 24px;
    margin: 12px 0;
    display: flex;
    justify-content: space-between;
  }
}
.driven {
  > .title {
    margin-top: 40px;
    font-size: 36px;
    color: white;
  }
  .driven-body {
    display: flex;
    justify-content: space-between;
    margin: 80px 0 40px 0;
    align-items: center;
    .left {
      width: 650px;
      p {
        color: #d9d9d9;
        font-size: 12px;
        line-height: 25px;
        margin-top: 20px;
      }
      p.more-text {
        opacity: 0;
        margin-top: 0px;
        transition: all 0.6s ease;
      }
      p.is-show {
        opacity: 1;
      }
      button {
        background-color: transparent;
        color: white;
        cursor: pointer;
        margin: 20px 0 10px 0;
        display: inline-block;
        font-family: "Arial-BoldMT";
        position: relative;
        font-size: 12px;
        line-height: 25px;
        padding-bottom: 3px;
      }
      button::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: white;
      }
    }
    .right {
      img {
        width: 343px;
      }
    }
  }
  .desc-img {
    width: 1041px;
    max-width: 100%;
    margin-bottom: 100px;
  }
}

.table {
  padding: 80px 0;
  width: 100%;
  background: #121212;
  .container {
    display: flex;
    flex-wrap: wrap;
  }
  .item {
    width: 414px;
    height: 575px;
    background: url(~@/modules/pc/assets/images/token-border.png) no-repeat;
    background-size: cover;
    margin: 0 30px 60px 30px;
    .pic {
      height: 270px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .name {
      text-align: center;
      font-size: 21px;
      color: #969696;
      font-family: "04B_1";
    }
    .desc {
      color: #676767;
      font-size: 12px;
      line-height: 25px;
      width: 80%;
      margin: 26px auto;
    }
  }
}
</style>
