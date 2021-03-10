<template>
  <div class="headline">
    <h3>Send Money</h3>
  </div>
  <div class="transfer-origin">
    <form class="form">
      <label for="name">Recipient</label>
      <input type="text" name="email" placeholder="Enter Email Address" />
      <label for="description">Description:</label>
      <textarea
        type="text"
        id="description"
        v-model="transferData.description"
      ></textarea>
      <div class="textarea_meassage" id="text_area_message"></div>

      <label for="money">Amount:</label>
      <input
        type="text"
        id="amount"
        name="amount"
        v-model="transferData.amount"
      />

      <div id="message" class="amount_message"></div>

      <button class="btn" ref="submitButton" @click="checkForm">Send</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      errors: [],
      transferData: {
        typeOfTransaction: null,
        description: null,
        amount: null,
        code: null,
      },
      transactions: [
        { id: 1, name: "withdraw" },
        { id: 2, name: "deposit" },
      ],
      isModalOn: false,
    };
  },
  methods: {
    closeModal: function () {
      this.isModalOn = false;
    },
    checkForm: function (e) {
      e.preventDefault();
      this.errors = [];

      if (!this.transferData.typeOfTransaction) {
        this.errors.push("Type of transfer required.");
      }
      if (!this.transferData.description) {
        this.errors.push("Description required.");
      }
      if (isNaN(this.transferData.amount) || this.transferData.amount == null) {
        this.errors.push("Invalid amount number.");
      } else if (parseInt(this.transferData.amount) <= 0) {
        alert(parseInt(this.transferData.amount));
        this.errors.push("Amount number should be greater that 0.");
      }
      if (isNaN(this.transferData.code)) {
        this.errors.push("Invalid 5-digit code - required a number)");
      } else if (String(this.transferData.code).length != 5) {
        this.errors.push(
          "Invalid 5-digit code - required 5-digit long number."
        );
      }

      if (!this.errors.length) {
        return true;
      } else {
        this.isModalOn = true;
        e.preventDefault();
      }
    },
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>