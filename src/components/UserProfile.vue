<template>
  <div class="user-profile">
    <div class="person1">
      <div class="background-1 background-transparency"></div>
      <div class="personaldata personaldata1">
        <img src="../assets/face_photo.jpg" id="face_photo" alt="facephoto" />
        <div class="editAvatar">
          <EditAvatarImage />
        </div>
      </div>

      <div class="personaldata personaldata2">
        Welcome, <br />
        {{ userNameCom.length > 0 ? userNameCom : userName }}
        {{ userSurnameCom.length > 0 ? userSurnameCom : userSurname }}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style lang="scss" scoped>
</style>