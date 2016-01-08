<template>
  <div>

    <div class="ui very padded basic segment">
      <h2 class="ui header">
        <i class="file icon"></i>
        <div class="content">
          Add resource
          <div class="sub header">Add and describe programming tutorial or exercise</div>
        </div>
      </h2>
    </div>

    <div class="ui blue very padded secondary segment">
      <div :class="state.loading ? 'active' : ''" class="ui inverted dimmer">
        <div class="ui loader"></div>
      </div>
      <h4 class="ui horizontal divider header">
        <i class="world icon"></i>
        Resource URL
      </h4>

      <div class="ui fluid big left icon input">
        <input v-model="resource.url" type="text" placeholder="www.resource.com">
        <i class="world icon"></i>
      </div>

      <div class="ui divider small hidden"></div>

      <button @click="addResourceClick()" class="ui button big primary fluid">
        <i class="ui icon cloud download"></i>
        Add
      </button>

    </div>

  </div>
</template>


<script>
  import co from 'co';
  import notifier from '../../utils/notifier';
  import * as resources from '../../store/resources';
  import * as resourceHttp from '../../http-fetchers/resources';

  export default {
    name: 'AddResource',
    data() {
      return {
        resource: {
          url: ''
        },
        state: {
          loading: false
        }
      }
    },
    methods: {
      addResourceClick() {
        var self = this;
        co(function *() {
          try {
            self.state.loading = true;
            let result = yield resourceHttp.addResource(self.resource.url);
            notifier('success', 'The resource was added to Codestairs!');
            self.$route.router.go('/resources');
          } catch(err) {
            console.log(err);
            notifier('error', 'The resource was not added!');
          }

          self.state.loading = false;
        });
      }
    }
  }

</script>