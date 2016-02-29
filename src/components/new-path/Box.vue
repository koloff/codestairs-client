<template>
    <div class="container-box">
      <div class="content-box">
        {{boxPosition}}
      </div>
        <img class="arrow" src="../../assets/img/arrow.png" alt="next">
    </div>
</template>

<script>
  import boxOptions from './box-options';

  export default {
    name: 'Box',
    props: ['resource', 'index'],
    data() {
      return {
        boxPosition: []
      };
    },
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
    },

    events: {
      'boxes-positions-calculated': function(positions) {
        this.boxPosition = positions[this.index];
        this.calculateStyles();
      }
    },

    methods: {
      calculateStyles() {
        let pos = this.boxPosition;
        let $container = $(this.$el);

        if (pos.indexOf('first') > -1 && pos.indexOf('even') > -1) {
          // every first odd box should have left margin in order for the boxes to be aligned
          $container.css({
            marginLeft: `${boxOptions.horizontalArrowSizes.width}px`
          });
        }

        if (pos.indexOf('odd') > -1) {
          console.log($container);
          $container.find('.content-box')
            .css({
              float: 'right'
            });
        }


        // set arrow styles
        let $arrow = $container.find('.arrow');

        if (pos.indexOf('last') > -1) {
          //noinspection JSSuspiciousNameCombination
          $arrow
            .css({
              display: 'inline-block',
              transform: 'rotate(90deg)',
              transformOrigin: '0 0',
              // swap width and height because of the rotate
              width: boxOptions.verticalArrowSizes.height,
              height: boxOptions.verticalArrowSizes.width,
              marginTop: `${boxOptions.boxHeight + boxOptions.verticalArrowSizes.marginStart}px`,
              marginBottom: `10px`
            });

          if (pos.indexOf('even') > -1) {
            $arrow
              .css({
                marginLeft: `-${boxOptions.boxWidth / 2 - boxOptions.verticalArrowSizes.width / 2}px`
              })
          } else {
            $arrow
              .css({
//                marginLeft: `${boxOptions.boxWidth / 2 - boxOptions.verticalArrowSizes.width / 2 + boxOptions.horizontalArrowSizes.width}px`
              })
          }
        } else {
          $container.find('.arrow')
            .css({
              width: boxOptions.horizontalArrowSizes.width,
              height: boxOptions.horizontalArrowSizes.height
            })
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
    border: 1px solid purple;
  }

  .content-box {
    background: green;
  }

  .arrow {
    position: absolute;
  }
</style>