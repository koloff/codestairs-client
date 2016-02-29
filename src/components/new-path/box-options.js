// size of the resource information box
const boxWidth = 170;
const boxHeight = 100;

// horizontal arrow sizes
const horizontalArrowSizes = {
  width: 40,
  height: 30,
  marginStart: 5,
  marginEnd: 5
};

// vertical arrow sizes
const verticalArrowSizes = {
  width: 20,
  height: 60,
  marginStart: 20,
  marginEnd: 5
};

let containerBoxWidth =
  boxWidth +
  horizontalArrowSizes.width +
  horizontalArrowSizes.marginStart +
  horizontalArrowSizes.marginEnd;

let containerBoxHeight =
  boxHeight +
  verticalArrowSizes.height +
  verticalArrowSizes.marginStart +
  verticalArrowSizes.marginEnd;


export default {
  boxWidth,
  boxHeight,
  horizontalArrowSizes,
  verticalArrowSizes,
  containerBoxWidth,
  containerBoxHeight
}