<template>
  <div class="profile-balance-block">
    <TheLeftPanelUserPhoto />
    <BalanceInfo />
    <Chat />
  </div>
</template>


<script>
import TheLeftPanelUserPhoto from "./TheLeftPanelUserPhoto.vue";
import BalanceInfo from "./TheLeftPanelUserBalance.vue";
import Chat from "./TheLeftPanelChat.vue";

export default {
  components: {
    TheLeftPanelUserPhoto,
    BalanceInfo,
    Chat,
  },
};
</script>


<style lang="scss">
.profile-balance-block {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40rem;
  margin-right: 2rem !important;
}

@media screen and (max-width: 1306px) {
  .profile-balance-block {
    width: 100%;
    margin: 0;
  }
}
</style>