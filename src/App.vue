<template>
  <div id="app">
    <div id="sign">
      <svg class="circle" height="300" width="300">
        <circle cx="150" cy="150" r="150" fill="#fbd348" />
      </svg>
      <svg class="triangle" height="400" width="400">
        <polygon points="200,0 000,400 400,400" fill="#e35e6a" />
      </svg>

      <div class="switch" :class="{ active: signup }">
        <img alt="Diprella Logo" src="./assets/logo.png" />
        <div class="group">
          <div class="txt">
            <transition name="fade-x" mode="out-in">
              <div class="sign sign-up" v-if="!signup" key="1">
                <div class="container">
                  <h3>Hello, Friend!</h3>
                  <span>
                    Enter your personal details and start your journey with us
                  </span>
                  <br />
                </div>
              </div>
            </transition>
            <transition name="fade-y" mode="out-in">
              <div class="sign sign-in" v-if="signup" key="1">
                <div class="container">
                  <h3>Welcome Back!</h3>
                  <span>
                    To keep connected with us please login with your personal
                    info.
                  </span>
                  <br />
                  <!-- <button @click.prevent="signup = !signup">Sign In</button> -->
                </div>
              </div>
            </transition>
          </div>
          <div class="toggle">
            <button @click.prevent="signup = !signup">
              <span v-if="signup">Sign In</span>
              <span v-else>Sign Up</span>
            </button>
          </div>
        </div>
        <div class="ornaments">
          <svg class="circle" height="300" width="300">
            <circle cx="150" cy="150" r="150" fill="#ffffff2b" />
          </svg>
          <svg class="triangle" height="400" width="400">
            <polygon points="200,0 000,400 400,400" fill="#ffffff2b" />
          </svg>
          <svg class="group" width="900" height="600">
            <polygon points="749 571,682 497,779 476" fill="#ffffff2b" />
            <polygon
              points="884 329,872 349,845 335,862 307"
              fill="#ffffff2b"
            />
            <polygon
              points="590 209,633 223,622 242,587 233"
              fill="#ffffff2b"
            />
            <polygon points="252 60,237 84,210 72,226 49" fill="#ffffff2b" />
            <polygon
              points="222 445,269 482,254 497,203 460"
              fill="#ffffff2b"
            />
            <polygon points="385 349,278 369,312 282" fill="#ffffff2b" />
          </svg>
        </div>
      </div>
      <div class="form">
        <img alt="Diprella Logo" src="./assets/logo.png" />

        <transition name="fade-in" mode="out-in">
          <div class="form-sign-up" v-if="signup" key="1">
            <div class="holder">
              <h3>Create Account</h3>
              <div class="socials">
                <button><fa fa="facebook" /></button>
                <button><fa fa="google-plus" /></button>
                <button><fa fa="linkedin" /></button>
              </div>
              <span>or use your email for registration:</span>
              <form method="POST">
                <textbox
                  fa="user"
                  v-model="username"
                  name="name"
                  label="Name"
                />
                <textbox
                  fa="envelope"
                  v-model="registermail"
                  email
                  name="register-mail"
                  label="Email"
                />
                <textbox
                  fa="lock"
                  v-model="registerpassword"
                  password
                  newpassword
                  name="register-password"
                  label="Password"
                />
                <input type="submit" value="Sign Up" />
              </form>
            </div>
          </div>
        </transition>

        <transition name="fade-out" mode="out-in">
          <div
            class="form-sign-in"
            v-if="!signup"
            key="2"
            :class="{ active: signup }"
          >
            <div class="holder">
              <h3>Sign in to Diprella</h3>
              <div class="socials">
                <button><fa fa="facebook" /></button>
                <button><fa fa="google-plus" /></button>
                <button><fa fa="linkedin" /></button>
              </div>

              <span>or use your email account:</span>
              <form autocomplete="on" method="POST">
                <textbox
                  fa="envelope"
                  v-model="loginmail"
                  email
                  name="login-mail"
                  label="Email"
                />
                <textbox
                  fa="lock"
                  v-model="loginpassword"
                  password
                  name="login-password"
                  label="Password"
                />
                <a class="forgot" tabindex="0">
                  <span>Forgot your password?</span>
                </a>
                <input type="submit" value="Sign In" />
              </form>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    loginmail: '',
    loginpassword: '',
    username: '',
    registermail: '',
    registerpassword: '',
    signup: false,
  }),
  components: {},
};
</script>

