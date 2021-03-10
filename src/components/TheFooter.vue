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
        <ion-icon name="logo-facebook" id="fb-icon"></ion-icon>
        <ion-icon name="logo-instagram" id="ig-icon"></ion-icon>
        <ion-icon name="logo-twitter" id="twitter-icon"></ion-icon>
        <ion-icon name="logo-google" id="google-icon"></ion-icon>
        <ion-icon name="logo-youtube" id="yt-icon"></ion-icon>
        <ion-icon name="logo-discord" id="disc-icon"></ion-icon>
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
  bottom: 0;
  right: 0;
  width: 100%;

  .content {
    width: 150rem;
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
          margin: 0 1rem !important;
          cursor: pointer;
          transition: color 0.2s ease;
        }
      }
      .social-media {
        font-size: 0.8rem;

        ion-icon {
          margin: 0 1.5rem !important;
          transition: color 0.2s ease-in-out;
          cursor: pointer;
        }
      }
    }

    .lower-info {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: 1.5rem;

      .terms {
        display: flex;
        justify-content: space-between;
        flex-direction: row;

        p {
          margin: 0 1.5rem !important;
          cursor: pointer;
          transition: color 0.2s ease;
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

#fb-icon:hover {
  color: $facebook;
}
#yt-icon:hover {
  color: $youtube;
}
#disc-icon:hover {
  color: $discord;
}
#twitter-icon:hover {
  color: $twitter;
}
#ig-icon:hover {
  color: $facebook;
}

#google-icon:hover {
  color: $google;
}

.links > p:nth-child(n):hover {
  color: $dark-flat-green;
}
.terms > p:nth-child(n):hover {
  color: $dark-flat-green;
}

@media screen and(max-width: 1500px) {
  footer {
    .content {
      width: 100rem;
    }
  }
}

@media screen and(max-width: 1200px) {
  footer {
    .content {
      width: 80rem;

      .upper-info {
        justify-content: center;
        flex-direction: column;
        margin-bottom: 1rem !important;

        .links {
          justify-content: center;

          p {
            margin: 0 1rem;
          }
        }
        .social-media {
          font-size: 1.6em;
          margin-top: 1.5rem;

          ion-icon {
            margin: 0 1.5rem !important;
          }
        }
      }

      .lower-info {
        flex-direction: column;

        .copyright {
          margin-bottom: 2.5rem !important;
        }
      }
    }
  }
}

@media screen and(max-width: 882px) {
  footer {
    .content {
      width: 50rem;
    }
  }
}
</style>