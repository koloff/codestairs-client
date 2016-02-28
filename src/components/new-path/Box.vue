<template>
  <div class="container-box">
    <div class="content-box">
      {{index}}
    </div>
    <div class="arrow-box">
      <img class="arrow" src="../../assets/img/arrow.png" alt="next">
    </div>
  </div>
</template>

<script>
  import boxOptions from './box-options';
  
  export default {
    name: 'Box',
    props: ['resource', 'index'],
    ready() {

      $('.container-box')
        .css({
          width: `${boxOptions.containerBoxWidth}px`,
          height: `${boxOptions.containerBoxHeight}px`
        });

      $('.content-box')
        .css({
          display: 'inline-block',
          width: boxOptions.boxWidth,
          height: boxOptions.boxHeight
        });

      $('.arrow')
        .css({
          width: boxOptions.arrowWidth,
          height: boxOptions.arrowHeight
        });
    },

    events: {
      'boxes-positions-calculated': function(positions) {
        console.log('calculatedd');
        this.boxPosition = positions[this.index];
        this.calculateStyles();
      }
    },

    methods: {
      calculateStyles() {
        let pos = this.boxPosition;
        console.log(pos);

        if (pos.indexOf('first') > -1 && pos.indexOf('odd') > -1) {
          // first odd
        }
      }
    }
  }
</script>


<style>
  .container-box {
    box-sizing: border-box;
    padding: 0;
    display: inline-block;
    background: red;
  }

  .content-box {
    background: green;
  }
</style>