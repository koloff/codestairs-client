<template>
  <div>
    <path-editor :resources="resources"></path-editor>
  </div>
</template>

<script>
  import PathEditor from './PathEditor.vue';

  export default {
    name: 'NewPathPage',
    components: {
      PathEditor
    },
    data() {
      return {
        resources: [
          {value: 'resource1'},
          {value: 'resource2'},
          {value: 'resource3'},
          {value: 'resource4'}
        ]
      };
    }
  }
</script>