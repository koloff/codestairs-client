<template>
  <div class="main nav">
    <div class="ui stackable main inverted menu">
      <div class="ui container">
        <a v-link="{path: '/'}" class="header item">
          <img class="ui image icon" src="../static/img/logo1_small.png" alt="" />
         &nbsp; Codestairs
        </a>
        <a v-link="{path: '/add-resource'}" class="item center">
          <i class="ui icon world"></i>
          Add resource
        </a>
        <a v-link="{path: '/add-course'}" class="item center">
          <i class="ui icon student"></i>
          Add course
        </a>
        <a class="item center">
          <i class="ui icon code"></i>
          API
        </a>
        <a class="item center">
          <i class="ui icon info circle"></i>
          About
        </a>

        <div class="right menu">

          <div class="item">
            <div class="ui transparent inverted left icon input">
              <input type="text" placeholder="Search..."/>
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
              <div class="item"><i class="ui icon setting"></i>Profile</div>
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
        identity: identity.state
      }
    },
    methods: {
      logout() {
        auth.logout();
        notifier('success', 'You signed out successfully!');
        console.log(this.identity.profile.username);
      }
    }
  }
</script>

<style>
  .main.nav > .menu {
    border-radius: 0;
  }
</style>