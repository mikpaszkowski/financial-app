<template>
  <div class="user-main-info">
    <PersonalDataContainer></PersonalDataContainer>
    <AccountSettingsContainer></AccountSettingsContainer>
    <UserPhoneAddress></UserPhoneAddress>
  </div>
</template>



<script>
import PersonalDataContainer from "./PersonalData.vue";
import AccountSettingsContainer from "./AccountSettings.vue";
import UserPhoneAddress from "./EmailPhone.vue";

export default {
  components: {
    PersonalDataContainer,
    AccountSettingsContainer,
    UserPhoneAddress,
  },
};
</script>



<style lang="scss">
.user-main-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
  width: 50%;
  margin-left: 30px;
}

@media screen and (max-width: 1306px) {
  .user-main-info {
    width: 100%;
    margin-left: 0;
    margin-top: 20px;
  }
}
</style>