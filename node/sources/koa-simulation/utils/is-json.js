module.exports = function(body) {
  if (!body) return false;
  if ('string' == typeof body) return false;
  if ('function' == typeof body.pipe) return false;
  if (Buffer.isBuffer(body)) return false;

  return true;
};
