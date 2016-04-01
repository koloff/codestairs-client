<template>
  <div v-if="authenticated">
    <div class="ui reply form">
      <div class="field">
        <textarea rows="2" v-model="comment" placeholder="Comment..."></textarea>
      </div>
      <div @click="addComment()" class="ui blue labeled submit icon button">
        <i class="icon edit"></i> Post
      </div>
    </div>
  </div>


  <div class="ui comments">
    <comment
      v-for="comment in comments | orderBy 'dateAdded' -1"
      :id="comment._id"
      :author="comment.author"
      :date-added="comment.dateAdded"
      :rating="comment.rating"
      :text="comment.text"
    ></comment>
  </div>
</template>


<script>
  import Comment from './Comment.vue';
  import * as socialFetcher from '../../http-fetchers/social';
  import notifier from '../../utils/notifier';
  import co from 'co';

  import * as identity from '../../store/identity';

  export default {
    name: 'CommentBlock',
    props: ['id', 'comments'],
    components: {Comment},
    data() {
      return {
        authenticated: identity.state.authenticated,
        comment: ''
      };
    },
    methods: {
      addComment() {

        let self = this;
        co(function *() {
          try {
            let result = yield socialFetcher.comment(identity.state.token, self.id, self.comment);
            self.comments = result;
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
