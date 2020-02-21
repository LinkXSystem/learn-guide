const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

/**
 * ops/sec 的作用
 *
 * 测试结果以每秒钟执行测试代码的次数（Ops/sec）显示，
 * 这个数值越大越好。除了这个结果外，同时会显示测试过程中的统计误差，以及相对最好的慢了多少（%），
 * 统计误差也是非常重要的指标，如果你写的测试用例不好，
 * 或者说后台正在运行一些其他程序，会造成统计误差过大，这时测试结果就不够可靠。
 *
 *  */

suite
  .add('RegExp#Test', function() {
    /o/.test('Hello Benchmark!');
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .run({
    async: true,
  });
