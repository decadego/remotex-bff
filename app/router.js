'use strict';

module.exports = app => {
  require('./router/pc')(app);
  require('./router/api')(app);
};
