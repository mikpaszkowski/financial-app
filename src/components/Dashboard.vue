<template>
  <transition name="fade">
    <div id="account">
      <modal-personal-details
        :isPersonalModalOpen="modalPersonalDetails_open"
      ></modal-personal-details>

      <modal-email-address
        :isEmailModalOpen="modalEmailAddress_open"
      ></modal-email-address>
      <profile-balance-info></profile-balance-info>
      <user-main-info></user-main-info>
      <!-- <div class="module1">
        

        <div class="container">
          <div class="person2">
            <div class="background-2"></div>
            <div class="walletimage">
              <img src="../assets/wallet.png" id="wallet" alt="wallet" />
            </div>
            <div class="money">4543 $</div>
            <div class="availablebalance">Available Balance</div>
            <div class="transferbuttons">
              <router-link to="/home/transfer">
                <button class="transfer" id="transfer">Transfer</button>
              </router-link>
            </div>
          </div>
          <div class="middle_module">
            <div class="background"></div>
            <div class="nav">
              <div class="headline">Account settings</div>
              <div class="edit-button-svg">
                <button
                  class="edit2"
                  id="edit2"
                  @click="modalAccountSettingsOpen"
                >
                  <EditSectionSVG id="svg-edit" />
                </button>
              </div>
            </div>
            <ul class="account_ul">
              <li>
                <label for>Language:</label>
                <p id="language_p">{{currentLanguageCom.length > 0 ? currentLanguageCom : currentLanguage}}</p>
              </li>

              <li>
                <label for>Time Zone:</label>
                <p id="time_zone_p">{{currentTimeZoneCom.length > 0 ? currentTimeZoneCom : currentTimeZone}}</p>
              </li>
              <li>
                <label for>Status:</label>
                <div class="status-box">
                  <div class="status enabled">
                    <ion-icon name="checkmark-circle-outline" id="enable-icon"></ion-icon>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="container">
          <div class="person3">
            <div class="background-3"></div>
            <div class="personaldata">
              <img src="../assets/chat.png" id="chat" alt="chatpng" />
            </div>
            <div class="question1">Need help?</div>
            <div class="question2">
              Do you have any questions? Or you may be concern about issues with
              your account? We will help you!
            </div>
            <button class="chatwithus">Chat with Us</button>
          </div>
          <div class="lower_module">
            <div class="background"></div>
            <div class="nav">
              <div class="headline">Email & Phone</div>
              <div class="edit-button-svg">
                <button class="edit3" id="edit3" @click="modalEmailAddressOpen">
                  <EditSectionSVG id="svg-edit" />
                </button>
              </div>
            </div>
            <ul class="email_ul">
              <li>
                <label>Email:</label>
                <p id="email_p">
                  {{
                    currentEmailAddressCom.length > 0
                      ? currentEmailAddressCom
                      : currentEmailAddress
                  }}
                </p>
                <div class="primary"></div>
                <li>
                  <label>Email:</label>
                <p id="email_p">
                  {{
                    additionalEmailAddressCom.length > 0
                      ? additionalEmailAddressCom
                      : additionalEmailAddress
                  }}
                </p>
                <div class="primary hidden"></div>
                </li>
              </li>
              <li>
                <label>Phone:</label>
                <p>
                  {{ phoneNumberCom.length > 0 ? phoneNumberCom : phoneNumber }}
                </p>
                <div class="primary"></div>
              </li>
              <li>
                <label>Phone:</label>
                <p>
                  {{ additionalPhoneNumberCom.length > 0 ? additionalPhoneNumberCom : additionalPhoneNumber }}
                </p>
                <div class="primary hidden"></div>
              </li>
            </ul>
          </div>
        </div>
      </div> -->
    </div>
  </transition>
</template>


<script>
import EditAvatar from "../assets/edit_avatar.svg";
import EditSectionSVG from "../assets/edit_icon.svg";

import ModalEmailAddress from "./ModalEmailAddress.vue";
import { mapGetters } from "vuex";
import UserBalanceInfo from "./ProfileAndBalanceBlock.vue";
import UserMainInfo from "./UserMainInfo.vue";

