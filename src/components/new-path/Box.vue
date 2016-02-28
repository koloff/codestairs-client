<template>
  <div class="container-box">
    <div class="content-box">
      {{boxPosition}}
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
    props: ['resource', 'box-position'],
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


      this.calculateStyles();
    },

    methods: {
      calculateStyles() {
        let pos = this.boxPosition;


        if (pos.indexOf('first') > -1 && pos.indexOf('odd') > -1) {
          console.log(this.$el);
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