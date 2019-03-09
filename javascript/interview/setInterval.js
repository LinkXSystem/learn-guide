'use strict';

const imitateInterval = function(fn, time) {
  let context = { timer: null };

  context.clear = function() {
    console.log(context.timer);
    clearTimeout(context.timer);
  };

  let _initial = function() {
    fn();
    context.timer = setTimeout(_initial, time);
  };

  _initial();

  return context;
};

let timer = null;
let i = 0;

timer = imitateInterval(() => {
  if (i >= 10) {
    timer.clear();
  }
  i += 1;
  console.log('================================');
}, 1000);
