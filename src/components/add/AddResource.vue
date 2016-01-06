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

  import * as resources from '../../store/resources';
  import * as resourceHttp from '../../utils/resources-http';

  export default {
    name: 'AddResource',
    data() {
      return {
        resource: {
          url: ''
        }
      }
    },
    methods: {
      addResourceClick() {
        resourceHttp.addResource(this.resource.url);
      }
    }
  }

</script>