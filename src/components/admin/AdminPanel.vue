<template>
  <div class="ui divider hidden"></div>

  <div class="ui divider hidden"></div>
  <h2 class="ui icon header center aligned">
    <i class="unlock alternate icon"></i>
    <div class="content">
      Administration
      <div class="sub header">Edit content</div>
    </div>
  </h2>
  <div class="ui divider hidden"></div>
  <div class="ui blue segment">

    <h2 class="ui header">
      <i class="wait icon"></i>
      <div class="content">
        Delete latest entries
        <div class="sub header">Select type and count</div>
      </div>
    </h2>

    <div class="ui selection dropdown">
      <input v-model="deleteLatestOptions.type" type="hidden" name="ResourceOrRequest">
      <div class="default text">Type</div>
      <div class="menu">
        <div class="item" data-value="paths">Paths</div>
        <div class="item" data-value="requests">Request</div>
      </div>
    </div>

    <div class="ui input">
      <input v-model="deleteLatestOptions.count" type="text" placeholder="Count">
    </div>

    <button @click="deleteLatest()" class="ui blue button">Delete</button>

    <div class="ui divider hidden"></div>
    <div class="ui horizontal divider">
      Or
    </div>
    <div class="ui divider hidden"></div>

    <h2 class="ui header">
      <i class="code icon"></i>
      <div class="content">
        Delete by regular expression
        <div class="sub header">Specify type of the entry and the field of the regex</div>
      </div>
    </h2>

    <div class="ui selection dropdown">
      <input v-model="deleteLatestOptions.type" type="hidden" name="ResourceOrRequest">
      <div class="default text">Type</div>
      <div class="menu">
        <div class="item" data-value="resources">Resource</div>
        <div class="item" data-value="requests">Request</div>
      </div>
    </div>

    <div class="ui selection dropdown">
      <input v-model="deleteByRegexOptions.field" type="hidden" name="ResourceOrRequest">
      <div class="default text">Field</div>
      <div class="menu">
        <div class="item" data-value="title">Title</div>
        <div class="item" data-value="description">Description</div>
      </div>
    </div>

    <div class="ui input">
      <input v-model="deleteByRegexOptions.regex" type="text" placeholder="Regex">
    </div>

    <button @click="deleteByRegex()" class="ui blue button">Delete</button>

  </div>
</template>

<script>
  import co from 'co';
  import * as adminFetcher from '../../http-fetchers/admin';
  import notifier from '../../utils/notifier';

  export default {
    name: 'AdminPanel',
    ready() {
      $('.dropdown').dropdown();
    },
    data() {
      return {
        deleteLatestOptions: {
          type: '',
          count: null
        },
        deleteByRegexOptions: {
          type: '',
          field: '',
          regex: ''
        }
      }
    },
    methods: {

      deleteLatest() {
        let self = this;
        co(function *() {
          try {
            yield adminFetcher.removeEntry(self.deleteLatestOptions);
            console.log('donee');
            notifier('success', 'Removed successfully!');
          } catch(err) {
            console.log(err);
          	notifier('error', 'Not deleted!')
          }
        });
      },

      deleteByRegex() {
        let self = this;
        co(function *() {
          yield adminFetcher.removeEntry(self.deleteByRegexOptions);
        });
      }

    }
  }
</script>