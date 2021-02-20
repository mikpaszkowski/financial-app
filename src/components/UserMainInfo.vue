<template>
  <div class="user-main-info">
    <personal-data></personal-data>
    <account-settings></account-settings>
    <user-email-phone></user-email-phone>
  </div>
</template>



<script>
import PersonalDataContainer from "./PersonalData.vue";
import AccountSettingsContainer from "./AccountSettings.vue";
import UserPhoneAddress from "./EmailPhone.vue";

export default {
  components: {
    "personal-data": PersonalDataContainer,
    "account-settings": AccountSettingsContainer,
    "user-email-phone": UserPhoneAddress,
  },
};
</script>



<style lang="scss">
.user-main-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  width: 71%;
  margin-left: 30px;
}
</style>