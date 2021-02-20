<template>
  <div class="person2">
    <ion-icon name="wallet-outline" id="wallet-pic"></ion-icon>
    <div class="money">4543 $</div>
    <div class="availablebalance">Available Balance</div>
    <div class="transferbuttons">
      <button class="transfer" id="transfer">Transfer</button>
    </div>
  </div>
</template>



<script>
export default {};
</script>




<style lang="scss" scoped>
$input-font-color: #656565;
$flat-green: #2ecc71;
$save-button-color: #16a085;
$main-font: "Rubik", sans-serif;
$container-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

* {
  font-family: $main-font;
}

.person2 {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  box-shadow: $container-shadow;
  background-color: white;
  width: 100%;
  height: 360px;
  font-size: 1.5em;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 50px;

  #wallet-pic {
    font-size: 500%;
    color: $input-font-color;
  }

  .money {
    font-size: 50px;
    text-align: center;
    width: 200px;
    font-weight: bold;
  }
  .availablebalance {
    font-size: 20px;
    color: lighten($input-font-color, 20%);
    font-weight: bold;
  }
  .transferbuttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
    width: 100%;

    a {
      width: 100%;
    }

    .transfer {
      width: 90%;
      height: 60px;
      background-color: transparent;
      font-weight: bold;
      transition: transform 0.6s ease-in-out;
      cursor: pointer;
      background-color: $save-button-color;
      outline: none;
      color: white;
      font-size: 27px;
      border: none;
      box-shadow: 1px 1px 4px 0px #505050;
      border-radius: 5px;
      transition: background-color 0.2s ease-in-out;

      &:hover {
        background-color: lighten($save-button-color, 15%);
      }
      a {
        text-decoration: none;
      }
    }
  }
}
</style>