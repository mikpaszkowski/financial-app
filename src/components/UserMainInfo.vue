<template>
  <div class="user-main-info">
    <personal-data></personal-data>
    <account-settings></account-settings>
  </div>
</template>



<script>
import PersonalDataContainer from "./PersonalData.vue";
import AccountSettingsContainer from "./AccountSettings.vue";

export default {
  components: {
    "personal-data": PersonalDataContainer,
    "account-settings": AccountSettingsContainer,
  },
};
</script>



<style lang="scss">
.user-main-info {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-content: center;
}
</style>