<template>
  <transition name="validation">
    <div class="val-background" v-show="modalOn">
      <div id="val-window">
        <div id="errors">
          <h1>Please correct the following error/s:</h1>
          <ul>
            <li v-for="error in occuredErrors" :key="error">{{ error }}</li>
          </ul>
        </div>
        <button id="button-ok" @click="clickedOk">OK</button>
      </div>
    </div>
  </transition>
</template>



<script>
export default {
  props: ["occuredErrors", "modalOn"],
  methods: {
    clickedOk: function () {
      this.modalOn = false;
    },
  },
};
</script>


<style lang="scss" scoped>

.validation-leave-active{
    transition: all .4s;
    animation: .2s both sizing reverse ;
}

.validation-enter-active{
    transition: all .4s;
    animation: .2s both sizing;
}

 @keyframes sizing {
      from{
          opacity: 0;
          transform: translateY(-35rem);
      }
      to{
          opacity: 1;
          transform: translateY(0);
      }
  }


* {
  font-family: "Helvetica", sans-serif;
}

.val-background {
  position: fixed;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.561);
  width: 100vw;
  height: 200%;
  display: flex;
  justify-content: center;
  align-content: center;
  

 

  #val-window {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #eee;
    color: rgb(255, 113, 113);
    padding: 30px 20px;

    li {
      font-weight: 100;
      margin: 1rem 0;
      letter-spacing: .1rem;
    }
  }

  #button-ok {
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    border-bottom-width: 4px;
    width: 10rem;
    height: 3rem;
    background-color: rgb(146, 255, 173);
    border-radius: 10rem;
    margin-top: 1.25rem;
    letter-spacing: 0.25rem;
    cursor: pointer;
    font-size: 1.5rem;
    transition: 0.1s ease-in;

    &:active {
      border-bottom-width: 0;
      transform: translateY(4px);
    }
  }
}

h1 {
  margin-bottom: 3rem;
}
</style>