<style>
/* SWITCH */

.fade-y-enter-active,
.fade-y-leave-active {
  transition: transform 0.6s, opacity 0.3s;
}
.fade-y-enter,
.fade-y-leave-to {
  transform: translateX(-200px);
  /* opacity: 0; */
}
.fade-x-enter-active,
.fade-x-leave-active {
  transition: transform 0.6s, opacity 0.3s;
}
.fade-x-enter,
.fade-x-leave-to {
  transform: translateX(200px);
  /* opacity: 0; */
}
.toggle > button:focus {
  outline: 0;
}
.toggle > button {
  background: transparent;
  border: 1px solid var(--txt-main);
  color: var(--txt-main);
  padding: 20px 70px;
  border-radius: 200px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85em;
  margin-bottom: 0em;
  /* margin: 2.9em 1em; */
}

.toggle {
  width: 350px;
  /* background: red; */
  text-align: center;
  /* transition: float 1s; */
  /* float: right; */
  /* position: absolute; */
  transform: translateX(550px);
  transition: all 0.6s ease;
  margin-top: 3em;
}

.switch.active > .group > .toggle {
  /* right: 550px; */
  transform: translateX(0px);
}
@keyframes rotating /* Safari and Chrome */ {
  0% {
    transform: scale(1) translateY(0em);
  }
  50% {
    transform: scale(1.05) translateY(4em);
  }
  100% {
    transform: scale(1) translateY(0em);
  }
}
svg.group > polygon:nth-child(odd) {
  animation: rotating 25s ease-in-out infinite;
}
svg.group > polygon:nth-child(even) {
  animation: rotating 14s ease-in-out infinite;
}

.active > .ornaments > .group {
  transform: translateX(-20px);
}
.ornaments > .group {
  transition: transform 1s;
}
.ornaments {
  pointer-events: none;
}

.group > .txt {
  width: -webkit-fill-available;
  display: flow-root;
}
.group {
  width: 100%;
  height: fit-content;
  align-self: center;
  position: absolute;
}

.sign-in {
  display: none;
}
.sign-up {
  float: right;
}

.sign-up,
.sign-in {
  max-width: 350px;
  height: inherit;
}

.container > span {
  color: var(--txt-main);
  line-height: 1.7;
  letter-spacing: 0.02em;
  font-weight: 300;
}

.container {
  height: fit-content;
  align-self: center;
  /* padding: 3em; */
  text-align: center;
}
.sign h3 {
  color: var(--txt-main);
  font-weight: 700;
  margin: 0em;
  margin-bottom: 1em;
  font-size: xx-large;
  text-align: center;
}
.sign {
  display: grid;
  padding: 0em 3em;
  box-sizing: border-box;
}

.active {
  clip-path: inset(0px 550px 0px 0px round 5px) !important;
}

.switch {
  position: absolute;
  width: inherit;
  height: inherit;
  z-index: 100;
  clip-path: inset(0px 0px 0px 550px round 5px);
  background: rgb(56, 183, 143);
  background: radial-gradient(
    circle at bottom left,
    rgba(56, 183, 143, 1) 0%,
    rgba(58, 167, 177, 1) 100%
  );
  transition: clip-path 0.6s;
  overflow: hidden;
  display: grid;
}
.switch img {
  filter: grayscale(1) brightness(3);
}
</style>
<style>
.fade-out-enter-active,
.fade-out-leave-active {
  transition: transform 0.6s, opacity 0.4s, clip-path 0.6s;
}
.fade-out-enter,
.fade-out-leave-to {
  transform: translateX(200px);
  clip-path: inset(0px 550px 0px 0px round 5px) !important;
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: transform 0.6s, opacity 0.4s, clip-path 0.6s;
}
.fade-in-enter,
.fade-in-leave-to {
  transform: translateX(-200px);
  clip-path: inset(0px 0px 0px 550px round 5px) !important;
}

