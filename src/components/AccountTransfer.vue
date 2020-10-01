<template>
  <div id="transfer-origin">
       <modal-validation :occuredErrors="errors" :modalOn="isModalOn"></modal-validation>
    <div class="transfer-forms" id="wholewindow">
      <form class="form" id="form">
         
        <ul class="list">
          <li class="transtype">
            <label for="name" id="type">Type of<br />transaction</label>
            <select
              name="transactions"
              id="list-of-transactions"
              v-model="transferData.typeOfTransaction"
            >
              <option
                v-for="transaction in transactions"
                :key="transaction.id"
                v-bind:value="transaction.name"
              >
                {{ transaction.name }}
              </option>
            </select>
          </li>
          <div class="text-meassage-box">
            <li>
              <label for="description" id="description_headline"
                >Description:</label
              >
              <textarea
                type="text"
                id="description"
                placeholder="Type text here..."
                v-model="transferData.description"
              ></textarea>
            </li>
            <div class="textarea_meassage" id="text_area_message"></div>
          </div>

          <div class="amount-box">
            <li>
              <label for="money" id="money">Amount:</label>
              <input
                type="text"
                id="amount"
                name="amount"
                placeholder="0"
                v-model="transferData.amount"
              />
            </li>
            <div id="message" class="amount_message"></div>
          </div>

          <div class="code-box">
            <li>
              <label for="code" id="code">5-digit code</label>
              <input
                type="text"
                name="code"
                id="code5"
                placeholder="XXXXX"
                v-model="transferData.code"
              />
            </li>
            <div id="codemessage" class="code_message"></div>
          </div>
        </ul>
        <div id="errors" v-if="errors.length">
        </div>
        <div class="buttons">
          <button class="btn1" type="submit" ref="submitButton" @click="checkForm">Perform</button>
          <button type="reset" class="btn2">Clear</button>
        </div>
      </form>

      <div class="go-back-home">
        <router-link to="/home"
          >Go back to home

          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 206.108 180"
            style="enable-background: new 0 0 206.108 206.108"
            xml:space="preserve"
          >
            <path
              d="M152.774,69.886H30.728l24.97-24.97c3.515-3.515,3.515-9.213,0-12.728c-3.516-3.516-9.213-3.515-12.729,0L2.636,72.523
                        c-3.515,3.515-3.515,9.213,0,12.728l40.333,40.333c1.758,1.758,4.061,2.636,6.364,2.636c2.303,0,4.606-0.879,6.364-2.636
                        c3.515-3.515,3.515-9.213,0-12.728l-24.97-24.97h122.046c19.483,0,35.334,15.851,35.334,35.334s-15.851,35.334-35.334,35.334H78.531
                        c-4.971,0-9,4.029-9,9s4.029,9,9,9h74.242c29.408,0,53.334-23.926,53.334-53.334S182.182,69.886,152.774,69.886z"
            />
          </svg>
        </router-link>
      </div>
    </div>
   
  </div>
</template>


<script>
import AccountTransferValidation from "./AccounTransferValidation.vue";

export default {
  components: {
    "modal-validation": AccountTransferValidation,
  },
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
  created() {
    this.$root.$on('modalValClosed', this.closeModal);
  },
  methods: {
    closeModal: function(){
      this.isModalOn = false;
    },
    checkForm: function (e) {
      this.errors = [];

      if (!this.transferData.typeOfTransaction) {
        this.errors.push("Type of transfer required.");
      }
      if (!this.transferData.description) {
        this.errors.push("Description required.");
      }
      if (isNaN(this.transferData.amount) || this,transferData.amount == null) {
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
      }else{
          this.isModalOn = true;
          e.preventDefault();
      }

    },
  },
};
</script>


<style lang="scss" scoped>
:root {
  font-family: "Poppins", sans-serif;
}

#transfer-origin {
  margin-top: 15rem;
  font-weight: 800;
  color: white;
  background-color: rgb(183, 248, 242);
  display: flex;
  justify-content: center;
  align-items: center;
}

