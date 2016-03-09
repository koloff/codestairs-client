<template>
  <div>

    <div class="ui card course">
      <div class="add-box">

        <div class="ui left icon input">
          <input
            v-model="url"
            data-clickable="true"
            type="text"
            placeholder="www.resource.com"
            class="url-input"/>

          <i class="world icon"></i>
        </div>

        <button data-clickable="true" @click="addClicked(url)" class="ui primary button ">
          Add
        </button>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InsertResourceBox',
    props: ['boxMethods'],
    data() {
      return {
        url: ''
      };
    },
    ready() {
    },
    methods: {
      change() {
        console.log('changed');
      },

      addClicked(url) {
        this.boxMethods.addResourceToPlaceholder(url);
      }
    }
  }
</script>

<style>
  .add-box {
    padding: 55px 0 0 37px;
  }

</style>