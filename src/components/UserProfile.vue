<template>
  <div class="container-profile">
    <div class="personaldata personaldata1">
      <img
        src="../../public/assets/face_photo.jpg"
        id="face_photo"
        alt="facephoto"
      />
    </div>
    <div class="personaldata">
      Welcome,
      {{ userName }}
      {{ userSurname }}
    </div>
    <ion-icon name="create-outline" id="edit-icon"></ion-icon>
  </div>
</template>

<script>
import EditSectionSVG from "../../public/assets/edit_icon.svg";
import { mapGetters } from "vuex";

export default {
  components: {
    EditSectionSVG: EditSectionSVG,
  },
  computed: {
    ...mapGetters({
      userName: "getCurrentName",
      userSurname: "getCurrentSurname",
    }),
  },
};
</script>


<style lang="scss" scoped>
$font-color: rgb(68, 68, 68);
$font-size: 20px;
$main-font: "Rubik", sans-serif;
$flat-green: #2ecc71;
$save-button-color: #16a085;
$container-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

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
  height: 360px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  border-radius: 5px;
  margin-right: 15px;
  margin-bottom: 50px;

  .personaldata {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    margin: 30px 5px 5px 5px;
    font-size: 1.1em;

    color: $font-color;

    #face_photo {
      position: relative;
      z-index: 0;
      width: 150px;
      height: 135px;
      border-radius: 100%;
      margin-top: 40px;
      box-shadow: 1px 1px 5px 0px grey;
    }
  }

  #edit-icon {
    color: $save-button-color;
    font-size: 40px;
    transition: color 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;

    &:hover {
      color: lighten($save-button-color, 15%);
      transform: scale(1.1);
      cursor: pointer;
    }
  }
}
</style>