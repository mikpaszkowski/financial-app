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
</style>