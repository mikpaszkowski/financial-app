<template>
  <div class="main-container" id="account">
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
      show: false,
    };
  },
  components: {
    TheLeftPanel,
    UserProfileDetails,
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