<template>
  <div>

    <div class="ui form error">
      <div class="content">

        <div class="dividing blue ui  header">
          Login
        </div>

        <div v-if="wrongCredentials" class="ui error message">
          <p>Wrong username/password!</p>
        </div>

        <div class="field">
          <label>Username</label>
          <div class="ui left icon input">
            <input v-model="username" type="text" name="username" placeholder="Your username">
            <i class=" user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Password</label>
          <div class="ui left icon input">
            <input v-model="password" type="password" placeholder="Your password">
            <i class=" lock icon"></i>
          </div>
        </div>

        <div @click="loginClick()" class="ui blue submit button">Login</div>

      </div>
    </div>

  </div>
</template>

<script>
  import co from 'co';
  import * as validator from '../../utils/validator';
  import * as auth from '../../store/authenticate';
  import notifier from '../../utils/notifier';

  export default {
    name: 'Login',
    data() {
      return {
        wrongCredentials: false,
        username: '',
        password: ''
      }
    },

    methods: {

      loginClick() {
        if (this.username && this.password) {

          let self = this;
          co(function *() {
            try {
              yield auth.login(self.username, self.password);
              self.wrongCredentials = false;
              notifier('success', 'You logged in successfully!');
              self.$route.router.go('/');
            } catch(err) {
              self.wrongCredentials = true;
              notifier('error', 'Wrong username/password!');
            	console.log(err);
            }
          });

        }
      }

    }
  }
</script>