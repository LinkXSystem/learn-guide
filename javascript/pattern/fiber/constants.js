const MillisecondUnit = 1000;

export const sleep = function(second) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, second * MillisecondUnit);
  });
};
