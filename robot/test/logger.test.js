const Logger = require('../src/logger');

test("logger's info", () => {
  let logger = new Logger('Jest');
  logger.info('This is message about test !!!');
});
