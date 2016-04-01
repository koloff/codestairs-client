<template>
  <div>
    <div class="ui mini vertical buttons vote-component">
      <button @click="rate(1)" class="ui mini icon button voteButton">
        <i class="caret up icon voteIcon"></i>
      </button>
      <div class="ui label voteLabel">
        {{value}}
      </div>
      <button @click="rate(-1)" class="ui mini icon button voteButton">
        <i class="caret down icon voteIcon"></i>
      </button>
    </div>
  </div>
</template>


<script>
  import * as socialFetcher from '../../http-fetchers/social';
  import * as identity from '../../store/identity';
  import notifier from '../../utils/notifier';
  import co from 'co';

  export default {
    name: 'Rating',
    props: ['id', 'type', 'value'],
    data() {
      return {
        rated: false
      }
    },
    methods: {
      rate(value) {

        let self = this;
        co(function *() {
          try {
            let result = yield socialFetcher.rate(identity.state.token, self.id, value);
            console.log(result);
            self.value = result.value;
            notifier('success', 'Vote done!');
          } catch (err) {
            console.log(err);
          }
        });
      }
    }
  }

</script>

<style>
  .voteIcon {
    font-size: 2em !important;
    max-height: 10px !important;
    max-width: 26px !important;
    text-align: center !important;
    margin: 0 !important;
  }

  .voteButton {
    padding: 0 !important;
    background: transparent !important;
    text-align: center !important;
  }

  .voteLabel {
    margin: 3px !important;
    font-size: 13px !important;
    background-color: transparent !important;
    padding: 0 !important;
    text-align: center;
  }
</style>
