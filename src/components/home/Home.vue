<!--suppress JSUnresolvedFunction -->
<template>
  <div>
    <div class="ui segment basic very padded">
      <h1>
        <img class="ui image medium centered" src="../../static/img/logo2.png" alt=""/>
      </h1>
    </div>

    <search :search-phrase="searchPhrase"></search>

    <div class="ui large buttons fluid">
      <button @click="changeCurrentView('resources')" :class="(currentView === 'resources') ? 'active' : ''"
              class="ui button">Resources
      </button>
      <div class="or"></div>
      <button @click="changeCurrentView('courses')" :class="(currentView === 'courses') ? 'active' : ''"
              class="ui button">Courses
      </button>
    </div>

    <div class="ui divider hidden"></div>

    <div v-if="currentView === 'resources'">
      <div class="ui cards special four stackable">
        <mini-resource
          v-for="resource in resources"
          track-by="_id"
          :title="resource.title"
          :url="resource.url"
          :date-added="resource.dateAdded"
          :screenshot-file="resource.screenshotFile"
        ></mini-resource>
      </div>
    </div>

    <div v-if="currentView === 'courses'">
      <h1>courses</h1>
      <h2 v-for="course in courses">

        {{$index}}. {{course.title}}
      </h2>
    </div>

  </div>
</template>

<script>

  import co from 'co';
  import Search from './Search.vue';
  import MiniResource from '../views-resources/MiniResource.vue';

  import {fetchResourcesSearch} from '../../store/resources';
  import {fetchCoursesSearch} from '../../store/courses';

  export default {
    name: 'Home',
    components: {
      Search,
      MiniResource
    },
    data() {
      return {
        currentView: 'resources',
        searchPhrase: '',
        shouldFetchSearch: {
          resources: true,
          courses: true
        },
        resources: [],
        courses: []
      }
    },

    route: {
      data() {
        let viewRoute = this.$route.params.view;
        if (viewRoute !== 'resources' && viewRoute !== 'courses') {
          this.$route.router.go('/resources');
        }
        this.currentView = this.$route.params.view;
        console.log('current view');
        console.log(this.currentView);

        if (this.$route.query.search) {
          console.log('query search foundddd');
          this.searchPhrase = this.$route.query.search;
          console.log(this.$route.query.search);
        }
        this.loadNeededData();
      }
    },

    methods: {

      loadNeededData() {

        if (this.searchPhrase === '' || this.searchPhrase === ' ') {
          return;
        }

        if (this.shouldFetchSearch.resources && this.currentView === 'resources') {
          console.log('fetching resources...');
          let self = this;
          co(function *() {
            try {
              let result = yield fetchResourcesSearch(self.searchPhrase);
              self.resources = result;
            } catch (err) {
              if (err) {
                console.log(err);
              }
            }
          });
          console.log(this.resources);
          this.shouldFetchSearch.resources = false;
        }

        if (this.shouldFetchSearch.courses && this.currentView === 'courses') {
          console.log('fetching courses...');
          let self = this;
          co(function *() {
            try {
              let result = yield fetchCoursesSearch(self.searchPhrase);
              self.courses = result;
              console.log(coursesResponse);
              console.log('');
            } catch (err) {
              if (err) {
                console.log(err);
              }
            }
          });
          this.shouldFetchSearch.courses = false
        }
      },

      changeCurrentView(view) {
        this.currentView = view;
        this.changeRoute();
      },

      changeRoute() {
        let route = `/${this.currentView}`;
        // if search is specified, save it
        if (this.searchPhrase !== '' && this.searchPhrase !== ' ') {
          route += `?search=${this.searchPhrase}`;
        }
        this.$route.router.go(route);
        this.loadNeededData();
      }
    },
    events: {
      'search': function(phrase) {
        this.shouldFetchSearch = {
          resources: true,
          courses: true
        };
        this.searchPhrase = phrase;
        this.changeRoute();
      }
    }
  }
</script>