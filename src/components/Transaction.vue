<template>
  <div class="headline">
    <h3>Send Money</h3>
  </div>
  <div class="transfer-origin">
    <form class="form">
      <label for="name">Recipient</label>
      <input type="text" name="email" placeholder="Enter Email Address" />
      <label for="money">You send</label>
      <div class="input-group">
        <div class="currency-label">
          <span>$</span>
        </div>
        <div class="input">
          <input
            type="text"
            id="amount"
            name="amount"
            v-model="data.amount"
          />
        </div>
        <div class="currency">
          <select name="currency">
            <option value="">USD</option>
          </select>
        </div>
      </div>

      <label for="money">Recipient gets</label>
      <div class="input-group">
        <div class="currency-label">
          <span>$</span>
        </div>
        <div class="input">
          <input
            type="text"
            id="amount"
            name="amount"
            v-model="data.amount"
          />
        </div>
        <div class="currency">
          <select name="currency">
            <option value="">USD</option>
          </select>
        </div>
      </div>
      <label for="description">Description:</label>
      <textarea
        type="text"
        id="description"
        v-model="data.description"
      ></textarea>

      <button class="btn" ref="submitButton" @click.prevent="send">Send</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      errors: [],
      data: {
        transactionType: "send",
        description: null,
        amount: null,
        userId: null,
        status: null
      },
      isModalOn: false
    };
  },
  methods: {
    closeModal: function() {
      this.isModalOn = false;
    },
    async send() {
      this.data.userId = this.userId;
      console.log(`object : ${this.data.transactionType}`);
      const transaction = await this.$dbApi.transactions.createTransaction(
        this.data
      );
      console.log(transaction);
    }
  },
  computed: {
    ...mapGetters("user", {
      userId: "getUserId"
    })
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.input-group {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  input {
    margin: 0;
    border-radius: 0;
  }

  .currency {
    select {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left: none;
    }
  }
  .currency-label {
    width: 6rem;
    height: 100%;
    border: 1px solid #bdc3c7;
    border-right: 0;
    border-top-left-radius: $border-radius;
    border-bottom-left-radius: $border-radius;
    text-align: center;
    color: $input-font-color;
    font-size: 3rem;
    background-color: lighten($input-border-color, 20%);
    padding: 1rem;

    span {
      height: 100%;
    }
  }
}
</style>
