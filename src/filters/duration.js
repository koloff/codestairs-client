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
    case '3_hours':
      result = '1h+';
      break;
    case '1_day':
      result = '1 day';
      break;
    case '3_days':
      result = '3 days';
      break;
    case '1_week':
      result = '1 week';
      break;
  }

  return result;
});