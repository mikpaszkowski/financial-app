<template>
  <footer>
    <div class="content">
      <div class="upper-info">
      <div class="links">
        <p>About Us</p>
        <p>Support</p>
        <p>Help</p>
        <p>Careers</p>
        <p>Prizing</p>
        <p>Help</p>
      </div>
      <div class="social-media">
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-twitter"></ion-icon>
        <ion-icon name="logo-google"></ion-icon>
        <ion-icon name="logo-youtube"></ion-icon>
        <ion-icon name="logo-discord"></ion-icon>
      </div>
    </div>
    <hr id="lower" />
    <div class="lower-info">
      <div class="copyright">
        Copyright &#169 2021 Moneify All Rights Reserved.
      </div>
      <div class="terms">
        <p>Security</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
    </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

footer {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: rgba(238, 238, 238, 0.671);
  height: 20rem;
  font-family: $main-font;
  color: $font-color;
  font-weight: 500;

  .content {
    width: 1500px;
    margin: 0 auto;
    .upper-info {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      .links {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        p {
          margin: 0 10px;
        }
      }
      .social-media {
        font-size: 1.6em;

        ion-icon {
          margin: 0 15px;
        }
      }
    }

    .lower-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .terms {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        p {
          margin: 0 15px;
        }
      }

      .copyright {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
      }
    }
  }
}

hr {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
</style>