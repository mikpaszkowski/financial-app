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
</style>