// size of the resource information box
const boxWidth = 340;
const boxHeight = 150;

// horizontal arrow sizes
const horizontalArrowSizes = {
  width: 40,
  height: 70,
  marginStart: 19,
  marginEnd: 19
};

// vertical arrow sizes
const verticalArrowSizes = {
  width: 40,
  height: 60,
  marginStart: 20,
  marginEnd: 20
};

let horizontalArrowWidth =
  horizontalArrowSizes.width +
  horizontalArrowSizes.marginStart +
  horizontalArrowSizes.marginEnd;

let verticalArrowHeight =
  verticalArrowSizes.height +
  verticalArrowSizes.marginStart +
  verticalArrowSizes.marginEnd;

let containerBoxWidth = boxWidth + horizontalArrowWidth;
let containerBoxHeight = boxHeight + verticalArrowHeight;

export default {
  boxWidth,
  boxHeight,
  horizontalArrowSizes,
  verticalArrowSizes,
  horizontalArrowWidth,
  verticalArrowHeight,
  containerBoxWidth,
  containerBoxHeight
}