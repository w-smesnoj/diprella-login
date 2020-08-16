<template>
  <div id="app">
    <button @click="signup = !signup" style="position: absolute;z-index: 999;">
      Toggle
    </button>
    <div id="sign">
      <div class="switch">
        <img alt="Diprella Logo" src="./assets/logo.png" />
        <div class="sign-up">
          <h3>Hello, Friend!</h3>
          <span>
            Enter your personal details and start your journey with us
          </span>
          <button>Sign Up</button>
        </div>
        <div class="sign-in">
          <h3>Welcome Back!</h3>
          <span>
            To keep connected with us please login with your personal info.
          </span>
          <button>Sign In</button>
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
              <form>
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
          <div class="form-sign-in" v-if="!signup" key="2">
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
                <a class="forgot"><span>Forgot your password?</span></a>
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
.fade-out-enter-active,
.fade-out-leave-active {
  transition: transform 0.4s, opacity 0.2s;
}
.fade-out-enter,
.fade-out-leave-to {
  transform: translateX(200px);
  opacity: 0;
}
.fade-in-enter-active,
.fade-in-leave-active {
  transition: transform 0.4s, opacity 0.2s;
}
.fade-in-enter,
.fade-in-leave-to {
  transform: translateX(-200px);
  opacity: 0;
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
.switch {
  position: absolute;
  width: inherit;
  height: inherit;
  display: none;
}

#sign {
  background: var(--bg-main);
  width: 900px;
  height: 600px;
  margin: auto;
  border-radius: 10px;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: var(--bg-scnd);
  height: 100vh;
  display: grid;
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
