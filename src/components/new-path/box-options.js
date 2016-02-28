// size of the resource information box
const boxWidth = 100;
const boxHeight = 100;
// size of the arrows between the resources
const arrowWidth = 20;
const arrowHeight = 20;
// margins in the two ends of the arrow: [start margin] ---> [end margin]
const arrowStartMargin = 5;
const arrowEndMargin = 5;

let containerBoxWidth = boxWidth + arrowWidth + arrowStartMargin + arrowEndMargin;
let containerBoxHeight = boxHeight + arrowHeight + arrowStartMargin + arrowEndMargin;


export default {
  boxWidth,
  boxHeight,
  arrowWidth,
  arrowHeight,
  arrowStartMargin,
  arrowEndMargin,
  containerBoxWidth,
  containerBoxHeight
}