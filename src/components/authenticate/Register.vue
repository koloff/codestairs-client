<template>
  <div>

    <validator name="validation">

      <div class="ui form error">

        <div class="dividing teal ui  header">
          Register
        </div>

        <div v-if="emailTaken" class="ui error message">
          <p>This email is registered!</p>
        </div>
        <div v-if="usernameTaken" class="ui error message">
          <p>This username is registered!</p>
        </div>

        <div class="field">
          <label>E-mail</label>
          <div class="ui left icon input">
            <input v-model="email" v-validate:email="['email']" type="text" name="e-mail"
                   placeholder="Your e-mail address">
            <i class="at icon"></i>
          </div>

          <div v-if="clicked && $validation.email.invalid" class="ui pointing red basic label">
            Please provide valid e-mail
          </div>
        </div>

        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input v-model="username" v-validate:username="['username']" type="text" name="username"
                   placeholder="Your username">
            <i class="user icon"></i>
          </div>

          <div v-if="clicked && $validation.username.invalid" class="ui pointing red basic label">
            Username must be between 3 and 16 symbols and can contain only letters, numbers the symbols "-" and "_"!
          </div>
        </div>

        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input v-model="password" v-validate:password="['password']" type="password" placeholder="Your password">
            <i class="lock icon"></i>
          </div>

          <div v-if="clicked && $validation.password.invalid" class="ui pointing red basic label">
            Password must be between 5 and 30 characters and must not contain forbidden symbols!
          </div>
        </div>

        <div class="field">
          <label>Confirm assword</label>
          <div class="ui left icon input">
            <input v-model="repeatedPassword" type="password" placeholder="Confirm your password">
            <i class="lock icon"></i>
          </div>

          <div v-if="clicked && password !== repeatedPassword" class="ui pointing red basic label">
            Passwords do not match!
          </div>
        </div>

        <div @click="registerClick()" class="ui teal submit button">Register</div>

      </div>
    </validator>


  </div>
</template>

<script>
  import co from 'co';
  import * as validator from '../../utils/validator';
  import * as auth from '../../store/authenticate';
  import * as identity from '../../store/identity';
  import notifier from '../../utils/notifier';

  export default {
    name: 'Register',
    data() {
      return {
        clicked: false,
        email: '',
        username: '',
        password: '',
        repeatedPassword: '',
        emailTaken: false,
        usernameTaken: false
      }
    },

    methods: {

      registerClick() {

        this.clicked = true;

        if (this.$validation.valid) {
          console.log('valid');

          let self = this;
          co(function *() {
            try {
            	let result = yield auth.register({
                email: self.email,
                username: self.username,
                password: self.password
              });

              notifier('success', 'You registered successfully!');
              self.$route.router.go('/profile');
            } catch(err) {
              console.log(err);
              self.emailTaken = (err.reason === 'EMAIL_TAKEN');
              self.usernameTaken = (err.reason === 'USERNAME_TAKEN');
              if (self.emailTaken || self.usernameTaken) {
                notifier('error', 'Select new credentials!');
              }
            }
          });
        }
      }

    }
  }
</script>