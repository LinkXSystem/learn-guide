function flow(request, response, funcs) {
  for (let i = 0; i < funcs.length; i++) {
    let func = funcs[i];
    func.call(null, request, response);
  }
}

module.exports = {
  flow
};
