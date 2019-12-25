// TODO: 可以参考此仓库的实现：https://github.com/pbojinov/request-ip#how-it-works
function getClientIPAddress(request) {
  return (
    request.headers["x-forwarded-for"] ||
    request.connection.remoteAddress ||
    request.socket.remoteAddress ||
    request.connection.socket.remoteAddress
  );
}

module.exports = { getClientIPAddress };
