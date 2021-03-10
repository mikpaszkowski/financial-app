<template>
  <div class="container-profile">
    <div class="personaldata personaldata1">
      <img
        src="../../public/img/face_photo.jpg"
        id="face_photo"
        alt="facephoto"
      />
    </div>
    <div class="personaldata">
      <p>
        Welcome,
        {{ userName }}
        {{ userSurname }}
      </p>
    </div>
    <ion-icon name="create-outline" id="edit-icon"></ion-icon>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("user", {
      userName: "getCurrentName",
      userSurname: "getCurrentSurname",
    }),
  },
};
</script>


<style lang="scss" scoped>
@import "../styles/main.scss";

.container-profile {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  box-shadow: $container-shadow;
  background-color: white;
  width: 100%;
  height: 36rem;

  border-radius: $border-radius;
  margin-right: 15px;
  margin-bottom: 5rem;

  .personaldata {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 3rem 0.5rem 0.5rem 0.5rem;
    font-size: 1.1em;

    p {
      font-weight: 400;
      font-size: 1em;
      text-align: center;
      margin-bottom: 0;
    }

    color: $font-color;

    #face_photo {
      position: relative;
      z-index: 0;
      width: 15rem;
      height: 13.5rem;
      border-radius: 100%;
      margin-top: 4rem;
      box-shadow: 0.1rem 0.1rem 5px 0rem grey;
    }
  }

  #edit-icon {
    color: $dark-flat-green;
    font-size: 4rem;
    transition: color 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    &:hover {
      color: lighten($dark-flat-green, 15%);
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
</style>