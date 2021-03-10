<template>
  <div class="user-main-info">
    <PersonalData />
    <AccountSettings />
    <UserPhoneAddress />
  </div>
</template>



<script>
import PersonalData from "./UserProfileDetailsPersonal.vue";
import AccountSettings from "./UserProfileDetailsAccount.vue";
import UserPhoneAddress from "./UserProfileDetailsEmailPhone.vue";

export default {
  components: {
    PersonalData,
    AccountSettings,
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
  margin-left: 3rem !important;
}

@media screen and (max-width: 1306px) {
  .user-main-info {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
  }
}
</style>