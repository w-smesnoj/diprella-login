<template>
  <div id="app">
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
        <div class="form-sign-up">
          <h3>Create Account</h3>
          <div class="socials">
            <button><fa fa="facebook" /></button>
            <button><fa fa="google-plus" /></button>
            <button><fa fa="linkedin" /></button>
          </div>
          <br />
          <span>or use your email for registration:</span>
          <form>
            <label for="up-name"><fa fa="user" /> Name</label><br />
            <input type="text" id="up-name" name="name" required /><br />

            <label for="up-mail"><fa fa="envelope" />Email</label><br />
            <input type="email" id="up-mail" name="email" required /><br />

            <label for="up-password"><fa fa="lock" />Password</label><br />
            <input
              type="password"
              id="up-password"
              name="password"
              autocomplete="new-password"
              required
            /><br />
            <input type="submit" value="Sign Up" />
          </form>
        </div>
        <div class="form-sign-in">
          <h3>Sign in to Diprella</h3>
          <div class="socials">
            <button><fa fa="facebook" /></button>
            <button><fa fa="google-plus" /></button>
            <button><fa fa="linkedin" /></button>
          </div>
          <br />
          <span>or use your email account:</span>
          <form>
            <label for="up-mail"><fa fa="envelope" />Email</label><br />
            <input type="email" id="up-mail" name="email" required /><br />
            <label for="up-password"><fa fa="lock" />Password</label><br />
            <input
              type="password"
              id="up-password"
              name="password"
              autocomplete="new-password"
              required
            />
            <br />
            <a>Forgot your password?</a>
            <br />
            <input type="submit" value="Sign In" />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({}),
  components: {},
};
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
