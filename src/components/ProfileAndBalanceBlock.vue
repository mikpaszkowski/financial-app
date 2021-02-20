<template>
  <div class="profile-balance-block">
    <user-profile></user-profile>
    <balance-tranfer-info></balance-tranfer-info>
    <chat-with-us></chat-with-us>
  </div>
</template>


<script>
import profile from "./UserProfile.vue";
import balanceInfo from "./TransferBalanceInfo.vue";
import chat from "./ChatWithUs.vue";

export default {
  components: {
    "user-profile": profile,
    "balance-tranfer-info": balanceInfo,
    "chat-with-us": chat,
  },
};
</script>


<style lang="scss">
.profile-balance-block {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
  height: 1500px;
  margin-right: 20px;
}
</style>