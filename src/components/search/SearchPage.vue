<!--suppress JSUnresolvedFunction -->
<template>
  <div>


    <div class="ui divider hidden"></div>

    <div class="ui segment secondary blue center aligned">
      <div class="ui huge right icon input center aligned">
        <input v-model="searchPhrase" type="text" @keydown.enter="loadSearch()" placeholder="I want to learn...">
        <i @click="loadSearch()" class="inverted circular search link icon"></i>
      </div>
    </div>

    <div class="ui large buttons fluid">
      <button @click="changeSearchType('paths')" :class="(searchType === 'paths') ? 'active' : ''"
              class="ui button">Paths
      </button>
      <div class="or"></div>
      <button @click="changeSearchType('requests')" :class="(searchType === 'requests') ? 'active' : ''"
              class="ui button">Requests
      </button>
    </div>

    <div class="ui divider hidden"></div>

    <div v-if="searchType === 'paths'" class="ui cards four doubling stackable">
      <mini-path
        v-for="path in paths"
        :id="path._id"
        :date-added="path.dateAdded"
        :title="path.title"
        :description="path.description"
        :resources-count="path.resources.length"
        :difficulty="path.difficulty"
        :duration="path.duration"
        :rating="path.rating"
      ></mini-path>
    </div>
    <div v-if="searchType === 'requests'" class="ui cards four doubling stackable">
      <mini-request
        v-for="request in requests"
        :id="request._id"
        :date-added="request.dateAdded"
        :knows="request.knows"
        :wants-to-learn="request.wantsToLearn"
        :available-time="request.availableTime"
        :author="request.author"
        :comments-length="request.comments.length"
        :rating="request.rating"
      ></mini-request>
    </div>
    <div v-if="searchType === 'paths' && paths.length < 1" class="ui message blue">
      <div class="header">
        No paths found for "{{searchPhrase}}"
      </div>
      <p>Please try with something else or look in requests.</p>
    </div>
    <div v-if="searchType === 'requests' && requests.length < 1" class="ui message blue">
      <div class="header">
        No requests found for "{{searchPhrase}}"
      </div>
      <p>Please try with something else look in paths.</p>
    </div>




  </div>
</template>

<script>
  import co from 'co';
  import * as searchFetcher from '../../http-fetchers/search';
  import notifier from '../../utils/notifier';
  import MiniPath from '../views-paths/MiniPath.vue';
  import MiniRequest from '../requests/MiniRequest.vue';

  export default {
    name: 'Home',
    data() {
      return {
        searchType: 'paths',
        searchPhrase: '',
        paths: [],
        requests: []
      }
    },
    components: {MiniPath, MiniRequest},

    created() {
      console.log(this.$route);
      if (this.$route.query.type) {
        this.searchType = this.$route.query.type;
      }
      if (this.$route.query.phrase) {
        this.searchPhrase = this.$route.query.phrase;
      }

      this.loadSearch();
    },

    methods: {
      changeSearchType(type) {
        this.searchType = type;
        this.loadSearch();
      },
      loadSearch() {
        let route = `/search?${this.searchType ? 'type=' + this.searchType : ''}${this.searchPhrase ? '&phrase=' + this.searchPhrase : ''}`;
        this.$route.router.go(route);

        let self = this;
        co(function *() {

          try {
            let result = yield searchFetcher.fetchSearch(self.searchType, self.searchPhrase);
            if (self.searchType === 'paths') {
              self.paths = result;
              console.log(self.paths);
            } else if (self.searchType === 'requests') {
              self.requests = result;
              console.log(self.requests);
            }
          } catch (err) {
            if (err.reason === 'NO_PHRASE') {
              notifier('error', 'Please specify search phrase!');
            }
          }
        });
      }
    }
  }
</script>