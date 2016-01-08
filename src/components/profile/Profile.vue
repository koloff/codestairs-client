<template>
  <div>
    <div class="ui divider hidden"></div>
    <div class="ui segment basic">
      <h2 class="ui center aligned icon header">
        <i class="circular user icon"></i>
        {{identity.profile.username}}
      </h2>
    </div>

    <div class="ui segment blue secondary">
      <h4 class="ui horizontal divider header">
        <i class="key icon"></i>
        API Token
      </h4>

      <div class="ui action input fluid big">
        <input type="text" :value="identity.token"/>
        <button class="ui blue right labeled icon button">
          <i class="copy icon"></i>
          Copy
        </button>
      </div>
    </div>

    <div class="ui segment blue secondary">

      <div class="ui divider hidden small"></div>

      <h4 class="ui horizontal divider header">
        <i class="at icon"></i>
        e-mail
      </h4>

      <div class="ui segment">
        <div class="ui form">
          <div class="field">
            <label>New email:</label>
            <div class="ui left icon input">
              <input type="text" name="email" placeholder="Your new e-mail address">
              <i class="blue at icon"></i>
            </div>
          </div>
          <div class="ui centered blue submit button">Change</div>
        </div>
      </div>


      <h4 class="ui horizontal divider header">
        <i class="lock icon"></i>
        Password
      </h4>

      <div class="ui segment">
        <div class="ui form">
          <div class="field">
            <label>New password:</label>
            <div class="ui left icon input">
              <input type="password" placeholder="New password">
              <i class="blue lock icon"></i>
            </div>
          </div>

          <div class="field">
            <label>Confirm password:</label>
            <div class="ui left icon input">
              <input type="password" placeholder="Confirm new password">
              <i class="blue lock icon"></i>
            </div>
          </div>
          <div class="ui centered blue submit button">Change</div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  import * as identity from '../../store/identity';

  export default {
    name: 'Profile',
    data() {
      return {
        identity: identity.state
      }
    },
    ready() {

    }
  };
</script>