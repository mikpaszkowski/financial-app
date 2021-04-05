<template>
  <div class="user-main-info">
    <PersonalData :personalData="personalData" />
    <AccountSettings :accountSettings="accountSettings"/>
    <UserPhoneAddress :emailPhoneAddress="emailPhoneAddress"/>
  </div>
</template>

<script>
import PersonalData from "./UserProfileDetailsPersonal.vue";
import AccountSettings from "./UserProfileDetailsAccount.vue";
import UserPhoneAddress from "./UserProfileDetailsEmailPhone.vue";
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    PersonalData,
    AccountSettings,
    UserPhoneAddress
  },
  setup() {
    const store = useStore();

    return {
      personalData: computed(() => store.getters["user/getPersonalData"]),
      accountSettings: computed(() => store.getters["user/getAccountSettings"]),
      emailPhoneAddress: computed(() => store.getters["user/getEmailPhoneAddress"])
    };
  }
};
</script>

<style lang="scss"></style>
