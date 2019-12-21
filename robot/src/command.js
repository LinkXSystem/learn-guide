function MapToObject(target) {
  let temp_ = Object.create(null);

  for (let [k, v] of target) {
    temp_[k] = v;
  }

  return temp_;
}

module.exports = function(stdin) {
  const paramters = stdin.splice(2);

  let memory = new Map();

  for (let i = 0; i < paramters.length; i++) {
    const paramter = paramters[i];

    if (/^--[a-zA-Z]{0,}$/.test(paramter)) {
      const key = paramter.substring(2);
      memory.set(key, paramters[++i]);
      continue;
    }

    if (/^-[a-zA-Z]{0,}$/.test(paramter)) {
      const key = paramter.substring(1);
      memory.set(key, paramters[++i]);
      continue;
    }

    let temp_ = memory.get("_") || [];

    memory.set("_", [].concat(temp_, [paramter]));
  }

  return MapToObject(memory);
};