export default {
  data() {
    return {
      modalAccountSettings_open: false,
      modalEmailAddress_open: false,
      userName: "",
      userSurname: "",
      phoneNumber: "",
      currentEmailAddress: "",
      additionalPhoneNumber: "",
      additionalEmailAddress: "",
      address: "",
      birthDate: "",
      currentLanguage: "",
      currentTimeZone: "",
    };
  },
  components: {
    EditAvatarImage: EditAvatar,
    EditSectionSVG: EditSectionSVG,
    "modal-email-address": ModalEmailAddress,
    "profile-balance-info": UserBalanceInfo,
    "user-main-info": UserMainInfo,
  },
  methods: {
    modalPersonalDetailsOpen: function () {
      this.modalPersonalDetails_open = true;
    },
    modalPersonalDetailsClosed: function () {
      this.modalPersonalDetails_open = false;
    },
    modalAccountSettingsOpen: function () {
      this.modalAccountSettings_open = true;
    },
    modalAccountSettingsClosed: function () {
      this.modalAccountSettings_open = false;
    },
    modalEmailAddressOpen: function () {
      this.modalEmailAddress_open = true;
    },
    modalEmailAddressClosed: function () {
      this.modalEmailAddress_open = false;
    },
    ...mapGetters([
      "getCurrentName",
      "getCurrentBirthDate",
      "getCurrentSurname",
      "getCurrentPhoneNumber",
      "getCurrentAddress",
      "getCurrentEmailAddress",
      "getAdditionalEmailAddress",
      "getAdditionalPhoneNumber",
      "getCurrentTimeZone",
      "getCurrentLanguage",
    ]),
  },
  mounted() {
    this.userName = this.getCurrentName;
    this.userSurname = this.getCurrentSurname;
    this.phoneNumber = this.getCurrentPhoneNumber;
    this.birthDate = this.getCurrentBirthDate;
    this.address = this.getCurrentAddress;
    this.currentEmailAddress = this.getCurrentEmailAddress;
    this.additionalPhoneNumber = this.getAdditionalPhoneNumber;
    this.additionalEmailAddress = this.getAdditionalEmailAddress;
    this.currentTimeZone = this.getCurrentTimeZone;
    this.currentLanugage = this.getCurrentLanguage;
  },
  computed: {
    ...mapGetters({
      userNameCom: "getCurrentName",
      birthDateCom: "getCurrentBirthDate",
      userSurnameCom: "getCurrentSurname",
      phoneNumberCom: "getCurrentPhoneNumber",
      addressCom: "getCurrentAddress",
      currentEmailAddressCom: "getCurrentEmailAddress",
      additionalEmailAddressCom: "getAdditionalEmailAddress",
      additionalPhoneNumberCom: "getAdditionalPhoneNumber",
      currentTimeZoneCom: "getCurrentTimeZone",
      currentLanguageCom: "getCurrentLanguage",
    }),
  },
  created() {
    this.$root.$on(
      "modalPersonalDetailsClosed",
      this.modalPersonalDetailsClosed
    );
    this.$root.$on(
      "modalAccountSettingsClosed",
      this.modalAccountSettingsClosed
    );
    this.$root.$on("modalEmailClosed", this.modalEmailAddressClosed);
  },
};
</script>


<style lang="scss"scoped>
$font-color: rgb(68, 68, 68);
$font-size: 20px;
$main-font: "Rubik", sans-serif;
$modal-width: 700px;
$modal-height: 700px;
$input-border-color: #bdc3c7;
$input-font-color: #656565;
$save-button-color: #16a085;
$border-radius: 5px;
$flat-green: #2ecc71;
$flat-blue: #3498db;
$flat-red: #e74c3c;

* {
  font-family: $main-font;
  font-size: $font-size;
}

#account {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.primary {
  position: absolute;
  width: 80px;
  height: 20px;
  right: 200px;
  background-color: $flat-blue;
  color: white;
  font-weight: bold;
  font-size: 0.75em;
  border-radius: 2em;
  text-align: center;
  padding-top: 3px;
  letter-spacing: 1px;
  margin-left: 10px;

  &::before {
    content: "Primary";
  }
}

.status-box {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  .status {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;
    height: 40px;
    left: 450px;
    color: white;
    font-size: 1em;
    font-weight: 600;
    border-radius: 2em;
    text-align: center;
    letter-spacing: 1px;
    margin-left: 10px;

    #enable-icon {
      color: white;
      font-size: 30px;
      margin-right: 4px;
    }
  }
}

.enabled {
  background-color: $flat-green;

  &::after {
    content: "Enabled";
  }
}

.disabled {
  background-color: $flat-red;

  &::after {
    content: "Disabled";
  }
}

.module1 {
  display: flex;
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  margin: 35px;
  padding: 15px;
  transition: all 1s ease-in-out;
}

li {
  display: flex;
  flex-direction: column;
  margin: 45px;
  justify-content: space-between;
}

ul {
  list-style-type: none;
  padding-left: 51px;
}

