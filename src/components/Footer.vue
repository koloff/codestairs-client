<template>
  <div>
    <div class="ui divider hidden"></div>
    <div class="ui inverted vertical footer segment">
      <div class="ui container">
        <div class="ui stackable inverted divided equal height stackable grid">
          <div class="three wide column">
            <h4 class="ui inverted header">About</h4>
            <div class="ui inverted link list">
              <a v-link="{path: '/about'}" class="item">About Codestairs</a>
              <a href="#" class="item">Contact us</a>
            </div>
          </div>
          <div class="three wide column">
            <h4 class="ui inverted header">Connect</h4>

            <a href="#" class="item">
              <i class="facebook inverted grey square icon big"></i>
            </a>
            <a href="#" class="item">
              <i class="mail inverted grey square icon big"></i>
            </a>
          </div>
          <div class="ten wide right aligned column">
            <div>&copy; 2016 Codestairs</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BottomFooter'
  }
</script>

<style>
  .segment  {
    margin-top: 20px;
  }
</style>