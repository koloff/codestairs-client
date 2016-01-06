<template>
  <div>
    <div class="ui segment basic very padded">
      <h1>
        <img class="ui image medium centered" src="../../static/img/logo2.png" alt=""/>
      </h1>
    </div>

    <search :current-view="currentView"></search>

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
    </div>

    {{ resources | json}}
    <br><br><br>
    {{courses | json}}

  </div>
</template>

<script>

  import co from 'co';
  import Search from './Search.vue';
  import MiniResource from '../resource-views/MiniResource.vue';

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
    ready() {
      this.loadNeededData();
    },
    methods: {

      loadNeededData(phrase) {
        console.log(`phrase   ${phrase}`);

        if (phrase === '' || phrase === ' ') {
          return;
        }

        if (this.shouldFetchSearch.resources && this.currentView === 'resources') {
          console.log('fetching resources...');
          let self = this;
          co(function *() {
            try {
              let resourcesResponse = yield fetchResourcesSearch(phrase);
              self.resources = JSON.parse(resourcesResponse.text);

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
              let coursesResponse = yield fetchCoursesSearch(phrase);
              self.courses = JSON.parse(coursesResponse.text);
            } catch (err) {
              if (err) {
                console.log(err);
              }
            }
          });
          console.log(this.courses);
          this.shouldFetchSearch.courses = false
        }
      },

      changeCurrentView(view) {
        this.currentView = view;
        this.loadNeededData(this.searchPhrase);
      }
    },
    events: {
      'search': function(phrase) {
        this.shouldFetchSearch = {
          resources: true,
          courses: true
        };
        this.searchPhrase = phrase;
        this.loadNeededData(phrase);
      }
    }
  }
</script>