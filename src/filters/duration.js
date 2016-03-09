import Vue from 'vue';

Vue.filter('duration', function(duration) {
  let result = duration;

  switch (duration) {
    case '5_min':
      result = '5 min';
      break;
    case '15_min':
      result = '15 min';
      break;
    case '30_min':
      result = '30 min';
      break;
    case '1_hours':
      result = '1h+';
      break;
    case '2_hours':
      result = '2h+';
      break;
  }

  return result;
});