import Vue from 'vue';

Vue.filter('difficultyColor', function (difficulty){
  let result = difficulty;

  switch (difficulty) {
    case 'beginner':
      result = 'olive';
      break;
    case 'medium':
      result = 'green';
      break;
    case 'experienced':
      result = 'yellow';
      break;
    case 'expert':
      result = 'orange';
      break;
  }

  return result;
});