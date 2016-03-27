<template>
  <div class="main nav">
    <div class="ui stackable main inverted menu">
      <div class="ui container">
        <a v-link="{path: '/'}" class="header item">
          <img class="ui image icon" src="../assets/img/logo1_small.png" alt="" />
         &nbsp; Codestairs
        </a>





        <a v-link="{path: '/requests'}" class="item center">
          <i class="ui icon idea"></i>
          Requests
        </a>



        <a class="item center">
          <i class="ui icon code"></i>
          API
        </a>



        <div class="right menu">
          <button v-link="{path: '/new'}" class="ui button small blue">
          <i class="student icon"></i>
          Add path
        </button>


          <div class="item">
            <div class="ui transparent inverted left icon input">
              <input @keydown.enter="goSearch()" v-model="search" type="text" placeholder="Search..."/>
              <i class="search icon"></i>
            </div>
          </div>
          <a v-show="!identity.authenticated" v-link="{path: '/authenticate'}" class="item button">
            Login
          </a>

          <div v-show="identity.authenticated" v-dropdown-semantic class="ui dropdown item">
            <i class="ui icon user"></i>
            {{identity.authenticated ? identity.profile.username : ''}}
            <i class="dropdown icon"></i>
            <div class="menu">
              <div v-link="{path: '/profile'}" class="item"><i class="ui icon setting"></i>Profile</div>
              <div class="item"><i class="ui icon student"></i>My courses</div>
              <div @click="logout()" class="item"><i class="ui icon sign out"></i>Logout</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as auth from '../store/authenticate';
  import * as identity from '../store/identity';
  import notifier from '../utils/notifier';

  export default {
    data() {
      return {
        identity: identity.state,
        search: ''
      }
    },
    methods: {
      logout() {
        auth.logout();
        notifier('success', 'You signed out successfully!');
      },
      goSearch() {
        this.$route.router.go(`/resources?search=${this.search}`);
        this.search = '';
      }
    }
  }
</script>

<style>
  .main.nav > .menu {
    border-radius: 0;
  }
</style>