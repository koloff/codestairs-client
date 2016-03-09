import Vue from 'vue';

Vue.filter('difficulty', function (difficulty){
  let result = difficulty;

  switch (difficulty) {
    case 'beginner':
      result = 'Beginner';
      break;
    case 'medium':
      result = 'Medium';
      break;
    case 'experienced':
      result = 'Experienced';
      break;
    case 'expert':
      result = 'Expert';
      break;
  }

  return result;
});