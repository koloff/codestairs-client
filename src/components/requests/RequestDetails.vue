<template>
  <div>
    <div class="ui divider hidden"></div>

    <h2 class="ui header icon center aligned">
      Request
    </h2>


    <h2 class="ui dividing header">
      <div class="ui label">
        <rating
          :id="request._id"
          :value="ratingValue"
        ></rating>

      </div>

      <div class="ui label circular basic large">
        Asked by <a href="">{{username}}</a> on {{request.dateAdded | date}}
      </div>
    </h2>


    <div class="ui grid stackable">
      <div class="column six wide">
        <div class="ui top attached header orange">Already knows</div>
        <div class="ui attached segment">
          {{request.knows || 'Not specified.'}}
        </div>
      </div>
      <div class="column six wide">
        <div class="ui top attached header green">Wants to learn</div>
        <div class="ui attached segment">
          {{request.wantsToLearn}}
        </div>
      </div>
      <div class="column four wide">
        <div class="ui top attached header">Time available</div>
        <div class="ui attached segment">
          <strong>{{request.availableTime | duration}}
          </strong>
          <span v-if="!request.availableTime">Not specified!</span>
        </div>
      </div>
    </div>


    <h5 class="ui horizontal header divider">
      <i class=" student icon"></i>
      Recommendations
    </h5>

    <div v-if="!identity.authenticated" class="ui icon message blue">
      <i class="sign in icon"></i>
      <div class="content">
        <div class="header">
          Login to recommend!
        </div>
        <p>Logged users can add recommendations and ratings.</p>
      </div>
    </div>

    <comments-block
      :id="request._id"
      :comments="request.comments"
    ></comments-block>


  </div>
</template>

<script>

  import co from 'co';
  import Rating from '../social/Rating.vue';
  import CommentsBlock from '../social/CommentsBlock.vue';
  import * as identity from '../../store/identity';
  import * as requestsFetcher from '../../http-fetchers/requests';


  export default {
    name: 'RequestDetails',
    components: {Rating, CommentsBlock},
    data() {
      return {
        identity: identity.state,
        request: {},
        ratingValue: null,
        username: ''
      }
    },
    ready() {
      let self = this;
      co(function *() {
        try {
          let result = yield requestsFetcher.getById(self.$route.params.requestId);
          self.request = result;
          self.ratingValue = result.rating.value;
          self.username = result.author.username;
        } catch (err) {
          console.log(err);
        }
      });
    }
  }
</script>