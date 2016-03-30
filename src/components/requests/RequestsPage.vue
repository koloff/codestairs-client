<template>
  <div>

    <!--modal for new request-->
    <div>
      <div id="new-request" class="ui modal basic">
        <div class="content">
          <div class="ui grid center aligned">
            <div class="column six wide">
              <div class="ui form">
                <div class="field">
                  <label>What do you already know?</label>
                  <textarea v-model="requestToAdd.knows" rows="2"></textarea>
                </div>
              </div>
            </div>
            <div class="column six wide">
              <div class="ui form">
                <div class="field">
                  <label>What do you want to learn?</label>
                  <textarea v-model="requestToAdd.wantsToLearn" rows="2"></textarea>
                </div>
              </div>
            </div>
            <div class="column four wide">
              <div class="ui form">
                <div class="field">
                  <label>Duration</label>
                  <div v-dropdown-semantic class="ui fluid selection dropdown">
                    <input v-model="requestToAdd.availableTime" type="hidden"/>
                    <i class="dropdown icon"></i>
                    <div class="default text">How much time do you have</div>
                    <div class="menu">
                      <div class="item" data-value="3_hours"><i class="icon wait"></i>3 Hours</div>
                      <div class="item" data-value="1_day"><i class="icon wait"></i>1 Day</div>
                      <div class="item" data-value="3_days"><i class="icon wait"></i>3 Days</div>
                      <div class="item" data-value="1_week"><i class="icon wait"></i>1 Week</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ui divider hidden"></div>
          <button @click="addRequest()" class="ui button green icon fluid">
            <i class="ui icon add"></i> Add
          </button>
        </div>
      </div>
    </div>

    <div class="ui divider hidden"></div>
    <div class="ui segment basic">
      <h2 class="ui icon header center aligned">
        <i class="idea icon"></i>
        <div class="content">
          Path requests
          <div class="sub header">Find what people want to learn and help them do it!</div>
        </div>
      </h2>
    </div>


    <button @click="showAddRequest()" class="ui button primary icon">
      <i class="ui icon idea"></i>Add new request
    </button>


    <h4 class="ui divider horizontal header home-menu">
      <div class="ui compact menu">
        <a @click="changeCriteria('most-liked')" :class="(criteria === 'most-liked') ? 'active' : ''"
           class="item active">
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
        <div id="requests-period" v-dropdown-semantic class="ui dropdown">
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


    <div class="ui cards stackable doubling four">
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


  </div>
</template>

<script>
  import NewRequest from './NewRequest.vue';
  import MiniRequest from './MiniRequest.vue';
  import  * as requestsFetcher from '../../http-fetchers/requests';
  import co from 'co';


  export default {
    name: 'RequestsPage',
    components: {MiniRequest},
    data() {
      return {
        criteria: 'most-liked',
        period: 'this-week',
        requests: [],
        requestToAdd: {
          knows: '',
          wantsToLearn: '',
          availableTime: ''
        }
      }
    },
    ready() {
      let $requestsPeriod = $('#requests-period');

      let self = this;
      $requestsPeriod.dropdown('set selected', this.period);
      $requestsPeriod.dropdown({
        onChange() {
          self.loadPaths();
        }
      });

      this.loadRequests();

    },
    methods: {
      showAddRequest() {
        console.log('new request showed');


        $('#new-request')
          .modal({
            blurring: true
          })
          .modal('show');
      },
      addRequest() {
        let self = this;
        co(function *() {
          let result = yield requestsFetcher.addRequest(self.requestToAdd);
          console.log(result);

          self.loadRequests();
        });
      },
      loadRequests() {

        // calculate hours based on period
        let hoursLimit;
        switch (this.period) {
          case 'today':
            hoursLimit = 24;
            break;
          case 'this-week':
            hoursLimit = 24 * 7;
            break;
          case 'this-month':
            hoursLimit = 24 * 30;
            break;
          case 'this.year':
            hoursLimit = 24 * 365;
            break;
          default:
            hoursLimit = 24 * 30;
        }

        console.log('changed', this.criteria, this.period);

        let self = this;
        co(function *() {
          let result = yield requestsFetcher.getMultiple({
            period: hoursLimit,
            criteria: self.criteria,
            start: 0,
            count: 50
          });


          console.log(result);
          self.requests = result;
        });

      }
    }
  }
</script>


<style>
  #new-request label {
    color: white;
  }
</style>