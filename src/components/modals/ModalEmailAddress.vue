<template>
  <div>
    <!-- <div class="dark-background" id="dark-background"></div> -->
    <div class="container-module" id="conatiner-module">
      <div class="headline-container">
        <h1>Email & Phone</h1>
        <div class="exit" id="exit" @click="modalClosed">
          <img src="../../../public/img/exit.svg" alt="" />
        </div>
      </div>
      <div class="edit-form" id="form1">
        <ul class="form1">
          <li>
            <label for="email" class="label-email">
              Email
              <div class="primary-email"></div>
              <p
                @click="makePrimary('.primary-email')"
                class="make-primary-btn hidden"
              >
                make primary
              </p>
            </label>
            <input
              type="text"
              name="email"
              v-model="emailAddress"
              :placeholder="currentEmailAddressCom"
            />
          </li>
          <li>
            <label for="email" class="label-email"
              >Email
              <div class="primary-email hidden"></div>
              <p
                @click="makePrimary('.primary-email')"
                class="make-primary-btn"
              >
                make primary
              </p>
            </label>
            <input
              type="text"
              name="email"
              v-model="additionalEmailAddress"
              :placeholder="additionalEmailAddressCom"
            />
          </li>
          <li>
            <label for="phone" class="label-phone"
              >Phone number
              <div class="primary-phone"></div>
              <p
                @click="makePrimary('.primary-phone')"
                class="make-primary-btn hidden"
              >
                make primary
              </p>
            </label>
            <input
              type="text"
              name="phone"
              v-model="phoneNumber"
              :placeholder="currentPhoneNumberCom"
            />
          </li>
          <li>
            <label for="phone" class="label-phone"
              >Phone number
              <div class="primary-phone hidden"></div>
              <p
                @click="makePrimary('.primary-phone')"
                class="make-primary-btn"
              >
                make primary
              </p>
            </label>
            <input
              type="text"
              name="phone"
              v-model="additionalPhoneNumber"
              :placeholder="additionalPhoneNumberCom"
            />
          </li>
        </ul>
        <button class="confirm-btn" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
//import ExitIconSVG from "../../../public/img/exit.svg";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      emailAddress: "",
      additionalEmailAddress: "",
      phoneNumber: "",
      additionalPhoneNumber: "",
      numOfPrimaryPhone: 0,
      numOfPrimaryEmail: 0,
    };
  },

  methods: {
    modalClosed: function () {
      this.$root.$emit("email-modal-close");
    },
    ...mapActions([
      "updateCurrentEmailAddress",
      "updateAdditionalEmailAddress",
      "updateCurrentPhoneNumber",
      "updateAdditionalPhoneNumber",
    ]),

    save() {
      this.updateCurrentEmailAddress(this.emailAddress);
      this.updateAdditionalEmailAddress(this.additionalEmailAddress);
      this.updateCurrentPhoneNumber(this.phoneNumber);
      this.updateAdditionalPhoneNumber(this.additionalPhoneNumber);
    },

    makePrimary(className) {
      console.log(primaryMark);
      let primaryMark = document.querySelectorAll(className);
      Array.from(primaryMark).forEach((element, index) => {
        if (element.classList.contains(".hidden")) {
          element.classList.toggle("hidden");
          element.nextElementSibling.classList.toggle("hidden");
          this.numOfPrimaryPhone = index;
          console.log(this.numOfPrimaryPhone);
        } else {
          element.classList.toggle("hidden");
          element.nextElementSibling.classList.toggle("hidden");
        }
      });
    },
    savePrimaryPhoneEmail() {},
  },
  computed: {
    ...mapGetters({
      currentEmailAddressCom: "getCurrentEmailAddress",
      additionalEmailAddressCom: "getAdditionalEmailAddress",
      currentPhoneNumberCom: "getCurrentPhoneNumber",
      additionalPhoneNumberCom: "getAdditionalPhoneNumber",
    }),
  },
};
</script>



<style lang="scss" scoped>
@import "../../styles/main.scss";

.hidden {
  display: none;
}

.label-email,
.label-phone {
  display: flex;
  align-items: center;

  .make-primary-btn {
    margin: 0;
    margin-left: 10px;
    font-size: 0.9em;
    font-style: $main-font;
    text-transform: uppercase;
    color: $flat-green;
    transition: text-decoration 0.2s ease-in-out;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .primary-phone,
  .primary-email {
    width: 80px;
    height: 20px;
    background-color: $flat-blue;
    color: white;
    font-weight: bold;
    font-size: 0.93em;
    border-radius: 2em;
    text-align: center;
    padding-top: 3px;
    letter-spacing: 1px;
    margin-left: 10px;

    &::before {
      content: "Primary";
    }
  }
}
</style>