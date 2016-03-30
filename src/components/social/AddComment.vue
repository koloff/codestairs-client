<template>
  <form class="ui reply form">
    <div class="field">
      <textarea v-model="comment"></textarea>
    </div>
    <button @click="addComment()" class="ui blue labeled submit icon button">
      <i class="icon edit"></i> Post
    </button>
  </form>
</template>


<script>
  import * as socialFetcher from '../../http-fetchers/social';
  import * as identity from '../../store/identity';
  import notifier from '../../utils/notifier';
  import co from 'co';

  export default {
    name: 'AddComment',
    props: ['id'],
    data() {
      return {
        comment: ''
      }
    },
    methods: {
      addComment() {

        let self = this;
        co(function *() {
          try {
            let result = yield socialFetcher.comment(identity.state.token, self.id, self.comment);
            console.log(result);
            notifier('success', 'Comment posted!');
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