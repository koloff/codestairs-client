import noty from 'noty';
import values from 'noty/';

/**
 * Show quick notification
 * @param type alert, error, success...
 * @param message
 */
export default function(type, message) {
  let n = noty({
    theme: 'relax',
    layout: 'bottomCenter',
    timeout: 1500,
    type: type,
    text: message,
    dismissQueue: false,
    animation: {
      open: {height: 'toggle'}, // jQuery animate function property object
      close: {height: 'easeOutBounce'}, // jQuery animate function property object
      easing: 'swing', // easing
      speed: 150 // opening & closing animation speed
    }
  });
}