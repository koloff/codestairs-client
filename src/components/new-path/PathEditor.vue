<template>
  <div>
    <h1>path editor</h1>
    resource4
    <div id="wrapper">
      <box
        v-if="domReady"
        v-for="resource in 10"
        :resource="resource">
        <!--:box-position="calculateBoxPosition($index, 5, 3)"-->

      </box>
    </div>

    <button @click="getResources()">{{boxesPerRow}}</button>

    {{resources | json}}

  </div>
</template>

<script>
  import Box from './Box.vue';
  import boxOptions from './box-options';

  export default {
    name: 'PathEditor',
    components: {
      Box
    },
    data() {
      return {
        boxesPerRow: null
      }
    },
    props: ['resources'],
    ready() {
      console.log('readyyy');
      this.domReady = true;

      let $wrapper = $('#wrapper');
      let sortable = new Sortable($wrapper.get(0), {
        animation: 150
      });

      this.boxesPerRow = this.calculateBoxesPerRow($wrapper);
      console.log('boxesPerRow: ', this.boxesPerRow);
    },
    methods: {

      calculateBoxesPerRow(wrapper) {
        let wrapperWidth = wrapper.width();
        return (Math.floor((wrapperWidth ) / boxOptions.containerBoxWidth));
      },

      calculateBoxRow(boxPosition, boxesPerLine) {
        let row = Math.floor(boxPosition / boxesPerLine);
        return row;
      },

      calculateBoxPosition(boxIndex, boxesPerRow, numberOfRow) {
        // result in the form: ['even', 'last']
        // this contains the position of the box related to the grid
        let position = [];

        if (numberOfRow % 2 === 0) {
          position.push('even');
        } else {
          position.push('odd');
        }

        if (boxIndex % boxesPerRow === 0) {
          position.push('first');
        } else if (boxIndex % boxesPerRow === boxesPerRow - 1) {
          position.push('last');
        } else {
          position.push('middle')
        }
        console.log(position);

        return position;
      },
      
      getResources() {
        console.log($pure(this.resources));
      }
    }
  }
</script>

<style>
  #wrapper {
    padding: 0;
    border: 1px solid green;
  }
</style>