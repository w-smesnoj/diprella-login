<template>
  <div class="float-container">
    <input
      :type="type"
      :name="name"
      required
      placeholder=" "
      :id="name"
      :autocomplete="newpassword"
      ref="textbox"
      @input="updateDate()"
    />
    <label :for="name"><fa :fa="fa" />{{ label }}</label>
    <button
      class="vision"
      @click.prevent="showPassword()"
      v-if="password"
      tabindex="-1"
    >
      <fa fa="eye-slash" v-if="showpassword" />
      <fa fa="eye" v-else />
    </button>
    <!-- <input type="checkbox" @click="showPassword()" v-if="password" /> -->
  </div>
</template>

<script>
export default {
  data: () => ({
    type: 'text',
    showpassword: false,
  }),
  props: {
    value: String,
    email: Boolean,
    password: Boolean,
    text: Boolean,
    name: String,
    label: String,
    fa: String,
    newpassword: Boolean,
  },
  mounted() {
    if (this.email) {
      this.type = 'email';
    } else if (this.password) {
      this.type = 'password';
    } else {
      this.type = 'text';
    }

    if (this.newpassword) {
      this.$refs.textbox.autocomplete = 'new-password';
    }
    if (this.email) {
      this.$refs.textbox.autocomplete = 'email';
      this.$refs.textbox.name = 'email';
    }
  },
  methods: {
    updateDate() {
      this.$emit('input', this.$refs.textbox.value);
    },
    showPassword() {
      let textbox = this.$refs.textbox;
      if (textbox.type === 'password') {
        textbox.type = 'text';
        this.showpassword = true;
      } else {
        textbox.type = 'password';
        this.showpassword = false;
      }
    },
  },
  computed: {
    newPassword: function() {
      return this.newpassword ? 'new-password' : 'email';
    },
  },
};
</script>

<style scoped>
.vision {
  z-index: 1;
  height: inherit;
  width: 50px;
  align-self: center;
  justify-self: end;
  border: 0;
  background: 0;
  color: #0000003b;
}
.vision:focus {
  outline: 0;
}

form {
  margin-top: 1.5em;
}

form input[type='email'],
form input[type='text'],
form input[type='password'] {
  background: var(--txt-box-bg);
  border: 0;
  padding: 1em;
  text-align: start;
  text-align-last: left;
  width: -webkit-fill-available;
  width: -moz-available;
  position: absolute;
}

.float-container {
  position: relative;
  height: 50px;
  margin-top: 1.7em;
  display: grid;
}
.float-container label {
  position: absolute;
  transform: translate(0, 10px) scale(1);
  transition: all 0.1s ease-in-out;
  cursor: text;
  /* padding: 0 1em; */
  width: -webkit-fill-available;
  width: -moz-available;
  -moz-text-align-last: left;
  text-align-last: left;
  padding: 6px 15px;
  color: var(--txt-medium-dark);
  pointer-events: none;
  font-size: 0.85em;
}
input:focus {
  outline: none;
  border: 1px solid black !important;
  border-top: 0;
}

/* .float-container input:-webkit-autofill + label i {
  color: #bfd6fc;
}
.float-container input:-webkit-autofill + label {
  background-color: #e8f0fe !important;
  color: #9dbffb;
} */

.float-container input:focus + label {
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

.float-container input:not(:placeholder-shown) + label,
.float-container input:focus + label {
  transform: translate(0, -23px);
  background-color: var(--bg-main);
  font-size: 0.7em;
}
.float-container input + label i {
  margin-right: 0.8em;
  color: #d6d6d6;
}
</style>
