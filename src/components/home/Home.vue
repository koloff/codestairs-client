<!--suppress JSUnresolvedFunction -->
<template>
  <div>
    <div class="ui segment basic very padded">
      <h1>
        <img class="ui image medium centered" src="../../assets/img/logo2.png" alt=""/>
      </h1>
    </div>

    <h4 class="ui divider horizontal header home-menu">
      <div class="ui compact menu">
        <a @click="changeCriteria('most-liked')" :class="(criteria === 'most-liked') ? 'active' : ''" class="item active">
          <i class="star icon"></i>
          Most liked
        </a>
        <a @click="changeCriteria('newest')" :class="(criteria === 'newest') ? 'active' : ''" class="item">
          <i class="time icon"></i>
          Newest
        </a>
      </div>
    </h4>


    <h4 class="ui header center aligned">
      <div class="content">
        <div id="paths-period" v-dropdown-semantic class="ui dropdown">
          <input type="hidden" v-model="period">
          <div class="text"></div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div data-value="today" class="item">TODAY</div>
            <div data-value="this-week" class="item">THIS WEEK</div>
            <div data-value="this-month" class="item">THIS MONTH</div>
            <div data-value="this-year" class="item">THIS YEAR</div>
          </div>
        </div>
      </div>
    </h4>

    <div class="ui divider hidden"></div>

    <div class="ui cards stackable doubling four">
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


  </div>
</template>

<script>

  import co from 'co';
  import Search from './Search.vue';
  import MiniResource from '../views-resources/MiniResource.vue';
  import MiniPath from '../views-paths/MiniPath.vue';

  import * as pathsFetcher from '../../http-fetchers/paths';


  export default {
    name: 'Home',
    components: {
      MiniPath
    },
    data() {
      return {
        criteria: 'most-liked',
        period: 'this-week',
        paths: []
      }
    },

    ready() {

      let $pathsPeriod = $('#paths-period');

      let self = this;
      $pathsPeriod.dropdown('set selected', this.period);
      $pathsPeriod.dropdown({
        onChange() {
          self.loadPaths();
        }
      });

      this.loadPaths();
    },

    methods: {
      changeCriteria(criteria) {
        this.criteria = criteria;
        this.loadPaths();
      },

      loadPaths() {

        // calculate hours based on period
        let hoursLimit;
        switch (this.period) {
          case 'today': hoursLimit = 24; break;
          case 'this-week': hoursLimit = 24 * 7; break;
          case 'this-month': hoursLimit = 24 * 30; break;
          case 'this.year': hoursLimit = 24 * 365; break;
          default: hoursLimit = 24 * 30;
        }

        console.log('changed', this.criteria, this.period);

        let self = this;
        co(function *() {
          let result = yield pathsFetcher.getMultiple({
            period: hoursLimit,
            criteria: self.criteria,
            start: 0,
            count: 50
          });


          console.log(result);
          self.paths = result;
        });

      }
    }
  }
</script>