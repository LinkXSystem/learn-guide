Function.prototype.applyX = function(context, arguments) {
  let temp_ = Object(context) || globalThis;
  // 以下均为浅层冻结
  if (
    Object.isExtensible(context) ||
    Object.isSealed(context) ||
    Object.isFrozen(context)
  ) {
    temp_ = Object.assign({}, context);
  }

  // 匿名函数呢？
  let key = Symbol(this.name);

  temp_[key] = this;

  let r;

  try {
    if (!arguments.length) {
      return temp_[key]();
    }

    let args = [];

    for (let i = 0; i < arguments.length; i++) {
      args.push(`arguments[${i}]`);
    }

    return eval(`temp_[key](${args})`);
  } finally {
    temp_ = null;
  }

  return result;
};

function test(name, country) {
  console.warn(this, name, country);
}

(function() {
  const x = { value: 10 };
  test.applyX(x, ["linksystem", "China"]);
})();
