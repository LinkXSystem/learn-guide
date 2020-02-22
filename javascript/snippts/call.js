// 其实 callX 本质的行为是非常相似的
Function.prototype.callX = function() {};

(function() {
  const x = { value: 10 };
  test.applyX(x, [
    "linksystem",
    "China",
    function inline() {
      console.warn("-x-");
    }
  ]);
})();
