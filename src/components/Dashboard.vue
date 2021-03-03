<template>
  <div class="main-container" id="account">
    <UserBalanceInfo></UserBalanceInfo>
    <UserMainInfo></UserMainInfo>
  </div>
</template>


<script>
import UserBalanceInfo from "./ProfileAndBalanceBlock.vue";
import UserMainInfo from "./UserMainInfo.vue";

import ModalAccountSettings from "../components/modals/ModalAccountSettings";
import ModalEmailAddress from "../components/modals/ModalEmailAddress";

export default {
  data() {
    return {
      modalPersonalDetails_open: false,
      modalAccountSettings_open: false,
      modalEmailAddress_open: false,
      show: false,
    };
  },
  components: {
    UserBalanceInfo,
    UserMainInfo,
    ModalAccountSettings,
    ModalEmailAddress,
  },
  created() {
    // this.$root.$on("personal-data-modal-open", () => {
    //   this.modalPersonalDetails_open = true;
    // });
    // this.$root.$on("personal-data-modal-close", () => {
    //   this.modalPersonalDetails_open = false;
    // });
    // this.$root.$on("account-settings-modal-open", () => {
    //   console.log("open -open");
    //   this.modalAccountSettings_open = true;
    // });
    // this.$root.$on("account-settings-modal-close", () => {
    //   this.modalAccountSettings_open = false;
    // });
    // this.$root.$on("email-modal-open", () => {
    //   this.modalEmailAddress_open = true;
    // });
    // this.$root.$on("email-modal-close", () => {
    //   this.modalEmailAddress_open = false;
    // });
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";

* {
  font-family: $main-font;
  font-size: $font-size;
}

.main-container {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 100px;
  background-color: $backgroundColor;
}

@media screen and (max-width: 1306px) {
  .main-container {
    flex-direction: column;
  }
}
</style>