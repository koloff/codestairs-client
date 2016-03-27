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
        console.log('ratingggg', value, this.id);

        let self = this;
        co(function *() {
          try {
            let result = yield socialFetcher.rate(self.type, identity.state.token, self.id, value);
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
  .vote-component {
    position: absolute;
    bottom: 7px;
    left: 0;
  }

  .voteIcon {
    font-size: 2em !important;
    max-height: 10px !important;
    max-width: 26px !important;
  }
  .voteButton {
    padding-top: 1px !important;
    padding-bottom: 0px !important;
    background: transparent !important;
  }

  .voteLabel {
    background-color: transparent !important;
    padding-top: 2px !important;
    padding-bottom: 2px !important;
    text-align: center;
  }
</style>