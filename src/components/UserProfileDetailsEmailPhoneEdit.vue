<template>
  <div>
    <div class="container-module" id="conatiner-module">
      <div class="headline-container">
        <h1>Email & Phone</h1>
        <div class="exit" id="exit" @click="closeModal">
          <CloseIcon class="close-icon" />
        </div>
      </div>
      <div class="edit-form" id="form1">
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
        <input type="text" name="email" v-model="emailPhoneInfo.emailAddress" />
        <label for="email" class="label-email"
          >Email
          <div class="primary-email hidden"></div>
          <p @click="makePrimary('.primary-email')" class="make-primary-btn">
            make primary
          </p>
        </label>
        <input
          type="text"
          name="email"
          v-model="emailPhoneInfo.additionalEmailAddress"
        />
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
        <input type="text" name="phone" v-model="emailPhoneInfo.phoneNumber" />
        <label for="phone" class="label-phone"
          >Phone number
          <div class="primary-phone hidden"></div>
          <p @click="makePrimary('.primary-phone')" class="make-primary-btn">
            make primary
          </p>
        </label>
        <input type="text" v-model="emailPhoneInfo.additionalPhoneNumber" />
        <button class="confirm-btn" @click="save">Save</button>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapGetters } from "vuex";
import CloseIcon from "./icons/CloseIcon";

export default {
  components: {
    CloseIcon,
  },
  data() {
    return {
      emailPhoneInfo: {
        emailAddress: "",
        additionalEmailAddress: "",
        phoneNumber: "",
        additionalPhoneNumber: "",
      },
      numOfPrimaryPhone: 0,
      numOfPrimaryEmail: 0,
    };
  },

  methods: {
    closeModal: function () {
      this.$emit("close");
    },
    ...mapActions("user", ["updateEmailPhone"]),

    save() {
      this.updateEmailPhone(this.emailPhoneInfo);
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
    ...mapGetters("user", {
      currentEmailAddressCom: "getCurrentEmailAddress",
      additionalEmailAddressCom: "getAdditionalEmailAddress",
      currentPhoneNumberCom: "getCurrentPhoneNumber",
      additionalPhoneNumberCom: "getAdditionalPhoneNumber",
    }),
  },
};
</script>



<style lang="scss" scoped>
@import "../styles/main.scss";

.hidden {
  display: none;
}

.label-email,
.label-phone {
  display: flex;
  align-items: center;

  .make-primary-btn {
    margin: 0;
    margin-left: 1rem;
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
    background-color: $flat-blue;
    color: white;
    font-weight: bold;
    font-size: 0.93rem;
    border-radius: 2rem;
    text-align: center;
    padding: 0.3rem;
    letter-spacing: 0.1rem;
    margin-left: 1rem;
    padding: 0.5rem;

    &::before {
      content: "Primary";
    }
  }
}
</style>