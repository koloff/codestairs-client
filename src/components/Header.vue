<template>
  <div class="main nav">
    <div class="ui stackable main inverted menu">
      <div class="ui container">
        <div v-link="{path: '/'}" class="header item">
          <img class="ui mini white  bordered right spaced image" src="../static/img/logo1.png"/>
          Codestairs
        </div>
        <a v-link="{path: '/add-resource'}" class="item center">
          Add resource
        </a>
        <a v-link="{path: '/add-course'}" class="item center">
          Add course
        </a>
        <a class="item center">
          API
        </a>
        <div class="right menu">
          <div class="item">
            <div class="ui transparent inverted left icon input">
              <input type="text" placeholder="Search..."/>
              <i class="search icon"></i>
            </div>
          </div>
          <a class="item button">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .main.nav > .menu {
    border-radius: 0;
  }
</style>