.personal_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.account_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.email_ul li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.EditSectionSVG {
  width: 25px;
  height: 25px;
}

svg:hover {
  fill: rgb(86, 145, 255);
  transform: scale(1.1);
}

#svg-edit {
  width: 35px;
  height: 35px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  width: 1500px;
  height: 500px;
  margin: 10px;
  animation: 0.4s container_animation;
  animation-fill-mode: both;
}

@keyframes container_animation {
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.person1,
.person2,
.person3 {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  box-shadow: 0px 0px 10px 0px #203753;
  width: 400px;
  height: 100%;
  font-size: 1.5em;
  border-radius: 5px;
  margin-right: 15px;
}

.background-1,
.background-2,
.background-3 {
  position: absolute;
  z-index: 0;
}

.background-1,
.background-2,
.background-3,
.background {
  background-color: rgb(255, 255, 255);
}

.background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.background-1 {
  width: 100%;
  height: 100%;
}

.background-2 {
  width: 100%;
  height: 100%;
  z-index: -1;
}

.background-3 {
  width: 100%;
  height: 100%;
  z-index: -1;
}

.person2 {
  padding-bottom: 0;
  padding: 0;
  justify-content: flex-end;
}

.personaldata1 {
  display: flex;
  justify-content: center;
}

.personaldata {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  margin: 5px;
  font-size: 1.1em;
  color: $font-color;
}

.personaldata4 {
  position: relative;
  width: 200px;
}

.personal_data {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
  padding: 10px;
}

#chat {
  width: 120px;
  object-position: center;
}

.chatwithus {
  height: 50px;
  width: 130px;
  border: none;
  background-color: rgb(131, 235, 209);
  font-weight: bold;
  margin: 5px;
  box-shadow: 1px 1px 5px grey;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
}

.chatwithus:hover {
  background-color: rgb(87, 153, 136);
  color: white;
}

.question1 {
  font-weight: bold;
  text-align: center;
  padding: 0 50px 0 50px;
}

.question2 {
  width: 180px;
  text-align: center;
  font-size: 9px;
}

.personaldata2,
.personaldata3,
.personaldata4 {
  font-weight: 600;
  letter-spacing: 1px;
}

.personaldata4 {
  width: 200px;
}

#face_photo {
  position: relative;
  z-index: 0;
  width: 120px;
  height: 110px;
  border-radius: 100%;
  box-shadow: 1px 1px 5px 0px grey;
}

.upper_module,
.lower_module,
.middle_module {
  display: flex;
  align-self: flex-start;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  box-shadow: 0px 0px 10px 0px #203753;
  height: 100%;
  border-radius: 5px;
  width: 1000px;
}

.lower_module {
  display: flex;
  align-self: flex-start;

  .email_ul {
    padding-right: 60px;
  }
}

.middle_module {
  display: flex;
  align-self: flex-start;
}

.email {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 300px;
}

.email_header {
  margin: 10px 30px;
}

#wallet {
  width: 100px;
  margin: 10px;
}

.money {
  font-size: 30px;
  text-align: center;
  width: 200px;
}

.transferbuttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
}

.transferbuttons a {
  width: 100%;
}

.transfer {
  width: 100%;
  height: 35px;
  border-radius: 0;
  border-right-width: 0;
  border-left-width: 0;
  background-color: transparent;
  font-weight: bold;
  transition: transform 0.6s ease-in-out;
  cursor: pointer;
}

.transfer:hover {
  background-color: rgb(32, 164, 216);
}

.transfer a {
  text-decoration: none;
}

.edit1,
.edit2,
.edit3 {
  position: absolute;
  right: 10px;
  bottom: 25px;
  background-color: transparent;
  border: none;
  outline: none;
  border-radius: 0;
  fill: $flat-green;
}

.nav {
  display: inline-flex;
  position: relative;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
}

.headline {
  font-size: 1.4em;
  font-weight: normal;
  margin-left: 19px;
  margin-top: 14px;
}

p {
  margin: 0;
  width: 58%;
  font-weight: 400 !important;
}

.data {
  font-size: 20px;
}

label {
  font-weight: 600;
  color: $input-font-color;
}

@media screen and (max-width: 1306px) {
  .person1,
  .person2,
  .person3,
  .upper_module,
  .middle_module,
  .lower_module {
    width: 100%;
  }

  .person1,
  .person2,
  .person3 {
    margin-right: 0;
    margin-bottom: 20px;
  }

  .person1 {
    padding: 15px 0;
  }
}

.hidden {
  display: none;
}
</style>