div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  text-decoration: none;
  color: rgb(112, 112, 112);
  font-size: small;
}

a:hover {
  color: rgb(88, 88, 226);
}

svg {
  width: 25px;
}

svg:hover {
  fill: rgb(88, 88, 226);
}

textarea {
  vertical-align: top;
  width: 300px;
  height: 100px;
  border-radius: 3px;
  padding: 3px;
}
textarea:hover {
  border-color: rgb(221, 255, 97);
}

textarea:placeholder-shown {
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: black;
  letter-spacing: 4px;
}

textarea:focus::placeholder {
  opacity: 0;
  transition: 0.2s;
}

li {
  display: flex;
  justify-content: flex-start;
  margin: 30px;
  border-radius: 3px;
}

input,
select,
textarea {
  outline: none;
  border-width: 0;
  border-radius: 2px;
  border-width: 1px;
}

input:placeholder-shown {
  font-size: 12px;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  color: black;
  letter-spacing: 4px;
}

input:focus::placeholder {
  opacity: 0;
  transition: 0.2s;
}

input:hover {
  border-color: rgb(221, 255, 97);
}

select {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  height: 40px;
}

.transtype {
  display: flex;
  flex-direction: row;
  align-items: center;
}

option {
  font-weight: bold;
}

.transfer-forms {
  margin-top: 10rem;
  position: absolute;
  justify-content: center;
  align-content: center;
  width: fit-content;
  background-color: rgb(99, 207, 193);
  border-radius: 3px;
  box-shadow: 1px 1px 5px grey;
  animation: 1s ease-in-out entry;
}

@keyframes entry {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 25px;
  font-weight: normal;
  width: 60%;
  height: 40px;
  margin-left: 25%;
  margin-right: 100%;
}

.btn1,
.btn2 {
  width: 40%;
  height: 100%;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 2px;
  font-family: "Poppins", sans-serif;
  font-weight: 900;
}

.btn1:hover {
  background-color: rgb(154, 255, 145);
}

.btn2:hover {
  background-color: rgb(255, 174, 108);
}

#money {
  margin-right: 45px;
}

#description_headline {
  margin-right: 20px;
}

#amount {
  max-width: 110px;
  padding: 5px;
}

#type {
  margin-right: 30px;
  text-align: center;
}

#code5 {
  width: 70px;
  height: 25px;
  text-align: center;
}

#code {
  margin-right: 12px;
}

select {
  width: 100px;
  text-align: center;
}

ul {
  list-style-type: none;
}

li {
  margin: 30px;
}

table {
  position: absolute;
  text-align: center;
  color: black;
  bottom: -15%;
  width: 50%;
  margin-bottom: inherit;
}

table td {
  padding: 0 10px 0 10px;
}

table th {
  padding: 20px;
}

.amount_message {
  position: absolute;
  z-index: 1;
  margin-left: 140px;
  margin-right: 10px;
  align-self: auto;
  margin-top: 80px;
}

.code_message {
  position: absolute;
  z-index: 1;
  margin-left: 140px;
  margin-right: 10px;
  align-self: auto;
  margin-top: 60px;
  animation: transform 1s ease-in-out button;
}

@keyframes button {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  80% {
    opacity: 1;
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.textarea_meassage {
  position: relative;
  margin-left: 140px;
  margin-top: 1%;
}

.code_message,
.amount_message,
.textarea_meassage {
  color: red;
  font-size: 0.5rem;
  letter-spacing: 2px;
  font-weight: bold;
}

.amount-box {
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: self-end;
}

.amount-box li {
  margin-bottom: 0;
}

.code-box {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: self-end;
  outline: none;
}

.text-meassage-box {
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column;
  align-items: self-end;
}

.text-meassage-box li {
  margin-bottom: 0;
}

.go-back-home {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 20px;
}
</style>