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
                    <input v-model="requestToAdd.availableTime" type="hidden" />
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

    <div class="ui four cards doubling">
      <!--<a v-link="{path: '/requests/V1GudZing'}" class="ui card">-->
      <!--<div class="content">-->
      <!--<div class="meta">-->
      <!--<span class="category">5 days</span>-->
      <!--<span class="right floated">pesho</span>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="content">-->
      <!--<div class="description">-->
      <!--<p>-->
      <!--<div class="ui gray label">Knows</div>-->
      <!--Programming basics and OOP. Have experience with C#.<br><br>-->
      <!--</p>-->
      <!--</div>-->
      <!--<div class="description">-->
      <!--<p>-->
      <!--<div class="ui green label">Requests</div>-->
      <!--Creating games with the Unity game engine.<br><br>-->
      <!--</p>-->
      <!--</div>-->
      <!--</div>-->
      <!--<div class="extra content">-->

      <!--<div class="ui icon buttons tiny">-->
      <!--<button class="ui button"><i class="icon thumbs up green"></i></button>-->
      <!--<button class="ui button"><i class="icon thumbs down red"></i></button>-->
      <!--</div>-->

      <!--<div class="right floated author">-->
      <!--4 answers-->
      <!--</div>-->
      <!--</div>-->
      <!--</a>-->
    </div>


  </div>
</template>

<script>
  import NewRequest from './NewRequest.vue';
  import  * as requestsFetcher from '../../http-fetchers/requests';
  import co from 'co';


  export default {
    name: 'RequestsPage',
    components: {NewRequest},
    data() {
      return {
        requestToAdd: {
          knows: '',
          wantsToLearn: '',
          availableTime: ''
        }
      }
    },
    ready() {
      $('#new-request')
        .modal({
          blurring: true
        })
        .modal('show');
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