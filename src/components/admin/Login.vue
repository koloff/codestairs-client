<template>

  <div class="ui divider hidden"></div>
  <h2 class="ui icon header center aligned">
    <i class="unlock alternate icon"></i>
    <div class="content">
      Administration
      <div class="sub header">Edit content</div>
    </div>
  </h2>


  <div class="ui segment secondary basic center aligned">
    <div class="ui action input center aligned centered">
      <input v-model="adminPassword" type="password" placeholder="Administrator password">
      <div @click="loginAdmin()" class="ui button primary">Login</div>
    </div>
  </div>

</template>

<script>
  import * as authenticate from '../../store/authenticate';

  export default {
    name: 'AdminLogin',
    data() {
      return {
        adminPassword: ''
      }
    },
    methods: {
      loginAdmin() {
        authenticate.loginAdmin(this.adminPassword);
        this.$router.go('/admin-panel');
      }
    }
  }
</script>


