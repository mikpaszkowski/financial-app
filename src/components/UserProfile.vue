<template>
  <div class="user__profile_container">
    <TheLeftPanel />
    <UserProfileDetails />
  </div>
</template>

<script>
import TheLeftPanel from "./TheLeftPanel";
import UserProfileDetails from "./UserProfileDetails";

export default {
  data() {
    return {
      modalPersonalDetails_open: false,
      modalAccountSettings_open: false,
      modalEmailAddress_open: false,
      show: false
    };
  },
  components: {
    TheLeftPanel,
    UserProfileDetails,
  }
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";
</style>