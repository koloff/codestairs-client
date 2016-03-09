<template>
  <div>

    <div class="ui card course">
      <div class="add-box">

        <div class="ui left icon input">
          <input data-clickable="true"
                 @click="click($event)"
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



//      $('.url-input').on('input', function() {
//        var e = $.Event('keypress');
//        e.which = 13; // Character 'A'
//        $('.url-input').trigger(e);
//      });

    },
    methods: {
      click(event) {
        //        console.log(event);
        //        event.target.focus();
        //        event.preventDefault();
        //        event.stopPropagation();
      },

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