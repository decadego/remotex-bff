'use strict';

module.exports = () => {
  const config = {};

  config.nunjucks = {
    autoescape: true,
    throwOnUndefined: true,
    trimBlocks: false,
    lstripBlocks: false,
    cache: false,
  };

  config.loader = {
    assetsMap: require('../assets.json'),
    cdnHost: '',
  };

  config.browsersync = {
    init: true,
    files: [ 'app/view/**/*' ],
    logConnections: false,
  };

  return config;
};
