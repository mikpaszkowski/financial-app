<template>
  <div>
    <div class="person2">
      <div class="background-2"></div>
      <div class="walletimage">
        <img src="../assets/wallet.png" id="wallet" alt="wallet" />
      </div>
      <div class="money">4543 $</div>
      <div class="availablebalance">Available Balance</div>
      <div class="transferbuttons">
        <router-link to="/home/transfer">
          <button class="transfer" id="transfer">Transfer</button>
        </router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>



<style lang="scss" scoped>
</style>