form input[type='submit'] {
  background: var(--accent);
  color: var(--txt-main);
  padding: 20px 70px;
  border: 0;
  border-radius: 200px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85em;
  margin: 3em;
  margin-bottom: 0em;
}
.form-sign-up {
  width: 550px;
  position: absolute;
  height: inherit;
  display: grid;
  align-content: center;
  justify-content: center;
  right: 0px;
  clip-path: inset(0px 0px 0px 0px round 5px);
}
body {
  --bg-main: #ffffff;
  --bg-scnd: #f0f4f3;
  --txt-main: white;
  --txt-medium: #e4e4e4;
  --txt-medium-dark: #acacac;
  --txt-box-bg: #f4f8f7;
  --accent: #3aaf9f;
}
input[type='submit'],
button {
  transition: filter 0.2s;
}
input[type='submit']:hover,
button:hover {
  filter: brightness(0.9);
}

.socials button {
  background: var(--bg-main);
  border: 1px solid var(--txt-medium);
  width: 45px;
  height: 45px;
  border-radius: 100%;
  margin: 5px;
  font-size: 1.1em;
}

.holder h3 {
  color: var(--accent);
  font-weight: 700;
  margin: 0.5em 1em;
  font-size: xx-large;
  text-align: center;
}
.holder {
  text-align-last: center;
}
.forgot span {
  border-bottom: 3px solid #f4f8f7;
  padding: 5px 0px;
  color: black !important;
}
.forgot {
  margin: 1.5em;
  display: block;
}

.form-sign-in {
  width: 550px;
  position: absolute;
  height: inherit;
  display: grid;
  align-content: center;
  justify-content: center;
  clip-path: inset(0px 0px 0px 0px round 5px);
}
.socials {
  margin: 1.2em 0em;
}
.holder > span {
  color: var(--txt-medium-dark);
  cursor: default;
}
.holder {
  width: 350px;
}
.form {
  position: absolute;
  width: inherit;
  height: inherit;
}

@keyframes example {
  0% {
    transform: rotate(-100deg) translateX(0em);
  }
  30% {
    transform: rotate(-110deg) translateX(4em);
  }
  40% {
    transform: rotate(-110deg) translateX(2em);
  }
  40% {
    transform: rotate(-110deg) translateX(6em);
  }
  40% {
    transform: rotate(-110deg) translateX(4em);
  }
  100% {
    transform: rotate(-100deg) translateX(0em);
  }
}
@keyframes examplex {
  0% {
    transform: scale(1) translateY(0em);
  }
  30% {
    transform: scale(1.2) translateY(4em);
  }
  40% {
    transform: scale(1) translateY(2em);
  }
  40% {
    transform: scale(1.4) translateY(6em);
  }
  40% {
    transform: scale(1.2) translateY(4em);
  }
  100% {
    transform: scale(1) translateY(0em);
  }
}

.triangle {
  position: absolute;
  right: -180px;
  top: -160px;
  z-index: -2;
  transform-origin: 200px;
  animation: example 24s infinite;
}
.circle {
  position: absolute;
  left: -180px;
  bottom: -160px;
  z-index: -2;
  transform-origin: center;
  animation: examplex 55s infinite;
}

#sign {
  background: var(--bg-main);
  width: 900px;
  height: 600px;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.2);
  z-index: initial;
  position: relative;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-scnd);
  height: 100vh;
  display: grid;
  z-index: 10;
  position: relative;
  overflow: hidden;
}
.switch img,
.form img {
  max-width: 30px;
  position: absolute;
  margin: 1em;
}
form input[type='submit'],
a,
button {
  cursor: pointer;
}
</style>
