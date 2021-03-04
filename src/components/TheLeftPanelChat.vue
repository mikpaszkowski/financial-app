<template>
  <div class="container-chat">
    <ion-icon name="chatbubbles-outline" id="chat-pic"></ion-icon>
    <div class="question1">Need help?</div>
    <div class="question2">
      Do you have any questions? Or you may be concern about issues with your
      account? We will help you!
    </div>
    <button class="chatwithus">Chat with Us</button>
  </div>
</template>



<script>
export default {};
</script>




<style lang="scss">
$input-font-color: #656565;
$flat-green: #2ecc71;
$save-button-color: #16a085;
$main-font: "Rubik", sans-serif;
$container-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

.container-chat {
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

  #chat-pic {
    font-size: 500%;
    color: $input-font-color;
  }

  .question1 {
    font-weight: bold;
    text-align: center;
    color: $input-font-color;
    padding: 0 50px 0 50px;
  }

  .question2 {
    width: 300px;
    text-align: center;
    line-height: 1.3;
    font-size: 15px;
    color: lighten($input-font-color, 15%);
  }
  .chatwithus {
    height: 60px;
    width: 90%;
    border: none;
    background-color: $save-button-color;
    border-radius: 5px;
    font-weight: bold;
    margin: 5px;
    box-shadow: $container-shadow;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
    font-size: 0.8em;
    color: white;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: lighten($save-button-color, 15%);
      color: white;
    }
  }
}
</style>